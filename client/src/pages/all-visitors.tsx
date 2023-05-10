import { Add } from "@mui/icons-material";
import { useTable, useList, useShow, useOne } from "@pankod/refine-core";
import {
  Box,
  Typography,
  Stack,
  Show,
  NumberField,
  TextFieldComponent,
  TextField,
  DateField,
  Select,
  MenuItem,
} from "@pankod/refine-mui";
import { useNavigate } from "@pankod/refine-react-router-v6";

import { VisitorCard, VisitorButton, VisitorDetailsCard } from "components";
import { useMemo } from "react";

const AllVisitors = () => {
  const navigate = useNavigate();

  const {
    tableQueryResult: { data, isLoading, isError },
    current,
    setCurrent,
    setPageSize,
    pageCount,
    sorter,
    setSorter,
    filters,
    setFilters,
  } = useTable({ resource: "visitors" });

  const allVisitors = data?.data ?? [];

  const currentFilterValues = useMemo(() => {
    const logicalFilters = filters.flatMap((item) =>
      "field" in item ? item : []
    );

    return {
      fullName:
        logicalFilters.find((item) => item.field === "fullName")?.value || "",
      city: logicalFilters.find((item) => item.field === "city")?.value || "",
    };
  }, [filters]);

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>error...</div>;

  return (
    <Box>
      <Box mt="20px" sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        <Stack direction="column" width="100%">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            {!allVisitors.length ? "There are no visitors" : "All Visitors"}
          </Typography>
          <Box
            mb={2}
            mt={3}
            display="flex"
            width="84%"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Box
              display="flex"
              gap={2}
              flexWrap="wrap"
              mb={{ xs: "20px", sm: 0 }}
            >
              <VisitorButton
                title="Add Visitor"
                handleClick={() => navigate("/visitors/create")}
                backgroundColor="#475be8"
                color="#fcfcfc"
                icon={<Add />}
              />
              <TextField
                variant="outlined"
                color="info"
                placeholder="Search by title"
                value={currentFilterValues.fullName}
                onChange={(e) => {
                  setFilters([
                    {
                      field: "fullName",
                      operator: "contains",
                      value: e.currentTarget.value
                        ? e.currentTarget.value
                        : undefined,
                    },
                  ]);
                }}
              />
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                value={currentFilterValues.city}
                onChange={(e) => {
                  setFilters(
                    [
                      {
                        field: "city",
                        operator: "eq",
                        value: e.target.value,
                      },
                    ],
                    "replace"
                  );
                }}
              >
                <MenuItem value="">All</MenuItem>
                {["Lappeenranta", "Jyvaskyla"].map((type) => (
                  <MenuItem key={type} value={type.toLowerCase()}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
        // mt="0px"
        // sx={{
        //   //   display: "grib",
        //   //   gridTemplateColumns: "repeat(auto-fill, minmax(330px, 1fr))",
        //   backgroundColor: "#fcfcfc",
        // }}
        // display="flex"
        // flexDirection="column"
        // boxShadow={1}
        // borderRadius={2}
        // width="flex"
        // flexWrap="wrap"
        mt="20px"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          backgroundColor: "#fcfcfc",
        }}
      >
        {allVisitors.map((visitor) => (
          <VisitorDetailsCard
            key={visitor._id}
            id={visitor._id}
            fullName={visitor.fullName}
            phoneNumber={visitor.phoneNumber}
            city={visitor.city}
            property={visitor.property}
            company={visitor.company}
            plateNumber={visitor.plateNumber}
          />
        ))}
      </Box>

      {allVisitors.length > 0 && (
        <Box display="flex" gap={2} mt={3} flexWrap="wrap">
          <VisitorButton
            title="Previous"
            handleClick={() => setCurrent((prev) => prev - 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={!(current > 1)}
          />
          <Box
            display={{ xs: "hidden", sm: "flex" }}
            alignItems="center"
            gap="5px"
          >
            Page{" "}
            <strong>
              {current} of {pageCount}
            </strong>
          </Box>
          <VisitorButton
            title="Next"
            handleClick={() => setCurrent((prev) => prev + 1)}
            backgroundColor="#475be8"
            color="#fcfcfc"
            disabled={current === pageCount}
          />
          <Select
            variant="outlined"
            color="info"
            displayEmpty
            required
            inputProps={{ "aria-label": "Without label" }}
            defaultValue={10}
            onChange={(e) =>
              setPageSize(e.target.value ? Number(e.target.value) : 10)
            }
          >
            {[10, 20, 30, 40, 50].map((size) => (
              <MenuItem key={size} value={size}>
                Show {size}
              </MenuItem>
            ))}
          </Select>
        </Box>
      )}
    </Box>
  );
};

export default AllVisitors;

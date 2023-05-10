// import { useShow, useOne } from "@pankod/refine-core"
// import {
//     Show,
//     NumberField,
//     TextFieldComponent as TextField,
//     DateField,
// } from "@pankod/refine-mui"
// import { Typography, Stack } from "@mui/material";

// const PostShow = () => {
//     const { queryResult } = useShow();
//     const { data, isLoading } = queryResult;

//     const record = data?.data;

//     const { data: categoryData, isLoading: categoryIsLoading } = useOne({
//         resource: "categories",
//         id: record?.category?.id || "",
//         queryOptions: {
//             enabled: !!record,
//         },
//     });

//     return (
//         <Show isLoading={isLoading}>
//             <Stack gap={1}>
//                 <Typography variant="body1" fontWeight="bold">
//                     Id
//                 </Typography>
//                 <NumberField value={record?.id ?? ""} />
//                 <Typography variant="body1" fontWeight="bold">
//                     Title
//                 </Typography>
//                 <TextField value={record?.title} />
//                 <Typography variant="body1" fontWeight="bold">
//                     Content
//                 </Typography>
//                 <TextField value={record?.content} />
//                 <Typography variant="body1" fontWeight="bold">
//                     Category
//                 </Typography>

//                 {categoryIsLoading ? (
//                     <>Loading...</>
//                 ) : (
//                     <>{categoryData?.data?.title}</>
//                 )}
//                 <Typography variant="body1" fontWeight="bold">
//                     Status
//                 </Typography>
//                 <TextField value={record?.status} />
//                 <Typography variant="body1" fontWeight="bold">
//                     Created At
//                 </Typography>
//                 <DateField value={record?.createdAt} />
//             </Stack>
//         </Show>
//     );
// };

// export default PostShow

import React from "react";
import { useShow } from "@pankod/refine-core";
import {
  Show,
  NumberField,
  TextFieldComponent as TextField,
} from "@pankod/refine-mui";
import { Typography, Stack, Box } from "@mui/material";
import { useGetIdentity, useDelete } from "@pankod/refine-core";
import { useParams, useNavigate } from "@pankod/refine-react-router-v6";
import {
  ChatBubble,
  Delete,
  Edit,
  Phone,
  Place,
  Star,
  EmailOutlined,
  LocationCity,
  BusinessCenter,
  PinOutlined,
} from "@mui/icons-material";
import { VisitorDetailsCard, VisitorButton } from "components";

const PostShow = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity();
  const { id } = useParams();
  const { mutate } = useDelete();

  const { queryResult } = useShow({ resource: "visitors", id });
  const { data, isLoading } = queryResult;

  const visitorDetails = data?.data ?? {};

  const handleDeleteVisitor = () => {
    const response = window.confirm(
      "Are you sure you want to delete this visitor?"
    );
    if (response) {
      mutate(
        {
          resource: "visitors",
          id: id as string,
        },
        {
          onSuccess: () => {
            navigate("/visitors");
          },
        }
      );
    }
  };

  return (
    <Show isLoading={isLoading}>
      {/* <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          Full Name
        </Typography>
        <TextField value={record?.fullName} />
        <Typography variant="body1" fontWeight="bold">
          Phone Number
        </Typography>
        <TextField value={record?.phoneNumber} />
        <Typography variant="body1" fontWeight="bold">
          City
        </Typography>
        <TextField value={record?.city} />
        <Typography variant="body1" fontWeight="bold">
          Property
        </Typography>
        <TextField value={record?.property} />
        <Typography variant="body1" fontWeight="bold">
          Company
        </Typography>
        <TextField value={record?.company} />
        <Typography variant="body1" fontWeight="bold">
          Plate Number
        </Typography>
        <TextField value={record?.plateNumber} />
      </Stack> */}
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            backgroundColor: "#fcfcfc",
          }}
        >
          <Box
            // component={Link}
            // to={`/visitors/show/${id}`}
            width="100%"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: "20px",
              padding: "20px",
              "&:hover": {
                boxShadow: "0 22px 45px 2px rgba(176,176,176,0.1)",
              },
            }}
          >
            <Stack
              direction="column"
              justifyContent="space-between"
              flex={1}
              gap={{ xs: 4, sm: 2 }}
            >
              <Stack
                gap={2}
                direction="row"
                flexWrap="wrap"
                alignItems="center"
              >
                <Typography fontSize={22} fontWeight={600} color="#11142d">
                  {visitorDetails.fullName}
                </Typography>
              </Stack>
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
                gap={2}
              >
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 300 }}
                  gap={1.5}
                  direction="row"
                >
                  <Phone sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {visitorDetails.phoneNumber}
                  </Typography>
                </Stack>
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 300 }}
                  gap={1.5}
                  direction="row"
                >
                  <Place sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {visitorDetails.city}
                  </Typography>
                </Stack>
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 300 }}
                  gap={1.5}
                  direction="row"
                >
                  <LocationCity sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {visitorDetails.property}
                  </Typography>
                </Stack>
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 300 }}
                  gap={1.5}
                  direction="row"
                >
                  <BusinessCenter sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {visitorDetails.company}
                  </Typography>
                </Stack>
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 100 }}
                  gap={1.5}
                  direction="row"
                >
                  <PinOutlined sx={{ color: "#808191" }} />
                  <Typography fontSize={14} color="#808191">
                    {visitorDetails.plateNumber}
                  </Typography>
                </Stack>
                <Stack
                  flex={1}
                  minWidth={{ xs: "100%", sm: 100 }}
                  maxWidth={150}
                  gap={1.5}
                  direction="row"
                >
                  <VisitorButton
                    title={"Delete"}
                    backgroundColor={"#d42e2e"}
                    color="#FCFCFC"
                    fullWidth
                    icon={<Delete />}
                    handleClick={() => {
                      handleDeleteVisitor();
                    }}
                  />
                </Stack>
              </Stack>
              {/* <Box
              width="100%"
              flex={1}
              maxWidth={326}
              display="flex"
              flexDirection="column"
              gap="20px"
            >
              <Stack
                width="100%"
                mt="25px"
                direction="column"
                flexWrap="wrap"
                gap={2}
              >
                <VisitorButton
                  title={"Edit"}
                  backgroundColor="#475BE8"
                  color="#FCFCFC"
                  fullWidth
                  icon={<Edit />}
                  handleClick={() => {
                    navigate(`/visitors/edit/${visitorDetails._id}`);
                  }}
                />
                <VisitorButton
                  title={"Delete"}
                  backgroundColor={"#d42e2e"}
                  color="#FCFCFC"
                  fullWidth
                  icon={<Delete />}
                  handleClick={() => {
                    handleDeleteVisitor();
                  }}
                />
              </Stack>
            </Box> */}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Show>
  );
};

export default PostShow;

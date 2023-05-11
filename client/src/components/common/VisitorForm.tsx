import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@pankod/refine-mui";
import { FormProps } from "interfaces/post";
import CustomButton from "./CustomButton";
import React, { useState } from "react";

const cities = [
  { value: "", label: "Select City" },
  { value: "jyvaskyla", label: "Jyväskylä" },
  { value: "lappeenranta", label: "Lappeenranta" },
];

const properties: { [key: string]: { value: string; label: string }[] } = {
  jyvaskyla: [
    { value: "piippukatu", label: "Piippukatu 11" },
    { value: "lutakonaukio", label: "Lutakonaukio 7" },
    { value: "mattilanniemi", label: "Mattilanniemi 6-8" },
    { value: "ohjelmakaari", label: "Ohjelmakaari 10" },
    { value: "ylistonmaentie26", label: "Ylistönmäentie 26" },
    { value: "ylistonmaentie31", label: "Ylistönmäentie 31" },
    { value: "survontie", label: "Survontie 9" },
  ],
  lappeenranta: [{ value: "laserkatu", label: "Laserkatu 6" }],
};

const VisitorForm = ({
  type,
  register,
  handleSubmit,
  formLoading,
  onFinishHandler,
}: FormProps) => {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedProperty, setSelectedProperty] = useState<string>("");

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value);
    setSelectedProperty("");
  };

  const handlePropertyChange = (event: SelectChangeEvent<string>) => {
    setSelectedProperty(event.target.value);
  };

  return (
    <Box>
      {/* <Typography fontSize={25} fontWeight={700} color="#11142d">
        {type} a Visitor
      </Typography> */}

      <Box borderRadius="15px" padding="10px" bgcolor="#fcfcfc">
        <form
          style={{
            marginTop: "-15px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Full Name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("fullName", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Phone Number
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("phoneNumber", { required: true })}
            />
          </FormControl>
          <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                City
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                value={selectedCity}
                onChange={handleCityChange}
              >
                {cities.map((city) => (
                  <MenuItem key={city.value} value={city.value}>
                    {city.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Property
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                value={selectedProperty}
                onChange={handlePropertyChange}
              >
                <MenuItem value="">Select Property</MenuItem>
                {properties[selectedCity]?.map((property) => (
                  <MenuItem key={property.value} value={property.value}>
                    {property.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>

          {/* <Stack direction="row" gap={4}>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                City
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                {...register("city", {
                  required: true,
                })}
              >
                <MenuItem value="">Select City</MenuItem>
                <MenuItem value="jyvaskyla">Jyväskylä</MenuItem>
                <MenuItem value="lappeenranta">Lappeeranta</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ flex: 1 }}>
              <FormHelperText
                sx={{
                  fontWeight: 500,
                  margin: "10px 0",
                  fontSize: 16,
                  color: "#11142d",
                }}
              >
                Property
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "aria-label": "Without label" }}
                defaultValue=""
                {...register("property", {
                  required: true,
                })}
              >
                <MenuItem value="">Select Property</MenuItem>
                <MenuItem value="piippukatu">Piippukatu 11</MenuItem>
                <MenuItem value="lutakonaukio">Lutakonaukio 7</MenuItem>
                <MenuItem value="mattilanniemi">Mattilanniemi 6-8</MenuItem>
                <MenuItem value="ohjelmakaari">Ohjelmakaari 10</MenuItem>
                <MenuItem value="ylistonmaentie26">Ylistönmäentie 26</MenuItem>
                <MenuItem value="ylistonmeentie31">Ylistönmäentie 31</MenuItem>
                <MenuItem value="survontie">Survontie 9</MenuItem>
                <MenuItem value="laserkatu">Laserkatu 6</MenuItem>
              </Select>
            </FormControl>
          </Stack> */}

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Company Name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("company", { required: true })}
            />
          </FormControl>

          <FormControl>
            <FormHelperText
              sx={{
                fontWeight: 500,
                margin: "10px 0",
                fontSize: 16,
                color: "#11142d",
              }}
            >
              Plate Number
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("plateNumber", { required: true })}
            />
          </FormControl>

          {/* <CustomButton
            type="submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475be8"
            color="#fcfcfc"
          /> */}
        </form>
      </Box>
    </Box>
  );
};

export default VisitorForm;

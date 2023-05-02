import { Link } from "react-router-dom";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Show,
} from "@pankod/refine-mui";
import { Place } from "@mui/icons-material";

import { VisitorCardProps } from "interfaces/visitor";

const VisitorCard = ({
  id,
  fullName,
  phoneNumber,
  city,
  property,
  company,
  plateNumber,
}: VisitorCardProps) => {
  return (
    <Card
      component={Link}
      to={`/visitors/show/${id}`}
      sx={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "auto",
        padding: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
        cursor: "pointer",
        flexWrap: "wrap",
      }}
      elevation={0}
    >
      <CardContent sx={{ display: "flex", flexWrap: "wrap" }}>
        {/* <Stack
          gap={1}
          spacing={1}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Typography>{fullName}</Typography>
          <Typography>{phoneNumber}</Typography>
          <Typography>{city}</Typography>
          <Typography>{property}</Typography>
          <Typography>{company}</Typography>
          <Typography>{plateNumber}</Typography>
        </Stack> */}
        <Stack
          gap={1}
          spacing={1}
          direction="row"
          flexWrap="wrap"
          minWidth="auto"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flex: "1",
              minWidth: "auto",
            }}
          >
            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 100px", marginRight: "10px" }}
            >
              {fullName}
            </Typography>

            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 100px", marginRight: "10px" }}
            >
              {phoneNumber}
            </Typography>

            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 100px", marginRight: "10px" }}
            >
              {city}
            </Typography>

            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 100px", marginRight: "10px" }}
            >
              {property}
            </Typography>

            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 150px", marginRight: "10px" }}
            >
              {company}
            </Typography>

            <Typography
              minWidth="auto"
              flexDirection="row"
              style={{ flex: "0 0 70px", marginRight: "10px" }}
            >
              {plateNumber}
            </Typography>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default VisitorCard;

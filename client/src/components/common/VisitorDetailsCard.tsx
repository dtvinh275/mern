import { VisitorCardProps, InfoBarProps } from "interfaces/visitor";
import {
  EmailOutlined,
  LocationCity,
  Phone,
  Place,
  BusinessCenter,
  PinOutlined,
} from "@mui/icons-material";
import { useGetIdentity } from "@pankod/refine-core";
import { Link } from "@pankod/refine-react-router-v6";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const VisitorDetailsCard = ({
  id,
  fullName,
  phoneNumber,
  city,
  property,
  company,
  plateNumber,
}: VisitorCardProps) => {
  return (
    <Box
      component={Link}
      to={`/visitors/show/${id}`}
      width="100%"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        gap: "10px",
        padding: "10px",
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
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          //gap={2}
        >
          <Stack
            gap={1.5}
            direction="row"
            flex={1}
            minWidth={{ xs: "100%", sm: 100 }}
          >
            <Typography fontSize={18} fontWeight={600} color="#11142d">
              {fullName}
            </Typography>
          </Stack>
          <Stack
            flex={1}
            minWidth={{ xs: "100%", sm: 100 }}
            gap={1.5}
            direction="row"
          >
            <Phone sx={{ color: "#808191" }} />
            <Typography fontSize={14} color="#808191">
              {phoneNumber}
            </Typography>
          </Stack>
          <Stack
            flex={1}
            minWidth={{ xs: "100%", sm: 100 }}
            gap={1.5}
            direction="row"
          >
            <Place sx={{ color: "#808191" }} />
            <Typography fontSize={14} color="#808191">
              {city}
            </Typography>
          </Stack>
          <Stack
            flex={1}
            minWidth={{ xs: "100%", sm: 100 }}
            gap={1.5}
            direction="row"
          >
            <LocationCity sx={{ color: "#808191" }} />
            <Typography fontSize={14} color="#808191">
              {property}
            </Typography>
          </Stack>
          <Stack
            flex={1}
            minWidth={{ xs: "100%", sm: 100 }}
            gap={1.5}
            direction="row"
          >
            <BusinessCenter sx={{ color: "#808191" }} />
            <Typography fontSize={14} color="#808191">
              {company}
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
              {plateNumber}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default VisitorDetailsCard;

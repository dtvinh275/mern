import { Typography, Box, Stack } from "@pankod/refine-mui";
import { useDelete, useGetIdentity, useShow } from "@pankod/refine-core";
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
import { Link } from "@pankod/refine-react-router-v6";
import { VisitorDetailsCard, VisitorButton } from "components";
import { VisitorCardProps } from "interfaces/visitor";
import { useList } from "@pankod/refine-core";

function checkImage(url: any) {
  const img = new Image();
  img.src = url;
  return img.width !== 0 && img.height !== 0;
}

const VisitorDetails = () => {
  const navigate = useNavigate();
  const { data: user } = useGetIdentity({});
  const { queryResult } = useShow();
  const { mutate } = useDelete();
  const { id } = useParams();

  const { data, isLoading, isError } = queryResult;

  const visitorDetails = data?.data ?? {};

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  //   const isCurrentUser = user.email === visitorDetails.creator.email;
  const isCurrentUserAdmin = user.role === "admin";

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
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Agents List
      </Typography>

      <Box
        mt="20px"
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
            <Stack gap={2} direction="row" flexWrap="wrap" alignItems="center">
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
                minWidth={{ xs: "100%", sm: 300 }}
                gap={1.5}
                direction="row"
              >
                <PinOutlined sx={{ color: "#808191" }} />
                <Typography fontSize={14} color="#808191">
                  {visitorDetails.plateNumber}
                </Typography>
              </Stack>
            </Stack>
            <Box
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
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default VisitorDetails;

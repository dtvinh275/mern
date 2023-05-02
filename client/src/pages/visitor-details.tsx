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
} from "@mui/icons-material";
import { VisitorButton } from "components";

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
    <Box
      borderRadius="15px"
      padding="20px"
      bgcolor="#FCFCFC"
      width="fit-content"
    >
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Details
      </Typography>
      <Box
        mt="10px"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <Box flex={1} maxWidth={764}>
          <Box mt="0px">
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="space-between"
              alignItems="top"
              gap={2}
            >
              <Box>
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                  {visitorDetails.fullName}
                </Typography>
                <Typography fontSize={17} color="#808191">
                  {visitorDetails.phoneNumber}
                </Typography>
              </Box>

              <Box>
                <Typography fontSize={18} color="#11142D">
                  Plate Number
                </Typography>
                <Typography fontSize={17} color="#808191">
                  {visitorDetails.plateNumber}
                </Typography>
              </Box>

              <Stack direction="column" alignItems="top">
                <Typography fontSize={18} color="#11142D">
                  Location
                </Typography>
                <Typography fontSize={17} color="#808191">
                  {visitorDetails.property}
                </Typography>
                <Typography fontSize={17} color="#808191">
                  {visitorDetails.city}
                </Typography>
              </Stack>

              <Stack direction="column" alignItems="top">
                <Typography fontSize={18} color="#11142D">
                  Company
                </Typography>
                <Typography fontSize={17} color="#808191">
                  {visitorDetails.company}
                </Typography>
              </Stack>

              <Stack
                width="100%"
                mt="25px"
                direction="row"
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
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default VisitorDetails;

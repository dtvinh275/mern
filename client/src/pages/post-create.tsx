import { Create, useAutocomplete } from "@pankod/refine-mui";
import { Box, TextField, Autocomplete } from "@mui/material";
import { useForm } from "@pankod/refine-react-hook-form";
import { Controller } from "react-hook-form";
import VisitorForm from "components/common/VisitorForm";

const PostCreate = () => {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFinishHandler = async (data: Record<string, any>) => {
    //if (!propertyImage.url) return alert("Please select an image");

    await onFinish(data);
  };

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <VisitorForm
          type="Create"
          register={register}
          onFinish={onFinish}
          formLoading={formLoading}
          handleSubmit={handleSubmit}
          onFinishHandler={onFinishHandler}
        />
        {/* <TextField
          {...register("fullName", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.fullName}
          helperText={(errors as any)?.fullName?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Full name"
          name="fullName"
        />
        <TextField
          {...register("phoneNumber", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.phoneNumber}
          helperText={(errors as any)?.phoneNumber?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Phone Number"
          name="phoneNumber"
        />
        <TextField
          {...register("city", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.city}
          helperText={(errors as any)?.city?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="City"
          name="city"
        />
        <TextField
          {...register("property", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.property}
          helperText={(errors as any)?.property?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Property"
          name="property"
        />
        <TextField
          {...register("company", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.company}
          helperText={(errors as any)?.company?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Company"
          name="company"
        />
        <TextField
          {...register("plateNumber", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.plateNumber}
          helperText={(errors as any)?.plateNumber?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Plate Number"
          name="plateNumber"
        /> */}
        {/* <Controller
          control={control}
          name="category"
          rules={{ required: "This field is required" }}
          // eslint-disable-next-line
          defaultValue={null as any}
          render={({ field }) => (
            <Autocomplete
              {...categoryAutocompleteProps}
              {...field}
              onChange={(_, value) => {
                field.onChange(value);
              }}
              getOptionLabel={(item) => {
                return (
                  categoryAutocompleteProps?.options?.find(
                    (p) => p?.id?.toString() === item?.id?.toString()
                  )?.title ?? ""
                );
              }}
              isOptionEqualToValue={(option, value) =>
                value === undefined ||
                option?.id?.toString() === value?.id?.toString()
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Category"
                  margin="normal"
                  variant="outlined"
                  error={!!(errors as any)?.category?.id}
                  helperText={(errors as any)?.category?.id?.message}
                  required
                />
              )}
            />
          )}
        />
        <TextField
          {...register("status", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.status}
          helperText={(errors as any)?.status?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Status"
          name="status"
        />
        <TextField
          {...register("createdAt", {
            required: "This field is required",
          })}
          error={!!(errors as any)?.createdAt}
          helperText={(errors as any)?.createdAt?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          label="Created At"
          name="createdAt"
        /> */}
      </Box>
    </Create>
  );
};

export default PostCreate;

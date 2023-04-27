// import {
//   Edit,
//   Box,
//   useAutocomplete,
//   TextField,
//   Autocomplete,
// } from "@pankod/refine-mui";
// import { useForm, Controller } from "@pankod/refine-react-hook-form";

// const PostEdit = () => {
//   const {
//       saveButtonProps,
//       refineCore: { queryResult },
//       register,
//       control,
//       formState: { errors },
//   } = useForm();

//   const postsData = queryResult?.data?.data;

//   const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
//       resource: "categories",
//       defaultValue: postsData?.category?.id,
//   });

//   const { autocompleteProps: userAutocompleteProps } = useAutocomplete({
//       resource: "users",
//       defaultValue: postsData?.user?.id,
//   });

//   const { autocompleteProps: tagsAutocompleteProps } = useAutocomplete({
//       resource: "tags",
//       defaultValue: postsData?.tags,
//   });

//   const { autocompleteProps: languageAutocompleteProps } = useAutocomplete({
//       resource: "languages",
//       defaultValue: postsData?.language,
//   });

//   return (
//       <Edit saveButtonProps={saveButtonProps}>
//           <Box
//               component="form"
//               sx={{ display: "flex", flexDirection: "column" }}
//               autoComplete="off"
//           >
//               <TextField
//                   {...register("id", {
//                       required: "This field is required",
//                       valueAsNumber: true,
//                   })}
//                   error={!!(errors as any)?.id}
//                   helperText={(errors as any)?.id?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="number"
//                   label="Id"
//                   name="id"
//                   disabled
//               />
//               <TextField
//                   {...register("title", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.title}
//                   helperText={(errors as any)?.title?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="text"
//                   label="Title"
//                   name="title"
//               />
//               <TextField
//                   {...register("slug", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.slug}
//                   helperText={(errors as any)?.slug?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="text"
//                   label="Slug"
//                   name="slug"
//               />
//               <TextField
//                   {...register("content", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.content}
//                   helperText={(errors as any)?.content?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   multiline
//                   label="Content"
//                   name="content"
//               />
//               <TextField
//                   {...register("hit", {
//                       required: "This field is required",
//                       valueAsNumber: true,
//                   })}
//                   error={!!(errors as any)?.hit}
//                   helperText={(errors as any)?.hit?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="number"
//                   label="Hit"
//                   name="hit"
//               />
//               <Controller
//                   control={control}
//                   name="category"
//                   rules={{ required: "This field is required" }}
//                   // eslint-disable-next-line
//                   defaultValue={null as any}
//                   render={({ field }) => (
//                       <Autocomplete
//                           {...categoryAutocompleteProps}
//                           {...field}
//                           onChange={(_, value) => {
//                               field.onChange(value);
//                           }}
//                           getOptionLabel={(item) => {
//                               return (
//                                   categoryAutocompleteProps?.options?.find(
//                                       (p) =>
//                                           p?.id?.toString() ===
//                                           item?.id?.toString(),
//                                   )?.title ?? ""
//                               );
//                           }}
//                           isOptionEqualToValue={(option, value) =>
//                               value === undefined ||
//                               option?.id?.toString() === value?.id?.toString()
//                           }
//                           renderInput={(params) => (
//                               <TextField
//                                   {...params}
//                                   label="Category"
//                                   margin="normal"
//                                   variant="outlined"
//                                   error={!!(errors as any)?.category?.id}
//                                   helperText={
//                                       (errors as any)?.category?.id?.message
//                                   }
//                                   required
//                               />
//                           )}
//                       />
//                   )}
//               />
//               <Controller
//                   control={control}
//                   name="user"
//                   rules={{ required: "This field is required" }}
//                   // eslint-disable-next-line
//                   defaultValue={null as any}
//                   render={({ field }) => (
//                       <Autocomplete
//                           {...userAutocompleteProps}
//                           {...field}
//                           onChange={(_, value) => {
//                               field.onChange(value);
//                           }}
//                           getOptionLabel={(item) => {
//                               return (
//                                   userAutocompleteProps?.options?.find(
//                                       (p) =>
//                                           p?.id?.toString() ===
//                                           item?.id?.toString(),
//                                   )?.firstName ?? ""
//                               );
//                           }}
//                           isOptionEqualToValue={(option, value) =>
//                               value === undefined ||
//                               option?.id?.toString() === value?.id?.toString()
//                           }
//                           renderInput={(params) => (
//                               <TextField
//                                   {...params}
//                                   label="User"
//                                   margin="normal"
//                                   variant="outlined"
//                                   error={!!(errors as any)?.user?.id}
//                                   helperText={
//                                       (errors as any)?.user?.id?.message
//                                   }
//                                   required
//                               />
//                           )}
//                       />
//                   )}
//               />
//               <TextField
//                   {...register("status", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.status}
//                   helperText={(errors as any)?.status?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="text"
//                   label="Status"
//                   name="status"
//               />
//               <TextField
//                   {...register("status_color", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.status_color}
//                   helperText={(errors as any)?.status_color?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   type="text"
//                   label="Status Color"
//                   name="status_color"
//               />
//               {/* 
//                   DatePicker component is not included in "@pankod/refine-mui" package.
//                   To use a <DatePicker> component, you can follow the official documentation for Material UI.
                  
//                   Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
//               */}
//               <TextField
//                   {...register("createdAt", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.createdAt}
//                   helperText={(errors as any)?.createdAt?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   label="Created At"
//                   name="createdAt"
//               />

//               {/* 
//                   DatePicker component is not included in "@pankod/refine-mui" package.
//                   To use a <DatePicker> component, you can follow the official documentation for Material UI.
                  
//                   Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
//               */}
//               <TextField
//                   {...register("publishedAt", {
//                       required: "This field is required",
//                   })}
//                   error={!!(errors as any)?.publishedAt}
//                   helperText={(errors as any)?.publishedAt?.message}
//                   margin="normal"
//                   fullWidth
//                   InputLabelProps={{ shrink: true }}
//                   label="Published At"
//                   name="publishedAt"
//               />
//               <Controller
//                   control={control}
//                   name="tags"
//                   rules={{ required: "This field is required" }}
//                   // eslint-disable-next-line
//                   defaultValue={[] as any}
//                   render={({ field }) => (
//                       <Autocomplete
//                           {...tagsAutocompleteProps}
//                           {...field}
//                           multiple
//                           onChange={(_, value) => {
//                               field.onChange(
//                                   value?.map((item: any) => item?.id ?? item),
//                               );
//                           }}
//                           getOptionLabel={(item) => {
//                               return (
//                                   tagsAutocompleteProps?.options?.find(
//                                       (p) =>
//                                           p?.id?.toString() ===
//                                           (item?.id ?? item)?.toString(),
//                                   )?.title ?? ""
//                               );
//                           }}
//                           isOptionEqualToValue={(option, value) =>
//                               value === undefined ||
//                               option?.id?.toString() ===
//                                   (value?.id ?? value)?.toString()
//                           }
//                           renderInput={(params) => (
//                               <TextField
//                                   {...params}
//                                   label="Tags"
//                                   margin="normal"
//                                   variant="outlined"
//                                   error={!!(errors as any)?.tags}
//                                   helperText={(errors as any)?.tags?.message}
//                                   required
//                               />
//                           )}
//                       />
//                   )}
//               />
//               <Controller
//                   control={control}
//                   name="language"
//                   rules={{ required: "This field is required" }}
//                   // eslint-disable-next-line
//                   defaultValue={null as any}
//                   render={({ field }) => (
//                       <Autocomplete
//                           {...languageAutocompleteProps}
//                           {...field}
//                           onChange={(_, value) => {
//                               field.onChange(value?.id ?? value);
//                           }}
//                           getOptionLabel={(item) => {
//                               return (
//                                   languageAutocompleteProps?.options?.find(
//                                       (p) =>
//                                           p?.id?.toString() ===
//                                           (item?.id ?? item)?.toString(),
//                                   )?.title ?? ""
//                               );
//                           }}
//                           isOptionEqualToValue={(option, value) =>
//                               value === undefined ||
//                               option?.id?.toString() ===
//                                   (value?.id ?? value)?.toString()
//                           }
//                           renderInput={(params) => (
//                               <TextField
//                                   {...params}
//                                   label="Language"
//                                   margin="normal"
//                                   variant="outlined"
//                                   error={!!(errors as any)?.language}
//                                   helperText={
//                                       (errors as any)?.language?.message
//                                   }
//                                   required
//                               />
//                           )}
//                       />
//                   )}
//               />
//           </Box>
//       </Edit>
//   );
// };

// export default PostEdit

import { Edit, useAutocomplete } from "@pankod/refine-mui";
import { Box, TextField, Autocomplete } from "@mui/material";
import { useForm } from "@pankod/refine-react-hook-form"
import { Controller } from "react-hook-form";

const PostEdit = () => {
    const {
        saveButtonProps,
        refineCore: { queryResult },
        register,
        control,
        formState: { errors },
    } = useForm();

    const blogPostsData = queryResult?.data?.data;

    const { autocompleteProps: categoryAutocompleteProps } = useAutocomplete({
        resource: "categories",
        defaultValue: blogPostsData?.category?.id,
    });

    return (
        <Edit saveButtonProps={saveButtonProps}>
            <Box
                component="form"
                sx={{ display: "flex", flexDirection: "column" }}
                autoComplete="off"
            >
                <TextField
                    {...register("id", {
                        required: "This field is required",
                        valueAsNumber: true,
                    })}
                    error={!!(errors as any)?.id}
                    helperText={(errors as any)?.id?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="number"
                    label="Id"
                    name="id"
                    disabled
                />
                <TextField
                    {...register("title", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.title}
                    helperText={(errors as any)?.title?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Title"
                    name="title"
                />
                <TextField
                    {...register("content", {
                        required: "This field is required",
                    })}
                    error={!!(errors as any)?.content}
                    helperText={(errors as any)?.content?.message}
                    margin="normal"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                    type="text"
                    label="Content"
                    name="content"
                />
                <Controller
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
                                        (p) =>
                                            p?.id?.toString() ===
                                            item?.id?.toString(),
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
                                    helperText={
                                        (errors as any)?.category?.id?.message
                                    }
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
                {/*
                    DatePicker component is not included in "@refinedev/mui" package.
                    To use a <DatePicker> component, you can follow the official documentation for Material UI.

                    Docs: https://mui.com/x/react-date-pickers/date-picker/#basic-usage
                */}
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
                />
            </Box>
        </Edit>
    );
};

export default PostEdit
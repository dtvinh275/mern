import { useShow, useOne } from "@pankod/refine-core"
import {
    Show,
    NumberField,
    TextFieldComponent as TextField,
    DateField,
} from "@pankod/refine-mui"
import { Typography, Stack } from "@mui/material";

const PostShow = () => {
    const { queryResult } = useShow();
    const { data, isLoading } = queryResult;

    const record = data?.data;

    const { data: categoryData, isLoading: categoryIsLoading } = useOne({
        resource: "categories",
        id: record?.category?.id || "",
        queryOptions: {
            enabled: !!record,
        },
    });

    return (
        <Show isLoading={isLoading}>
            <Stack gap={1}>
                <Typography variant="body1" fontWeight="bold">
                    Id
                </Typography>
                <NumberField value={record?.id ?? ""} />
                <Typography variant="body1" fontWeight="bold">
                    Title
                </Typography>
                <TextField value={record?.title} />
                <Typography variant="body1" fontWeight="bold">
                    Content
                </Typography>
                <TextField value={record?.content} />
                <Typography variant="body1" fontWeight="bold">
                    Category
                </Typography>

                {categoryIsLoading ? (
                    <>Loading...</>
                ) : (
                    <>{categoryData?.data?.title}</>
                )}
                <Typography variant="body1" fontWeight="bold">
                    Status
                </Typography>
                <TextField value={record?.status} />
                <Typography variant="body1" fontWeight="bold">
                    Created At
                </Typography>
                <DateField value={record?.createdAt} />
            </Stack>
        </Show>
    );
};

export default PostShow

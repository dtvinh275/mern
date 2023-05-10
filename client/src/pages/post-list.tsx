// import React from "react";
// import {
//   useDataGrid,
//   EditButton,
//   ShowButton,
//   DeleteButton,
//   List,
//   DateField,
// } from "@pankod/refine-mui";
// import { DataGrid, GridColumns } from "@mui/x-data-grid";
// import { useMany } from "@pankod/refine-core";

// const PostList = () => {
//   const { dataGridProps } = useDataGrid();

//   const { data, isLoading } = useMany({
//     resource: "visitors",
//     ids: dataGridProps?.rows?.map((item: any) => item?.category?.id) ?? [],
//     queryOptions: {
//       enabled: !!dataGridProps?.rows,
//     },
//   });

//   const columns = React.useMemo<GridColumns<any>>(
//     () => [
//       {
//         field: "id",
//         headerName: "Id",
//         type: "number",
//         minWidth: 50,
//       },
//       {
//         field: "fullName",
//         flex: 1,
//         headerName: "Full Name",
//         minWidth: 200,
//       },
//       {
//         field: "phoneNumber",
//         flex: 1,
//         headerName: "Phone Number",
//         minWidth: 200,
//       },
//       {
//         field: "city",
//         flex: 1,
//         headerName: "City",

//         minWidth: 200,
//       },
//       {
//         field: "property",
//         flex: 1,
//         headerName: "Property",

//         minWidth: 200,
//       },
//       {
//         field: "company",
//         flex: 1,
//         headerName: "Company",

//         minWidth: 200,
//       },
//       {
//         field: "plateNumber",
//         flex: 1,
//         headerName: "Plate Number",

//         minWidth: 200,
//       },
//       // {
//       //   field: "status",
//       //   flex: 1,
//       //   headerName: "Status",
//       //   minWidth: 200,
//       // },
//       // {
//       //   field: "createdAt",
//       //   flex: 1,
//       //   headerName: "Created At",
//       //   minWidth: 250,
//       //   renderCell: function render({ value }) {
//       //     return <DateField value={value} />;
//       //   },
//       // },
//       {
//         field: "actions",
//         headerName: "Actions",
//         sortable: false,
//         renderCell: function render({ row }) {
//           return (
//             <>
//               <EditButton hideText recordItemId={row.id} />
//               <ShowButton hideText recordItemId={row.id} />
//             </>
//           );
//         },
//         align: "center",
//         headerAlign: "center",
//         minWidth: 80,
//       },
//     ],
//     [data?.data]
//   );

//   return (
//     <List>
//       <DataGrid {...dataGridProps} columns={columns} autoHeight />
//     </List>
//   );
// };

// export default PostList;

import React from "react";
import {
  useDataGrid,
  EditButton,
  ShowButton,
  List,
  DateField,
} from "@pankod/refine-mui";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import { useMany } from "@pankod/refine-core";

const VisitorList = () => {
  const { dataGridProps } = useDataGrid();

  const { data, isLoading } = useMany({
    resource: "visitors",
    ids: dataGridProps?.rows?.map((item: any) => item?._id) ?? [],
    queryOptions: {
      enabled: !!dataGridProps?.rows,
    },
  });

  const getRowId = (row: any) => row?._id;

  const columns: GridColumns = React.useMemo(
    () => [
      {
        field: "fullName",
        flex: 1,
        headerName: "Full Name",
        minWidth: 200,
      },
      {
        field: "phoneNumber",
        flex: 1,
        headerName: "Phone Number",
        minWidth: 200,
      },
      {
        field: "city",
        flex: 1,
        headerName: "City",
        minWidth: 200,
      },
      {
        field: "property",
        flex: 1,
        headerName: "Property",
        minWidth: 200,
      },
      {
        field: "company",
        flex: 1,
        headerName: "Company",
        minWidth: 200,
      },
      {
        field: "plateNumber",
        flex: 1,
        headerName: "Plate Number",
        minWidth: 200,
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <>
              <EditButton hideText recordItemId={row._id} />
              <ShowButton hideText recordItemId={row._id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );

  return (
    <List>
      <DataGrid
        {...dataGridProps}
        columns={columns}
        autoHeight
        loading={isLoading}
        rows={data?.data ?? []}
        getRowId={getRowId}
      />
    </List>
  );
};

export default VisitorList;

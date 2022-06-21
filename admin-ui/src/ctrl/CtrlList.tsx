import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CtrlList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Ctrls"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="shimi" source="shimi" />
        <TextField label="test" source="test" />
        <TextField label="test_1" source="test_1" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

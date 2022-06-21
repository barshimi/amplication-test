import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CtrlEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="shimi" source="shimi" />
        <TextInput label="test" source="test" />
        <TextInput label="test_1" source="test_1" />
      </SimpleForm>
    </Edit>
  );
};

import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CtrlCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="test_1" source="test_1" />
      </SimpleForm>
    </Create>
  );
};

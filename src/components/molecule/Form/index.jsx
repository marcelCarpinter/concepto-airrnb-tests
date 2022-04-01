import React from "react";

//material components
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled } from "@mui/system";

//React Components
//import { myTheme } from "components/template";
import Input from "components/atom/Input";
import DatePicker from "components/atom/DatePicker";
import Select from "components/atom/Select";
import Stack from "@mui/material/Stack";

function FormBase({ children = [], action = "", method = "" }) {
  return (
    <form action={action} method={method}>
      <List>
        {children.filter(Boolean).map((child, index) => {
          return <ListItem key={index}>{child}</ListItem>;
        })}
      </List>
    </form>
  );
}

export default FormBase;

//Estilo para poner horizontal los inputs de este form

export const EvenStack = styled(Stack)`
  display: flex;
  flex: 1 1 0px;
  align-items: stretch;
  > * {
    position: relative;
    flex: 1;
    align-self: stretch;
  }
`;

export function FormSearch({ children = [], action = "", method = "" }) {
  return (
    <FormBase>
      <Input description="Ubicación" helper="Cerca de Aqui"></Input>
      <EvenStack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <DatePicker description="Llegada"></DatePicker>
        <DatePicker description="Salida"></DatePicker>
      </EvenStack>
      <EvenStack
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        <Select description="Adultos"></Select>
        <Select description="Niños"></Select>
      </EvenStack>
      {children}
    </FormBase>
  );
}

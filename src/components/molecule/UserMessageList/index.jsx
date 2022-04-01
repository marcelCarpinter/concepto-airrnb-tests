import React from "react";
import { myTheme } from "components/template";

//material components
import { styled } from "@mui/system";
import List from "@mui/material/List";

const MsgList = styled(List)``;

export default function index({ children }) {
  return (
    <MsgList sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {children}
    </MsgList>
  );
}

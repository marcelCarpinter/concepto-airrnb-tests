import React, { useRef, useState } from "react";
import styled from "styled-components";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Pago() {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
      <PayPalButtons style={{ layout: "horizontal" }} />
    </PayPalScriptProvider>
  );
}

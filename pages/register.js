import React from "react";
import Register from "../components/register/register.component";
import GridWrap from "../components/gridWrap/gridWrap.component";

import { gridSize, backgroundColours } from "../types";

const RegisterPage = () => (
  <GridWrap size={gridSize.sm} color={backgroundColours.register}>
    <Register />
  </GridWrap>
);

export default RegisterPage;

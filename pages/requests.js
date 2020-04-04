import React from "react";
import Requests from "../components/requests/requests.component";
import GridWrap from "../components/gridWrap/gridWrap.component";
import { gridSize, backgroundColours } from "../types";

const RequestsPage = () => (
  <GridWrap size={gridSize.md} color={backgroundColours.Requests}>
    <Requests />
  </GridWrap>
);

export default RequestsPage;

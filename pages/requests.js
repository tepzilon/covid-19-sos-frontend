import React from "react";
import Requests from "../components/requests/requests.component";
import GridWrap from "../components/gridWrap/gridWrap.component";
import { gridSize, backgroundColours } from "../types";
import Navbar from "../components/navbar/navbar";

const RequestsPage = () => (
  <div>
    <Navbar />
    <GridWrap size={gridSize.md} color={backgroundColours.Requests}>
      <Requests />
    </GridWrap>
  </div>

);

export default RequestsPage;

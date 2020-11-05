import React, { Component } from "react";
import { Grid } from "../common/Grid";
import { RestDashBoardState, RestDashBoardColDefs } from "../interfaces/Restaurant";
import { TestData } from "../test-data";

export class RestDashboardContainer extends Component<{}, RestDashBoardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      restaurants: TestData,
      colDefs: RestDashBoardColDefs
    }
  }

  render() {
    const { restaurants, colDefs } = this.state;
    return <Grid data={restaurants} colDefs={colDefs}></Grid>
  }
}
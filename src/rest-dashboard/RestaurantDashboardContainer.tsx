import React, { Component } from "react";
import { Grid } from "../common/Grid";
import { RestDashBoardState, Sample, RestDashBoardColDefs } from "../interfaces/Restaurant";

export class RestDashboardContainer extends Component<{}, RestDashBoardState> {

  constructor(props: {}) {
    super(props);
    this.state = {
      restaurants: Sample,
      colDefs: RestDashBoardColDefs
    }
  }

  render() {
    const { restaurants, colDefs } = this.state;
    return <Grid data={restaurants} colDefs={colDefs}></Grid>
  }
}
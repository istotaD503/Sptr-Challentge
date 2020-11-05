import React, { Component } from "react";
import { Grid } from "../common/Grid";
import { RestDashBoardState, RestDashBoardColDefs, RestaurantRow } from "../interfaces/Restaurant";
import { TestData } from "../test-data";
import { Search } from "./search/Search";

export class RestDashboardContainer extends Component<{}, RestDashBoardState> {

  private static searchFields: Array<keyof RestaurantRow> = ['name', 'city', 'genre'];

  constructor(props: {}) {
    super(props);
    this.state = {
      restaurants: TestData,
      colDefs: RestDashBoardColDefs,
      searchTerm: undefined,
      activeSearchTerm: undefined
    }
  }

  private setSearchTerm(value: string): void {
    this.setState({
      searchTerm: value
    });
    if (!value) {
      this.applySearch();
    }
  }

  private applySearch(): void {
    this.setState({
      activeSearchTerm: this.state.searchTerm
    });
  }

  // move to grid
  private globalSearch(rowData: RestaurantRow): boolean {
    if (!this.state.activeSearchTerm) { return true; }
    return RestDashboardContainer.searchFields.some(field => {
      const cellValue = rowData[field];
      if (cellValue && this.state.activeSearchTerm) {
        const normalizedValue = cellValue.toLowerCase();
        const normalizedSearchTerm = this.state.activeSearchTerm.toLowerCase()
        return normalizedValue.includes(normalizedSearchTerm);
      }
    });
  }

  render() {
    const { restaurants, colDefs } = this.state;
    return <div className="RestDashboard">
      <Search
        handleChange={e => this.setSearchTerm(e)}
        handleApply={() => this.applySearch()}
      ></Search>
      <Grid data={restaurants} colDefs={colDefs} globalSearch={(rowData) => this.globalSearch(rowData)}></Grid>
    </div>
  }
}
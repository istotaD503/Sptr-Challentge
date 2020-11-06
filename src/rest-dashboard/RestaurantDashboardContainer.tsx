import React, { Component } from "react";
import { Grid } from "../common/grid/Grid";
import { RestDashBoardState, RestDashBoardColDefs, RestaurantRow } from "../interfaces/Restaurant";
import { TestData, states } from "../test-data";
import { Search } from "../common/search/Search";
import { Filter } from "../common/filter/Filter";
import { PaginationControl } from "../common/pagination/Pagination";

export class RestDashboardContainer extends Component<{}, RestDashBoardState> {
  private static searchFields: Array<keyof RestaurantRow> = [
    "name",
    "city",
    "genre",
  ];

  constructor(props: {}) {
    super(props);
    this.state = {
      initialRestaurants: TestData,
      restaurants: TestData,
      colDefs: RestDashBoardColDefs,
      searchTerm: "",
      stateFilter: Object.assign({}, states[0]),
      page: 1,
    };
  }

  private setSearchTerm(value: string): void {
    this.setState({
      searchTerm: value,
    });
    if (!value) {
      this.applySearch();
    }
  }

  private selectStateFilter(e: string): void {
    const state = states.find((s) => s.name === e);
    if (state) {
      this.setState({
        stateFilter: Object.assign({}, state),
      });
      const filteredRestaurants = this.globalSearch(state);
      this.setState({
        page: 1,
        restaurants: filteredRestaurants
      });
    }
  }

  private applySearch(): void {
    const filteredRestaurants = this.globalSearch();
    this.setState({
      page: 1,
      restaurants: filteredRestaurants
    });
  }

  private switchPage(e: boolean): void {
    const page = this.state.page === 1 && !e ?
      1 :
      this.state.page + (e ? 1 : -1)
    this.setState({ page });
  }

  private globalSearch(stateFilter?: { name: string; abbrev: string }): any[] {
    return this.state.initialRestaurants.filter((rowData) => {
      const searchPass =
        !this.state.searchTerm ||
        RestDashboardContainer.searchFields.some((field) => {
          const cellValue = rowData[field];
          if (cellValue && this.state.searchTerm) {
            const normalizedValue = cellValue.toLowerCase();
            const normalizedSearchTerm = this.state.searchTerm.toLowerCase();
            return normalizedValue.includes(normalizedSearchTerm);
          }
          return false;
        });

      const currentFilterAbbrev = (stateFilter || this.state.stateFilter).abbrev;
      const filterPass = currentFilterAbbrev === "All" || rowData.state === currentFilterAbbrev;

      return searchPass && filterPass;
    });
  }

  render() {
    const { restaurants, colDefs, stateFilter, page } = this.state;
    return (
      <div className="RestDashboard">
        <div className="GridHeader">
          <Search
            handleChange={(e) => this.setSearchTerm(e)}
            handleApply={() => this.applySearch()}
          ></Search>
          <Filter
            title={stateFilter.name}
            list={states}
            selectStateFilter={(e) => this.selectStateFilter(e)}
          ></Filter>
          <PaginationControl
            page={page}
            switchPage={(e) => this.switchPage(e)}
          ></PaginationControl>
        </div>
        <Grid
          page={page}
          data={restaurants}
          colDefs={colDefs}
        ></Grid>
      </div>
    );
  }
}
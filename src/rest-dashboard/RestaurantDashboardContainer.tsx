import React, { Component } from "react";
import { Grid } from "../common/grid/Grid";
import { RestDashBoardState, RestDashBoardColDefs, RestaurantRow } from "../interfaces/Restaurant";
import { TestData } from "../test-data";
import { Search } from "../common/search/Search";
import { Filter } from "../common/filter/Filter";
import { PaginationControl } from "../common/pagination/Pagination";

export class RestDashboardContainer extends Component<{}, RestDashBoardState> {

  private static searchFields: Array<keyof RestaurantRow> = ['name', 'city', 'genre'];
  private states = [ {name: 'New York', abbrev: 'NY'}, {name: 'Colorado', abbrev: 'CO'}, {name: 'Arizona', abbrev: 'AZ'} ];

  constructor(props: {}) {
    super(props);
    this.state = {
      restaurants: TestData,
      colDefs: RestDashBoardColDefs,
      searchTerm: undefined,
      activeSearchTerm: undefined,
      stateFilter: 'All States',
      page: 1
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
      activeSearchTerm: this.state.searchTerm,
      page: 1
    });
  }

  // move to grid
  private globalSearch(rowData: RestaurantRow): boolean {
    if (!this.state.activeSearchTerm && (this.state.stateFilter === 'All States')) { return true; }
    const searchPass = RestDashboardContainer.searchFields.some(field => {
      const cellValue = rowData[field];
      if (cellValue && this.state.activeSearchTerm) {
        const normalizedValue = cellValue.toLowerCase();
        const normalizedSearchTerm = this.state.activeSearchTerm.toLowerCase()
        return normalizedValue.includes(normalizedSearchTerm);
      }
      return false;
    });

    const filterPass = this.state.stateFilter === 'All States' ||
      rowData.state === this.states.find(s => s.name === this.state.stateFilter)?.abbrev;

    return !!(this.state.activeSearchTerm && searchPass && filterPass);
  }

  private selectStateFilter(e: string): void {
    const stateAbbrev = this.states.find(s => s.name === e)?.abbrev;
    if (stateAbbrev) {
      this.setState({
        stateFilter: e
      });
      this.applySearch();
    }
  }

  private switchPage(e: boolean): void {
    this.setState({
      page: this.state.page + (e ? 1 : -1)
    });
  }

  render() {
    const { restaurants, colDefs, stateFilter, page } = this.state;
    return <div className="RestDashboard">
      <div className="GridHeader">
        <Search
          handleChange={e => this.setSearchTerm(e)}
          handleApply={() => this.applySearch()}>
        </Search>
        <Filter
          title={stateFilter}
          list={this.states}
          selectStateFilter={e => this.selectStateFilter(e)}>
        </Filter>
        <PaginationControl page={page} switchPage={e => this.switchPage(e)}></PaginationControl>
      </div>
      <Grid
        page={page}
        data={restaurants}
        colDefs={colDefs}
        globalSearch={(rowData) => this.globalSearch(rowData)}>
      </Grid>
    </div>
  }
}
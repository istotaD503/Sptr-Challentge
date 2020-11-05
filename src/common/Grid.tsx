import React from "react";
import { GridProps } from "../interfaces/Restaurant";
import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";

export class Grid<T extends string> extends React.Component<GridProps<T>, never> {

  constructor(props: GridProps<T>) {
      super(props)
  }

  render() {
    const { data, colDefs, globalSearch } = this.props;
    return (
        <div className="Grid">
            <HeaderRow colDefs={colDefs}></HeaderRow>
            {data.filter(globalSearch).map((rest: any) => {
                return <DataRow key={rest.id} record={rest} colDefs={colDefs}></DataRow>
            })}
        </div>
        );
  }
}
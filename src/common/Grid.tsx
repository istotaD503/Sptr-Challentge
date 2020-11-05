import React from "react";
import { GridProps } from "../interfaces/Restaurant";
import { HeaderRow } from "./HeaderRow";

export class Grid extends React.Component<GridProps, never> {

  constructor(props: GridProps) {
      super(props)
  }

  render() {
    const { data, colDefs } = this.props;
    return (
        <div className="Grid">
            <HeaderRow data={data} colDefs={colDefs}></HeaderRow>
            
            {data.map((rest: any, idx: number) => {
                return <div>{rest.name}</div>
            })}
        </div>
        );
  }
}
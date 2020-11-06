import React from "react";
import { GridProps } from "../../interfaces/Restaurant";
import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";
import { NoResultsPlug } from "./NoResultsPlug";

export class Grid<T extends string> extends React.Component<GridProps<T>, never> {

  constructor(props: GridProps<T>) {
      super(props)
  }

  render() {
    const { data, colDefs, globalSearch } = this.props;
    const filtered = data.filter(globalSearch);
    return (
        <div className="Grid">
            <HeaderRow colDefs={colDefs}></HeaderRow>
            {
                !!filtered && !!filtered.length ?
                <div>       
                    {filtered.map(rest => {
                        return <DataRow key={rest.id} record={rest} colDefs={colDefs}></DataRow>
                    })}
                </div> :
                <NoResultsPlug></NoResultsPlug>
            }

        </div>
        );
  }
}
import React from "react";
import { GridProps } from "../../interfaces/Restaurant";
import { HeaderRow } from "./HeaderRow";
import { DataRow } from "./DataRow";
import { NoResultsPlug } from "./NoResultsPlug";

export class Grid<T extends string> extends React.Component<GridProps<T>, never> {

  constructor(props: GridProps<T>) {
      super(props)
  }

  private paginate(page: number, data: any[]): any[] {
    const start = page * 10 - 10;
    const end = page * 10;
    return data.slice(start, end);
  }

  render() {
    const { data, colDefs, page } = this.props;
    const filtered = this.paginate(page, data);
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
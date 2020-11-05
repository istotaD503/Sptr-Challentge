import React from "react";
import { RowProps } from "../../interfaces/Restaurant";
import { Cell } from "./Cell";

export class DataRow<T extends string> extends React.Component<RowProps<T>, never> {
    constructor(props: RowProps<T>) {
        super(props)
    }
  render() {
    const { record, colDefs } = this.props;
    return (
        <div className="DataRow">
            {colDefs.map((colDef, id) => {
                return <Cell<T> key={id} record={record} colDef={colDef}></Cell>
        })}
        </div>
    )
  }
}
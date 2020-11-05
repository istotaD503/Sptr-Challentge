import React from "react";
import { CellProps } from "../interfaces/Restaurant";

export class Cell<T> extends React.Component<CellProps<T>, never> {
  constructor(props: CellProps<T>) {
    super(props);
  }
  render() {
    const { record, colDef } = this.props;
    return (
        <div className="HeaderCell" style={ { width: colDef.width || '100px' } }>
            { record[colDef.field] }
        </div>
        )
  }
}

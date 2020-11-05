import React from "react";
import { CellProps } from "../interfaces/Restaurant";

export class Cell<T> extends React.Component<CellProps<T>, never> {
  constructor(props: CellProps<T>) {
    super(props);
  }
  render() {
    const { record, colDef } = this.props;
    const cellValue = record[colDef.field];
    return (
        <div>
          { !colDef.hide &&
            <div className="Cell" style={ { width: colDef.width || '200px' } } title={ cellValue }>
              { cellValue }
            </div>
          }
        </div>
        )
  }
}

import React from "react";
import { GridProps } from "../interfaces/Restaurant";

export class HeaderRow<T extends string> extends React.Component<GridProps<T>, never> {

    constructor(props: GridProps<T>) {
        super(props)
    }

  render() {
    const { colDefs } = this.props;
    return (
        <div className="HeaderRow">
            {
                colDefs.map((colDef, id) => {
                    return colDef.hide ?
                            <div key={id}></div> :
                            <div className="HeaderCell" key={id} style={ { width: colDef.width || '200px' } }>{ colDef.header }</div>
                })
            }
        </div>
        )
  }
}

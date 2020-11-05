import React from "react";
import { GridProps } from "../interfaces/Restaurant";

export class HeaderRow extends React.Component<GridProps, never> {

    constructor(props: GridProps) {
        super(props)
    }

  render() {
    const { colDefs } = this.props;
    return (
        <div className="HeaderRow">
            {
                colDefs.map(colDef => {
                    return <div className="HeaderCell" style={ { padding: '5px' } }>{ colDef.header }</div>
                })
            }
        </div>
        )
  }
}

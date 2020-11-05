import React, { Component } from "react";

export class Filter extends Component<{ title: string, list: {name: string, abbrev: string}[], selectStateFilter: (state: string) => void }, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      listOpen: false
    };
  }

  toggleList() {
    this.setState((prevState: any) => ({
      listOpen: !prevState.listOpen,
    }));
  }

  selectItem(e: any): void {
    this.setState({
        listOpen: false
      });
    this.props.selectStateFilter(e.target.outerText)
  }

  render() {
    const { list, title } = this.props;
    const { listOpen } = this.state;
    return (
      <div className="dd-wrapper">
        <div className="DropdownListHeader" onClick={() => this.toggleList()}>
          <div className="DropdownListHeaderTitle">{title}</div>
          {/* {listOpen ? "up" : "down"} */}
        </div>
        {listOpen && (
          <ul className="DropdownList">
            {list.map((item, id) => (
              <li className="DropdownListItem" key={id} onClick={e => this.selectItem(e)}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

import React, { Component, ChangeEvent } from "react";
import { SearchProps } from "../../interfaces/Restaurant";

export class Search extends Component<SearchProps, never> {
  constructor(props: SearchProps) {
    super(props);
  }

  private handleChange(e: ChangeEvent<HTMLInputElement>): void {
    e.preventDefault();
    this.props.handleChange(e.target.value);
  }

  private handleApply(e: React.MouseEvent<HTMLButtonElement, MouseEvent>|React.KeyboardEvent<HTMLInputElement>): void {
    if (!!(e as any).key) {
      if ((e as any).key === 'Enter') {
        this.props.handleApply();
      }
    } else {
      this.props.handleApply();
    }
  }

  render() {
    return <div className="Search">
        <input
          type="text"
          placeholder="Type name, city or genre"
          onChange={e => this.handleChange(e)}
          onKeyUp={e => this.handleApply(e)}/>
        <button onClick={e => this.handleApply(e)}>Search</button>
    </div>
  }
}

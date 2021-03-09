import React, { Component } from "react";
import Link from "./Link";

class Footer extends Component {
  render() {
    return (
      <p className="footer">
        Show:
        <Link
          onClick={() => this.props.onClick(0)}
          active={this.props.visibilityFilter === 0}
        >
          All
        </Link>
        {" | "}
        <Link
          onClick={() => this.props.onClick(1)}
          active={this.props.visibilityFilter === 1}
        >
          Active
        </Link>
        {" | "}
        <Link
          onClick={() => this.props.onClick(2)}
          active={this.props.visibilityFilter === 2}
        >
          Completed
        </Link>
      </p>
    );
  }
}

export default Footer;

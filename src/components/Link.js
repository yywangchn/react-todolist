import React, { Component } from "react";

class Link extends Component {
  render() {
    // console.log(this.props);
    const { active, onClick, children } = this.props;
    if (active) {
      return <span>{children}</span>;
    }
    return (
      <a
        href="javascript:;"
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    );
  }
}

export default Link;

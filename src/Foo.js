import React from "react";

const propTypes = {};
const defaultProps = {};

export default class Foo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="foo" />
    );
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

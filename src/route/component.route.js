import React from 'react';
class Route extends React.Component {
  render() {
    return this.props.render ? React.createElement(this.props.render, this.props) : this.props.children
  }
}

export default Route


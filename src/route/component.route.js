import React from 'react';
class Route extends React.Component {
  render() {
    return this.props.render ?
    <this.props.render { ...this.props } />:
          typeof this.props.children === "string" ?
          this.props.children :
          this.props.children.map(
            (child, key) =>
                typeof child === "string" ?
                child :
                React.cloneElement(child, {
                 ...child.props,
                 key,
                })
          )
  }
}

export default Route


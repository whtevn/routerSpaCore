import React from 'react';
const NOOP = ()=>{}
class Link extends React.Component {
  render() {
    const location = this.props.navigation.getIn(["data", "location"])||"/"
    const current = this.props.to&&location.match(this.props.to)
    const navigation = this.props.navigateWith
    const href = "#"+(navigation?"":this.props.to);
		const onClick = this.props.onClick || NOOP;

    return <a
             href={href}
             className={current?"is-selected":""}
             onClick={
							()=>{
								onClick();
								navigation&&this.goto.bind(this)
							}
						}>{this.props.children}</a>
  }

  goto(e){
    e.preventDefault();
    this.props.navigateWith(this.props.to)
  }
}

export default Link


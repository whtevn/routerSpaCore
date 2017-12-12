import React from 'react';
import Route from '../route/component.route';
import { panelChanged } from '../reducer.router';

class Panel extends React.Component {
  render() {
    return this.props.ignoreWhen?'':<div className={(this.props.className||"")+" "+this.props.panelName}>
      { this.foundElement?React.cloneElement(this.foundElement, {
        ...this.props,
        children: this.foundElement.props.children
        }):"" }
    </div>
  }

  componentDidMount(){
    this.changePanel(this.props)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.navigation.getIn(["data", "location"]) != nextProps.navigation.getIn(["data", "location"])) this.changePanel(nextProps)
  }

  changePanel(props){
    const { panel, panelName, navigation, children, exact, ignoreWhen } = props;
    children = children.map?this.props.children:[this.props.children];
    if(ignoreWhen){
       this.foundElement = '';
       return true
    }
    let params={}
    const location = navigation.getIn(["data", "location"])||"/"
    const allowedChildren = children.filter(c => c.type === Route)
    for(var i = 0; i<allowedChildren.length; i++){
      const child = allowedChildren[i];
      const findParams = new RegExp(/:([^\/]*)/, "g")
      const query = child.props.when.replace(findParams, "([^\\/]*)");
      const regx = exact ?
                    new RegExp(`^${query}$`) :
                    new RegExp(`^${query}.*`) ;
			const found = location.match(regx)
      if(found){
				const paramValues = child.props.when.match(findParams);
				if(paramValues) {
					params = paramValues.reduce((result, next, key)=> {
						result[next.replace(":", "")] = found[key+1]
						return result;
					}, {})
				}
        this.foundElement = React.cloneElement(child, { ...this.props, ...child.props, params });
        break;
      }
    }
    if(!this.foundElement) return true;
    const route = this.foundElement.props.when;

		const current = panel.getIn(["data", panelName])
		const found = {
      panelName,
      route,
      params
    }
    if(panelChanged({ current, found })) this.props.rendering(found);
  }
}

export default Panel

import React from 'react';
import Route from '../route/component.route';
import { panelChanged } from '../reducer.router';

class Panel extends React.Component {
  render() {
    return this.props.ignoreWhen ? '' : this.changePanel(this.props, false)
  }

  componentDidMount(){
    this.changePanel(this.props)
  }

  componentWillReceiveProps(nextProps){
    if(this.props.navigation.getIn(["data", "location"]) != nextProps.navigation.getIn(["data", "location"])){
      this.changePanel(nextProps)
    }
  }

  changePanel(props, announce=true){
    const { panel, panelName, navigation, children, ignoreWhen } = props;
    if(ignoreWhen){
       return true
    }
    let params, foundElement;
    const location = navigation.getIn(["data", "location"])||"/"
		React.Children.forEach(children, (child) => {
			if(!foundElement){
				const findParams = new RegExp(/:([^\/]*)/, "g")
				const query = child.props.when.replace(findParams, "([^\\/]*)");
				const regx = child.props.exact ?
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
					foundElement = React.cloneElement(child);
				}
			}
    })
    if(!foundElement) return true;
    const route = foundElement.props.when;

		const current = panel.getIn(["data", panelName])
		const found = {
      panelName,
      route,
      params
    }
    if(announce && panelChanged({ current, found })){
      if(foundElement.props.onRender) foundElement.props.onRender(params, foundElement.props)
      this.props.rendering(found);
    }
		return foundElement;
  }
}

export default Panel

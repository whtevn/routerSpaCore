import * as StateManager from './reducer.router'
import * as Actions from './actions.router'

export function prepareBrowserHistory(store){
  const initialLocation = window.location.hash?window.location.hash.replace("#", ""):"/"
  store.dispatch(Actions.Goto(initialLocation))
  window.onhashchange = function() {
    if(window.location.hash.match("#"))
      store.dispatch(Actions.NavigateTo( window.location.hash.replace("#", "")))
  }
}

export * from './component.router'
export { Actions, StateManager }

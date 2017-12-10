export function prepareBrowserHistory(store, navigationActions){
  const initialLocation = window.location.hash?window.location.hash.replace("#", ""):"/"
  store.dispatch(navigationActions.NavigateTo(initialLocation))
  window.onhashchange = function() {
    if(window.location.hash.match("#"))
      store.dispatch(navigationActions.NavigateTo( window.location.hash.replace("#", "")))
  }
}

import * as StateManager from './reducer.router'
import * as Actions from './actions.router'

export * from './component.router'
export { Actions, StateManager }

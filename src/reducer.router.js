import { fromJS, List, Map } from 'immutable';
import * as Actions from './actions.router';

export const initialState = fromJS({
  data: {
  }
})

export const Reducer = (state, action) => {
  let payload;
  switch (action.type) {
    case Actions.GOTO:
      window.location=`#${action.payload}`;
      return state
    case Actions.RENDER:
      return state
        .setIn(["data", action.payload.panelName], fromJS(action.payload));
    default:
      return state;
  }
}

export const panelChanged = ({ current, found }) => !current || !current.equals(fromJS(found))


import { combineReducers } from 'redux';
import { headerReducer, HeaderState } from 'src/redux/reducers/ui';

export interface ApplicationState {
  header: HeaderState,
}

export default combineReducers({
  header: headerReducer,
})

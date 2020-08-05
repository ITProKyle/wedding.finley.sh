import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middlewares = [thunk];
const composeEnhancers = composeWithDevTools({ trace: true });

const initialState = {
  header: { active: localStorage.getItem('ui.header.active') || 'home', },
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;

import { AnyAction } from 'redux';

export interface HeaderState {
  active: string;
}

export const SET_ACTIVE_NAV_ITEM = 'ui/header/set_active_nav_item'

/**
 * Reducers for header actions
 *
 * @param state The current state
 * @param action The action
 */
export const headerReducer = (state = {}, action: AnyAction) => {
  switch (action.type) {
    case SET_ACTIVE_NAV_ITEM:
      return { ...state, active: action.payload };
    default:
      return state;
  }
};

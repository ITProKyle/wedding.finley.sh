import { Dispatch } from 'redux';
import { SET_ACTIVE_NAV_ITEM } from 'src/redux/reducers/ui';

/**
 * Set's an active navigation item based on the navItem received
 *
 * @param navItem The navItem name to set as active
 */
export const setActiveNavItem = (navItem: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_ACTIVE_NAV_ITEM, payload: navItem });
    localStorage.setItem('ui.header.active', navItem);
  };
};


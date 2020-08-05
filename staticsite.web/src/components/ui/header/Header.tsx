import React, { useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { Menu } from 'semantic-ui-react';
import 'src/components/ui/header/Header.scss';
import { setActiveNavItem } from 'src/redux/actions/ui';
import { HeaderState } from 'src/redux/reducers/ui';
import { compose } from 'redux';
import history from 'src/history';
import ThemeSwitcher from 'src/components/ui/themeSwitcher/ThemeSwitcher';
import { ThemeContext } from 'src/context/ThemeContext';

interface Props {
  header: HeaderState;
  setActiveNavItem: (navItem: string) => void;
}

/**
 *
 *
 * @param {Props} { header, setActiveNavItem }
 * @param Props.header The current header state
 * @param Props.setActiveNavItem Callback to set the current active nav item
 * @returns {JSX.Element}
 */
const Header: React.FC<Props> = ({ header, setActiveNavItem }: Props): JSX.Element => {
  const { theme } = useContext(ThemeContext);

  // Set a listener on the Router history to update the active pathname
  useEffect(() => {
    history.listen((location) => {
      setActiveNavItem(location.pathname)
    });
  }, [setActiveNavItem]);

  return (
    <React.Fragment>
      <Menu
        stackable
        pointing
        size='small'
        className='site'
        data-test='site-menu'
        inverted={theme === 'dark'}
      >
        {/* About */}
        <Menu.Item
          as={Link}
          name='home'
          to='/'
          active={header.active === '/'}
          className='home'
          data-test='menu-item-home'
        >
          Home
        </Menu.Item>
        {/* Theme toggle */}
        <Menu.Item
          position='right'
        >
          <ThemeSwitcher />
        </Menu.Item>
      </Menu>
    </React.Fragment>
  )
}

/**
 * @param state The current application state
 */
const mapStateToProps = (state: { header: HeaderState }, ownProps: Props) => ({
  header: ownProps.header || state.header,
});

/**
 * @param dispatch Thunk Dispatcher
 * @param ownProps ownProperties
 */
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>, ownProps: Props) => ({
  setActiveNavItem:
    ownProps.setActiveNavItem ||
    (async (navItem: string) => {
      return dispatch(setActiveNavItem(navItem));
    }),
});

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Header) as React.ElementType;

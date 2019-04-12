import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'
import cn from 'classnames'

import { ReactComponent as DashboardLogo } from '../../../assets/images/svg/wallet.svg'

import styles from './styles'

const NavMenu = ({ classes, isShowMenu }) => (
  <nav className={cn(classes.root, { hiddenMenu: !isShowMenu })}>
    <ul className={classes.navList}>
      <li>
        <NavLink to={'/'} exact className={classes.menuItem} activeClassName="active">
          <DashboardLogo className={classes.menuIcon} />
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to={'/admins'} exact className={classes.menuItem} activeClassName="active">
          <DashboardLogo className={classes.menuIcon} />
          Admins
        </NavLink>
      </li>
      <li>
        <NavLink to={'/users'} exact className={classes.menuItem} activeClassName="active">
          <DashboardLogo className={classes.menuIcon} />
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to={'/#'} exact className={classes.menuItem} activeClassName="active">
          <DashboardLogo className={classes.menuIcon} />
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink to={'/#'} exact className={classes.menuItem} activeClassName="active">
          <DashboardLogo className={classes.menuIcon} />
          Contacts
        </NavLink>
      </li>
    </ul>
  </nav>
)

NavMenu.propTypes = {
  classes: PropTypes.object,
  isShowMenu: PropTypes.bool.isRequired
}

export default withStyles(styles)(NavMenu)

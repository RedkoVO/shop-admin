import React from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import withStyles from '@material-ui/core/styles/withStyles'

import Avatar from '../../../assets/images/user-avatar.jpg'

import styles from './styles'

const Header = ({ classes, handleToogleMenu, isShowMenu }) => (
  <nav className={classes.root}>
    <div className={classes.toggleMenuBlock}>
      <div className={classes.wrCheckbox}>
        <Switch
          classes={{
            switchBase: classes.iOSSwitchBase,
            bar: classes.iOSBar,
            icon: classes.iOSIcon,
            iconChecked: classes.iOSIconChecked,
            checked: classes.iOSChecked
          }}
          disableRipple
          checked={isShowMenu}
          onChange={() => handleToogleMenu()}
          value="checked"
        />
      </div>
    </div>
    <div className={classes.user}>
      <div className={classes.avatar}>
        <img src={Avatar} alt="Avatar" />
      </div>
      <div className={classes.name}>Jonh Doe</div>
    </div>
  </nav>
)

Header.propTypes = {
  classes: PropTypes.object,
  isShowMenu: PropTypes.bool.isRequired,
  handleToogleMenu: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)

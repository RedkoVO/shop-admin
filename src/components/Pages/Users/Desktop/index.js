import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import User from '../../../../containers/Pages/Users/User'
import AddNewUser from '../components/AddNewUser'

import styles from './styles'

const Users = ({ classes, usersData, isAddUser, handleAddUser, onSubmit }) => (
  <div className={classes.root}>
    <div className={classes.headerUsers}>
      <div className={classes.wrButtons}>
        <div className={classes.addUser} onClick={() => handleAddUser()}>
          Add
        </div>
      </div>
    </div>

    {isAddUser && (
      <AddNewUser
        onSubmit={onSubmit}
      />
    )}

    {usersData.map(item => (
      <User id={item.id} data={item} key={item.id} />
    ))}
  </div>
)

Users.propTypes = {
  classes: PropTypes.object,
  usersData: PropTypes.array,
  isAddUser: PropTypes.bool,
  handleAddUser: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default withStyles(styles)(Users)

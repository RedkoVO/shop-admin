import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

const Dashboard = ({ classes }) => (
  <div className={classes.root}>MAIN</div>
)

Dashboard.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Dashboard)

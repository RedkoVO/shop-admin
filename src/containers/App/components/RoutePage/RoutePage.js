import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

import PageLayout from '../../../../components/App/PageLayout'

class RoutePage extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowMenu: true }
  }

  handleToogleMenu = () => {
    this.setState({ isShowMenu: !this.state.isShowMenu })
  }

  render() {
    const { location, checkAuthUser, component, ...rest } = this.props

    /* TODO: Move to RootRoutes container and checkauth etc. */
    const role = 0 /* 0 - admin, 1 - super admin */

    return (
      <Route
        {...rest}
        render={props => {
          return (
            <PageLayout
              role={role}
              isShowMenu={this.state.isShowMenu}
              handleToogleMenu={this.handleToogleMenu}
              {...props}
              content={component}
            />
          )
        }}
      />
    )
  }
}

RoutePage.propTypes = {
  checkAuthUser: PropTypes.object,
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object
}

export default RoutePage

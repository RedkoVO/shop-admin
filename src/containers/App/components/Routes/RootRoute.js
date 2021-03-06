import React from 'react'
import { compose, pure } from 'recompose'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'

import RoutePage from '../RoutePage/RoutePage'
import Auth from '../../../Auth'
import Admins from '../../../Pages/Admins'
import Orders from '../../../Pages/Orders'
import Products from '../../../Pages/Products'

import withCheckAuth from '../../../../hocs/withCheckAuth'

const RootRoute = props => {
  const { location } = props

  return (
    <Switch location={location}>
      <Route path={`/login`} component={Auth} />

      <RoutePage path={`/admins`} component={Admins} />
      <RoutePage path={`/products`} component={Products} />
      <RoutePage path={`/`} component={Orders} />

      <Redirect to="/" />
    </Switch>
  )
}

export default compose(
  withRouter,
  withCheckAuth,
  pure
)(RootRoute)

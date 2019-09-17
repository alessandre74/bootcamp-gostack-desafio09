import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details'
import NewEdit from '../pages/NewEdit'
import Profile from '../pages/Profile'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/resgiter" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/details" component={Details} />
      <Route path="/newedit" component={NewEdit} />
      <Route path="/profile" component={Profile} />
    </Switch>
  )
}

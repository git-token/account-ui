import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import { store, history } from './store'

import {
  Layout,
} from 'gittoken-react-components/dist/components/index'

import {
  Grid
} from 'react-bootstrap'

import {
  Account
} from './components/index'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
        <Grid>
          <Layout.Header />
          <Switch>
            <Route exact path={"/"} component={Account.Main}/>
            <Route path={"/setup"} component={Account.Setup.Main}/>
          </Switch>
        </Grid>
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
)

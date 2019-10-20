import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './containers/App'
import Experience from './containers/Experience'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/experience" component={Experience} />
        </Switch>
    </BrowserRouter>
)

export default Router;
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import HomePage from './pages/HomePage'
import ScoresPage from './pages/ScoresPage'
import RulesPage from './pages/RulesPage'

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/scores" component={ScoresPage}></Route>
          <Route exact path="/rules" component={RulesPage}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

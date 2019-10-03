import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import RideNav from './components/RideNav'
import HomePage from './pages/HomePage'
import ScoresPage from './pages/ScoresPage'
import RulesPage from './pages/RulesPage'
import MagicKingdom from './pages/MagicKingdom'
import AnimalKingdom from './pages/AnimalKingdom'
import HollywoodStudios from './pages/HollywoodStudios'
import Epcot from './pages/Epcot'

class App extends Component {
  render() {
    return (
      <Router>
        <HeaderNav />
        <RideNav />
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/scores" component={ScoresPage}></Route>
          <Route exact path="/rules" component={RulesPage}></Route>
          <Route exact path="/magickingdom" component={MagicKingdom}></Route>
          <Route exact path="/animalkingdom" component={AnimalKingdom}></Route>
          <Route
            exact
            path="/hollywoodstudios"
            component={HollywoodStudios}
          ></Route>
          <Route exact path="/epcot" component={Epcot}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App

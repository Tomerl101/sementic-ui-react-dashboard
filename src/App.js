import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import { TableCancellations } from './components/TableCancellations';
import { Game } from './components/Game';
import { FormUi as Form } from './components/Form'

const appStyle = { backgroundColor: "#f7f7f7", height: "100vh" }

function App() {
  return <div style={appStyle}>
    <NavBar />
    <Switch>
      <Route exact path="/" component={TableCancellations} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/add" component={Form} />
    </Switch>
  </div>
}

export default App;
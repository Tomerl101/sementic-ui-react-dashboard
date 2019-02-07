import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { NavBar } from './components/NavBar';
import TableCancellations from './components/tableCancellations/TableCancellations';
import Card from './components/CardContent';
import { FormUi as Form } from './components/Form'


function App() {
  return <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={TableCancellations} />
      <Route exact path="/card" component={Card} />
      <Route exact path="/add" component={Form} />
    </Switch>
  </>
}

export default App;
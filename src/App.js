import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'
import TableCancellations from './components/tableCancellations/TableCancellations';
import Card from './components/CardContent';
import { FormUi as Form } from './components/Form'


class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={TableCancellations} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/add" component={Form} />
        </Switch>
      </>
    );
  }
}

export default App;
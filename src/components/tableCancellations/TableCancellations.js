import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { Container, Loader } from 'semantic-ui-react';
import { TableHeader } from './components/tableHeader';
import { TableRow } from './components/tableRow';

export default class TableCancellations extends Component {

  state = { isLoading: true, cancellations: [] };

  componentDidMount() {
    fetch('https://gamecancellations.herokuapp.com/games')
      .then(response => response.json())
      .then(result => {
        this.setState({
          cancellations: result,
          isLoading: false
        })
      })
      .catch(error => console.log(error))
  }

  getTableRows = () => {
    const { cancellations } = this.state;
    return cancellations.map(c => <TableRow item={c} key={c.id} />)
  }

  render() {
    const { isLoading } = this.state;
    return <Container textAlign='justified'>
      <Loader active={isLoading} content='Loading' />
      <Table celled structured>
        <TableHeader />
        <Table.Body>
          {this.getTableRows()}
        </Table.Body>
      </Table>
    </Container>
  }
}
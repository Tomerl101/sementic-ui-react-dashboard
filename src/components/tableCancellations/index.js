import React, { Component } from 'react'
import { Table } from 'semantic-ui-react'
import { Container, Loader, Header, Segment } from 'semantic-ui-react';
import { TableHeader } from './components/tableHeader';
import { TableRow } from './components/tableRow';
import { getGames } from '../../api/getGames';

export class TableCancellations extends Component {

  state = { isLoading: true, cancellations: [] };

  async componentDidMount() {
    try {
      const result = await getGames();
      this.setState({ cancellations: result, isLoading: false });
    } catch (error) {
      alert(error);
    }
  }

  getTableRows = () => {
    const { cancellations } = this.state;
    return cancellations.map(c => <TableRow item={c} key={c.id} />)
  }

  render() {
    const { isLoading } = this.state;
    return <Container textAlign='justified'>
      <Loader active={isLoading} content='Loading' />
      <Segment>
        <Header size='large'>Game cancellations</Header>
        <Table celled structured selectable color='blue' >
          <TableHeader />
          <Table.Body>
            {this.getTableRows()}
          </Table.Body>
        </Table>
      </Segment>
    </Container>
  }
}
import React, { Component } from 'react'
import { Header, Table, List } from 'semantic-ui-react'

export class TableRow extends Component {
  getPlayersNumList = () => {
    const { players } = this.props.item;
    const playersNum = players.map(p => <List.Item key={p.PlayerNum}>{p.PlayerNum}</List.Item>);
    return <List>
      {playersNum}
    </List>
  }

  getPlayersNameList = () => {
    const { players } = this.props.item;
    const playersNum = players.map(p => <List.Item key={p.PlayerNum}>{p.Name}</List.Item>);
    return <List>
      {playersNum}
    </List>
  }

  render() {
    const { id, groupName, status, cancellationReason } = this.props.item;
    return <Table.Row>
      <Table.Cell>
        <Header as='h2' textAlign='center'>{id}</Header>
      </Table.Cell>
      <Table.Cell singleLine>{groupName}</Table.Cell>
      <Table.Cell>{status}</Table.Cell>
      <Table.Cell>{cancellationReason}</Table.Cell>
      <Table.Cell>{this.getPlayersNumList()}</Table.Cell>
      <Table.Cell>{this.getPlayersNameList()}</Table.Cell>
    </Table.Row>
  }
}

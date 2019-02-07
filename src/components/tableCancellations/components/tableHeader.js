import React, { Component } from 'react'
import { Table, Icon } from 'semantic-ui-react'

export class TableHeader extends Component {
  render() {
    return <Table.Header >
      <Table.Row>
        <Table.HeaderCell rowSpan='2' singleLine textAlign='center'>
          <Icon name='hashtag' />
        </Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Group Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Status</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Cancel Reason</Table.HeaderCell>
        <Table.HeaderCell colSpan='2'>Players</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell align='center'>Number</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  }
}

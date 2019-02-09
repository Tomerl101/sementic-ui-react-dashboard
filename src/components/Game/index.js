import React, { useState } from 'react';
import { Container, Segment, Header, Statistic, Icon, Image } from 'semantic-ui-react';
import { Search } from './components/Search';
import { findGame } from '../../api/findGame';

export function Game() {

  const [form, setValues] = useState({ status: '', reason: '' });
  const [game, setGame] = useState({ groupName: '-', status: '-', cancellationReason: '-', members: '' })
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e, { name, value }) => {
    setValues({ ...form, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const { status, reason } = form;
      setIsLoading(true);
      const [result] = await findGame(status, reason);
      setGame({
        groupName: result.groupName,
        status: result.status,
        cancellationReason: result.cancellationReason,
        members: result.players.length
      })
    } catch (error) {
      alert(error);
    } finally {
      setValues({ status: '', reason: '' });
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Segment >
        <Header size='large'>Search Game</Header>
        <Search isLoading={isLoading}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          form={form}
        />
      </Segment>
      <Segment>
        <Statistic.Group widths='four'>
          <Statistic>
            <Statistic.Value text>{game.groupName}</Statistic.Value>
            <Statistic.Label>Group Name</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>{game.status}</Statistic.Value>
            <Statistic.Label>Status</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>
              {game.cancellationReason}
            </Statistic.Value>
            <Statistic.Label>Cancel  Reason</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value text>
              {`${game.members}  `}
              <Icon name='group' />
            </Statistic.Value>
            <Statistic.Label>Team  Members</Statistic.Label>
          </Statistic>
        </Statistic.Group>
      </Segment>
    </Container>
  )
}


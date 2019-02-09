import React from 'react';
import { Form } from 'semantic-ui-react';

export function Search(props) {
    const { form, isLoading, handleSubmit, handleChange } = props;
    return (
        <Form loading={isLoading} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Input
                    placeholder='e.g. Canceled'
                    label='status'
                    name='status'
                    value={form.status}
                    onChange={handleChange}
                />
                <Form.Input
                    placeholder='e.g. Weather'
                    label='Cancel Reason'
                    name='reason'
                    value={form.reason}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Button content='find' color='blue' />
        </Form>
    )
}
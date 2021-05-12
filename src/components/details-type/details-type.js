import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types'

import './details-type.scss';

const availableTypes = [
    'Choose any type',
    'education',
    'recreational',
    'social',
    'diy',
    'charity',
    'cooking',
    'relaxation',
    'music',
    'busy work'
]
export default class DetailsType extends Component {
    changeSelect = (event) => {
        this.props.onChangeType(event.target.value);
    }

    render() {
        const { type } = this.props;
        const types = availableTypes.map((item) => {
            return <option key={item} value={item}>{item}</option>
        });
        return (
            <Form.Group>
                <Form.Label>Custom select</Form.Label>
                <Form.Control
                    as="select"
                    custom
                    value={type}
                    onChange={this.changeSelect}
                >
                    {types}
                </Form.Control>
            </Form.Group>
        );
    }
}

DetailsType.defaultProps = {
    type: "Choose any type"
}
DetailsType.propTypes = {
    type: PropTypes.string
}

import React, {Component} from 'react';
import {Form} from 'react-bootstrap';
import PropTypes from 'prop-types'

import './details-accessability.scss';

export default class DetailsAccessability extends Component {
        
        changeAccessability = (event) => {
            const accessability = Number.parseFloat(event.target.value).toFixed(1);
            this.props.onUpdateAccessability(accessability);
        }

        render() {
            const {value} = this.props;
            console.log(value);
        return (
            <Form.Group className="mt-3">
            <Form.Label>accessability</Form.Label>
            <Form.Control 
                type="range"
                value={value}
                min="0"
                max="1" 
                step="0.01"
                onChange={this.changeAccessability} />
          </Form.Group>
        )
    }
}

DetailsAccessability.defaultProps = {
    value: 0
}
DetailsAccessability.propTypes = {
    value: PropTypes.number
}


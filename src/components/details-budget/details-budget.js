import React, {Component} from 'react';
import {Form} from 'react-bootstrap'; 
import PropTypes from 'prop-types'

import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

import './details-budget.scss';
const {Range} = Slider;

const marks = {
    0: {
        label: 'cheap',
        style: {
            color: "#fff",
            display: 'block',
            marginLeft: "0.5em",
        }
    },
    1: {
        label: 'expensive',
        style: {
            color: "#fff",
            display: 'block',
            marginLeft: "-1.5em"
        }
    },
}
const style = {
    width: '96%',
    margin: 'auto',
    textTransform: "lowercase"
}
export default class DetailsBudget extends Component {
            
        onChange = (value) => {
            const [minValue, maxValue] = value;
            const minprice = Number.parseFloat(minValue);
            const maxprice = Number.parseFloat(maxValue);
            this.props.onUpdateBudget(minprice, maxprice);
          }
        
        render() {
            const {minValue, maxValue} = this.props;            
        return (
            <Form.Group >
            <Form.Label>max budget</Form.Label>
            <Range
                style={style}
                allowCross={false}                 
                max={1}
                defaultValue={[minValue, maxValue]} 
                step="0.1" 
                marks={marks}
                onChange={this.onChange} />
            </Form.Group>
        )
    }
}
DetailsBudget.defaultProps = {
    minValue: 0,
    maxValue: 1
}
DetailsBudget.propTypes = {
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
}

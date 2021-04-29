import React, {Component} from 'react';
import {ListGroup, Badge} from 'react-bootstrap'; 



import './my-list.css';

export default class MyList extends Component {
   
        render() {
        return (
            <>            
               <ListGroup>
                    <ListGroup.Item className="flex justify-center">
                        <Badge variant="success">Social</Badge>
                        <h5>Have a football scrimmage with some friends</h5>
                        <p>8 PARTICIPANTS</p>
                    </ListGroup.Item>
                </ListGroup> 
            </>
        )
    }
}


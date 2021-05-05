import React, {Component} from 'react';
import {ListGroup, Badge, Button} from 'react-bootstrap'; 

import './my-list.css';

export default class MyList extends Component {
        
    deleteItem = (key) => {            
        this.props.deleteItem(key) 
    }

    render() {           
        const {activity} = this.props;
            
        if (activity.length === 0 || activity.key === 0) {
            return (
                    <>
                        <ListGroup>
                        <ListGroup.Item className="flex justify-center mt-3 error">
                            <p>You have nothing saved yet</p>
                        </ListGroup.Item>
                        </ListGroup>   
                        <p>Go back to "Activities"!</p>     
                    </>                    
            )
        }

        const posts = activity.map((item, i) => { 
            return (
                <>  
                    <ListGroup id={i}>
                        <ListGroup.Item className="flex justify-center mt-3 mb-3">
                            <Badge  variant="success">{item.type}</Badge>
                                <h5 className="success">{item.activity}</h5>
                                <p className="success">{item.participants} participants</p>
                                <Button 
                                    variant="outline-success"
                                    size="md"
                                    onClick={() => this.deleteItem(item.key)} >Done</Button>
                        </ListGroup.Item>
                    </ListGroup>                         
                </>
                )
            })
    return (
            <>            
              {posts}          
            </>
        )
    }
}


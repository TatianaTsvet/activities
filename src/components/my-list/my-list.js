import React, {Component} from 'react';
import {ListGroup, Badge, Form} from 'react-bootstrap'; 



import './my-list.css';

export default class MyList extends Component {
        deleteItem = () => {
            const {activity : [{key}]} = this.props;  
            this.props.deleteItem(key) 
        }
        render() {
            const {activity} = this.props; 
            const posts = activity.map((item, i) => {
                if (item.key === null) {
                    return (
                        <>
                            <ListGroup key={i}>
                            <ListGroup.Item className="flex justify-center mt-3 error">
                                <p>You have nothing saved yet</p>
                            </ListGroup.Item>
                            </ListGroup>   
                            <p>Go back to "Activities"!</p>     
                        </>                       
                      
                    )
                }
                return (
                    <>  
                        <ListGroup key={i}>
                        <ListGroup.Item className="flex justify-center mt-3">
                            <Badge variant="success">{item.type}</Badge>
                                <h5 className="success">{item.activity}</h5>
                                <p className="success">{item.participants} participants</p>
                                <Form.Check 
                                    aria-label="option 1"
                                    onClick={this.deleteItem} 
                                    />
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


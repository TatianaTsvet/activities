import React, {Component} from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import Details from '../details';
import ActivitiesResult from '../activities-result';
import MyList from '../my-list';
import SuccessToast from '../success-toast';

import './app.css';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity : [
                {type: null,
                participants: null,
                activity: null,
                key: 0
                }
            ],  
            randomActivity: {
                type: null,
                participants: null,
                budget: null,
                access: null,
                activity: null,
                error: null,
                key: 0
            },
            success: false
        }           
    }
    
    onActivityFetched = (activity) => {         
       this.setState({ randomActivity: {...activity}});        
    } 
    
    sendToMyList = (rightActivity) => {
        this.setState({rightActivity});
    }
    addItem = (randomActivity) => {
        let newItem = {
            type: randomActivity.type,
            participants: randomActivity.participants,
            activity: randomActivity.activity,
            key: randomActivity.key
        }
        const {activity : [{key}]} = this.state;  
        if (key === 0) {
          return  this.setState({ activity: [{...newItem}]});  
        } 
        if (newItem.key !== key ) {
            this.setState(({activity}) => {
                const newAct = [...activity, newItem];
                
                return {
                    activity: newAct
                }
            });
       }
        
    }
    deleteItem = (key) => {
          this.setState({
            activity: this.state.activity.filter((item) => key !== item.key)
        })
        // this.setState(({activity}) => {
        //     const index = activity.findIndex(elem => elem.key === key);
        //     const newArr = [...activity.slice(0, index), ...activity.slice(index + 1)];
        //     return {
        //         activity: newArr
        //     }
        // })
    }
    setShow = (success) => {
        this.setState({success})
    }
    closeToast = (success) => {
        this.setState({success})
    }
    render() {
        const {activity, randomActivity, success} = this.state;
       
       
        return(            
            <>  
            <Container className="justify-center mt-5" >
                <Tabs id="uncontrolled-tab-example" >
                    <Tab className="bg-dark text-white"
                        eventKey="activities" 
                        title="Activities">
                        <Container className="flex justify-center justify-content-around center-block">
                            <Row>  
                                <Col className="bg-secondary text-white xs-4 lg-2">
                                    <ActivitiesResult 
                                        randomActivity={randomActivity}
                                        sendToMyList={this.sendToMyList}
                                        addItem={this.addItem}
                                        setShow={this.setShow}/>  
                                        
                                        <SuccessToast 
                                            success={success}
                                            closeToast={this.closeToast}/>                                      
                                </Col>
                                <Col className="bg-dark text-white xs-6 lg-3">
                                    <Details 
                                        onActivityFetched={this.onActivityFetched}/>
                                </Col>
                            </Row>
                        </Container> 
                    </Tab>                    
                    <Tab eventKey="mylist" title="My List">
                    <Container className="flex justify-center justify-content-around center-block bg-secondary text-white">
                        <MyList
                            activity={activity}
                            deleteItem={this.deleteItem}/>
                    </Container> 
                    </Tab>
                </Tabs>
            </Container>       
        </>
        )
    }
}
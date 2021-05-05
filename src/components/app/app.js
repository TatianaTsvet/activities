import React, {Component} from 'react';
import { Container, Row, Col, Tabs, Tab, Nav} from 'react-bootstrap';
import Details from '../details';
import Header from '../header'
import ActivitiesResult from '../activities-result';
import MyList from '../my-list';
import SuccessToast from '../success-toast';
import {BrowserRouter as Router, Route} from 'react-router-dom';

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
    
    /**
     * 454545454
     * @param {string} activity 
     */
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
           
        const index = this.state.activity.find(item => item.key === 0);   
        const index2 = this.state.activity.find(item => item.key === newItem.key);
        if (index) {
            return  this.setState({ activity: [{...newItem}]});  
        } 
        if (!index2) {
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
            <Router>  
            <Container className="justify-center mt-5" >
                <Header />
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
            <Container className="flex justify-center justify-content-around center-block bg-secondary text-white">
                <MyList
                    activity={activity}
                    deleteItem={this.deleteItem}/>
            </Container> 
            </Container>  

           

            <Container>
                
                
                        <Route path='/activities'> 
                            <ActivitiesResult />
                        </Route>
                        <Route path='/mylist' component={MyList}/>
                        
                         
            </Container> 
            
           
        </Router>
        )
    }
}
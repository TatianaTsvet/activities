import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import Details from "../details";
import Header from "../header";
import ActivitiesResult from "../activities-result";
import MyList from "../my-list";
import SuccessToast from "../success-toast";


import './app.scss';


const storageKey = "somekey";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activity : JSON.parse(localStorage.getItem(storageKey) ?? '[]'),
            randomActivity: null,
            error: false,
            success: false,
            loading: false
        }           
    }

    componentDidUpdate() {
        const {activity} =this.state;
        localStorage.setItem(storageKey, JSON.stringify(activity));
    }
    
    
    onActivityFetched = (data) => {     
       if (data.error) {
           this.setState({error: data.error});
       }  
       this.setState({
           randomActivity: {...data},
           loading: false
        });    
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
         
        const sameActivity = !!this.state.activity.find(item => item.key === newItem.key);
        
        if (sameActivity) return;
               
        this.setState({activity: [...this.state.activity, newItem]})
          
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
    changeError = (error) => {
        this.setState({error});
    }
    switchSpinner = (loading) => {
        this.setState({loading})
    } 
    render() {
        const {activity, randomActivity, success, error, loading} = this.state;
                     
        return(            
            <Router>  
            <Container className="justify-center mt-5" >
                <Header />
                <Switch>
                    <Route path="/activities" exact>
                        <Container className="flex justify-center justify-content-around center-block">
                            <Row>  
                                <Col className="bg-secondary text-white xs-4 lg-2">
                                    <ActivitiesResult 
                                        randomActivity={randomActivity}
                                        sendToMyList={this.sendToMyList}
                                        addItem={this.addItem}
                                        setShow={this.setShow}
                                        error={error}/>                                   
                                </Col>
                                    <Col className="bg-dark text-white xs-6 lg-3">
                                        <Details 
                                            onActivityFetched={this.onActivityFetched}
                                            changeError={this.changeError}
                                            loading={loading}
                                            switchSpinner={this.switchSpinner}/>
                                        </Col>
                            </Row>
                            <Container className="flex flex-column d-flex">
                            <Row>
                                <Col className="mx-auto mt-3 d-flex flex-row-reverse text-center">
                                    <SuccessToast 
                                        success={success}
                                        closeToast={this.closeToast}/>   
                                </Col>
                            </Row>
                            </Container>
                        </Container> 
                    </Route>
                    <Route path="/mylist" exact>
                        <Container className="flex justify-center justify-content-around center-block bg-secondary text-white">
                            <MyList
                                activity={activity}
                                deleteItem={this.deleteItem}/>
                        </Container> 
                    </Route>
                    <Route path="">
                        <Redirect to="/activities" />
                    </Route>
                </Switch>
            </Container>
        </Router>
        )
    }
    this.setState({ randomActivity: { ...data } });
  };

  sendToMyList = (rightActivity) => {
    this.setState({ rightActivity });
  };

  addItem = (randomActivity) => {
    const newItem = {
      type: randomActivity.type,
      participants: randomActivity.participants,
      activity: randomActivity.activity,
      key: randomActivity.key,
    };

    const sameActivity = !!this.state.activity.find(
      (item) => item.key === newItem.key
    );

    if (sameActivity) return;

    this.setState(({ activity }) => {
      const newAct = [...activity, newItem];
      return {
        activity: newAct,
      };
    });
  };

  deleteItem = (key) => {
    this.setState({
      activity: this.state.activity.filter((item) => key !== item.key),
    });
  };

  setShow = (success) => {
    this.setState({ success });
  };

  closeToast = (success) => {
    this.setState({ success });
  };

  changeError = (error) => {
    this.setState({ error });
  };

  render() {
    const { activity, randomActivity, success, error } = this.state;

    return (
      <Router>
        <Container className="justify-center mt-5">
          <Header />
          <Switch>
            <Route path="/activities" exact>
              <Container className="flex justify-center justify-content-around center-block">
                <Row>
                  <Col className="bg-secondary text-white xs-4 lg-2">
                    <ActivitiesResult
                      randomActivity={randomActivity}
                      sendToMyList={this.sendToMyList}
                      addItem={this.addItem}
                      setShow={this.setShow}
                      error={error}
                    />
                    <SuccessToast
                      success={success}
                      closeToast={this.closeToast}
                    />
                  </Col>
                  <Col className="bg-dark text-white xs-6 lg-3">
                    <Details
                      onActivityFetched={this.onActivityFetched}
                      changeError={this.changeError}
                    />
                  </Col>
                </Row>
              </Container>
            </Route>
            <Route path="/mylist" exact>
              <Container className="flex justify-center justify-content-around center-block bg-secondary text-white">
                <MyList activity={activity} deleteItem={this.deleteItem} />
              </Container>
            </Route>
            <Route path="">
              <Redirect to="/activities" />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

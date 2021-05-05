import React, {Component} from 'react';
import {Toast} from 'react-bootstrap'; 



import './success-toast.css';

export default class SuccessToast extends Component {
        closeToast = () => {
            this.props.closeToast(false);
        }
        render() {
            const {success} = this.props;
            let toast = "";
            if (success) {
                toast =                    
                    <Toast 
                        style={{
                            backgroundColor: '#04a504',
                            color: "#fff", 
                            marginTop: '1em'                          
                        }}
                        delay={1000} 
                        autohide
                        onClose={this.closeToast}>
                        <Toast.Body>Activity successfully saved</Toast.Body>
                    </Toast>                   
            } else {
                return null;
            }
            return (
            <> 
                {toast}
                
            </>
        )
    }
}


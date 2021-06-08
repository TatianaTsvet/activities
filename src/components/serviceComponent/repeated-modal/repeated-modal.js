import React, { Component } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "../../../styles";
import "./repeated-modal.scss";

class RepeatedModal extends Component {
  closeRepeatedToast = () => {
    this.props.closeRepeatedToast(false);
  };

  render() {
    const { repeatedActivity, randomActivity, classes } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={repeatedActivity}
          onClose={this.closeRepeatedToast}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={repeatedActivity}>
            <div className={classes.modalPaper}>
              <h2 id="transition-modal-title">
                "{randomActivity.activity}" was already saved
              </h2>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(RepeatedModal);

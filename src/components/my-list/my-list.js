import React, { Component } from "react";
import { ListItemText, Button, ListItem, List, Link } from "@material-ui/core";

import "./my-list.scss";

export default class MyList extends Component {
  deleteItem = (key) => {
    this.props.deleteItem(key);
  };

  render() {
    const { activity } = this.props;

    const posts = activity.map((item) => {
      return (
        <div>
          <List component="nav">
            key={item.key}
            <ListItem variant="success">{item.type}</ListItem>
            <ListItemText className="success">{item.activity}</ListItemText>
            <p className="success">{item.participants} participants</p>
            <Button
              variant="outline-success"
              size="md"
              onClick={() => this.deleteItem(item.key)}
            >
              Done
            </Button>
          </List>
        </div>
      );
    });
    return (
      <List>
        {activity.length === 0 ? (
          <>
            <ListItem
              key={activity.key}
              className="flex justify-center mt-3 error"
            >
              <p>You have nothing saved yet</p>
            </ListItem>
            <Link href="/activities">
              <Button variant="danger" className="mx-auto my-2">
                Go back to "Activities"!
              </Button>
            </Link>
          </>
        ) : (
          posts
        )}
      </List>
    );
  }
}

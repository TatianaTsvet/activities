const styles = (theme) => ({
  activity: {
    background: "#546e7a",
    padding: "1em",
    display: (props) =>
      !props.error && props.randomActivity.length === 0 ? "none" : "block",
  },

  details: {
    background: "#78909c",
    padding: "1em",
  },
});

export default styles;

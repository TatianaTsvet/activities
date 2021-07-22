const styles = (theme) => ({
  skeleton: {
    backgroundColor: "white",

    height: "13rem",
    margin: "0 1em 1em 0",
    padding: "1em",
    borderRadius: "0.5em",
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      height: "7em",
      overflow: "hidden",
    },
  },
});

export default styles;

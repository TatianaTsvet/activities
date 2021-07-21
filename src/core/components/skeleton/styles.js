const styles = (theme) => ({
  skeleton: {
    backgroundColor: "white",
    height: "12rem",
    marginBottom: "1em",
    padding: "1em",
    [theme.breakpoints.down("xs")]: {
      height: "7em",
      overflow: "hidden",
    },
  },
});
export default styles;

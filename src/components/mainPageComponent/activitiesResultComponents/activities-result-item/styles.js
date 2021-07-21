const styles = (theme) => ({
  resultError: {
    backgroundColor: "rgb(231, 81, 81)",
    color: "#fff",
    padding: "1em",
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "0",
    },
  },
  activitiesResultButton: {
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
  },
  buttonResetError: {
    marginTop: "1em",
    backgroundColor: "rgb(231, 81, 81)",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
});

export default styles;

const styles = (theme) => ({
  buttonReset: {
    marginTop: "1em",
  },
  formSM: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  buttonSM: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  getActivityButton: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
      margin: "0 auto",
    },
    backgroundColor: "#ba000d",
    color: "#fff",
  },
});

export default styles;

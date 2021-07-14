const styles = (theme) => ({
  buttonReset: {
    marginTop: "2em",
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
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginTop: "1em",
  },
  buttonMobileReset: {
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
    marginTop: "1em",
  },
});

export default styles;

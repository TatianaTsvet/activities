const styles = (theme) => ({
  root: {
    background: "#37474f",
    color: "white",
    margin: "auto",
    padding: "1em",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      padding: "0 0 1em 0",
    },
    [theme.breakpoints.down("md")]: {
      padding: "0 1em 1em 1em",
    },
  },
  activity: {
    background: "#546e7a",
    padding: "1em",
  },
  details: {
    background: "#78909c",
    padding: "1em",
  },
});

export default styles;

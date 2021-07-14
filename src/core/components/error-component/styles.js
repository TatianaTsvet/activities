const styles = (theme) => ({
  error: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
    textTransform: "uppercase",
    height: "30rem",
  },
  errorLink: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 1em",
      fontSize: "1.2em",
    },
  },
  errorMistake: {
    margin: "5em 0 2em",
    fontSize: "2.4rem",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto 1em",
      fontSize: "1.7em",
    },
  },
});

export default styles;

const styles = (theme) => ({
  resultError: {
    backgroundColor: "rgb(231, 81, 81)",
    color: "#fff",
    padding: "1em",
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0",
    },
  },
  activitiesResultButton: {
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
  },
});

export default styles;

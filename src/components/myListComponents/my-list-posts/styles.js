const styles = (theme) => ({
  myListCard: {
    marginBottom: "1em",
    padding: "1em",
    height: "100%",
    position: "relative",
  },
  myListActivity: {
    paddingTop: "1em",
    pointerEvents: "none",
  },
  myListChip: {
    background: "#2e7d32",
  },
  myListDoneButton: {
    width: "6em",
    height: "5em",
  },
  arrow: {
    color: "red",
  },
  success: {
    marginTop: "1em",
    textTransform: "capitalize",
    color: "#1976d2",
  },
  slider: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
  },
});
export default styles;

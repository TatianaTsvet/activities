const styles = (theme) => ({
  myListCard: {
    marginBottom: "1em",
    padding: "1em",
    height: "100%",
    position: "relative",
  },
  cardContainerClose: {
    [theme.breakpoints.down("xs")]: {
      height: "5em",
      overflow: "hidden",
    },
  },
  cardContainerOpen: {
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
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
  slider: {},
  success: {
    marginTop: "1em",
    textTransform: "capitalize",
    color: "#1976d2",
  },
  tooltip: {},
  expandButton: {
    position: "absolute",
    right: "0.5em",
    bottom: "0",
    textTransform: "capitalize",
  },
});
export default styles;

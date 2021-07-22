const styles = (theme) => ({
  myListCard: {
    padding: "1em",
    height: "100%",
    marginBottom: "1em",
    position: "relative",
  },
  myListActivity: {
    paddingTop: "1em",
    pointerEvents: "none",
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

  myListChip: {
    background: "#2e7d32",
  },
  myListDoneButton: {
    width: "6em",
    height: "5em",
  },

  slider: {
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(0%)",
    },
    '& .MuiSlider-markLabel[data-index="4"]': {
      transform: "translateX(-60%)",
    },
    marginBottom: "2em",
  },
  arrow: {
    color: "red",
  },
  success: {
    marginTop: "1em",
    textTransform: "capitalize",
    color: "#1976d2",
  },

  expandButton: {
    position: "absolute",
    right: "0.5em",
    bottom: "0",
    textTransform: "capitalize",
  },

  draggableChip: {
    position: "absolute",
    right: "1em",
  },
});
export default styles;

const styles = (theme) => ({
  myListCard: {
    marginBottom: "1em",
    padding: "1em",
    height: "100%",
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
  slider: {
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(0%)",
    },
    '& .MuiSlider-markLabel[data-index="4"]': {
      transform: "translateX(-60%)",
    },
    marginBottom: "2em",
  },
  success: {
    marginTop: "1em",
    textTransform: "capitalize",
    color: "#1976d2",
  },
  tooltip: {},
});
export default styles;

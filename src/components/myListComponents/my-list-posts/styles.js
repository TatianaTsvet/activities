const styles = (theme) => ({
  myListCard: {
    padding: "1em",
    height: "100%",

    [theme.breakpoints.down("sm")]: {
      marginBottom: "1em",
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
  success: {
    marginTop: "1em",
    textTransform: "capitalize",
    color: "#1976d2",
  },
  tooltip: {},
});
export default styles;

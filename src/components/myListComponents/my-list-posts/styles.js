const styles = (theme) => ({
  myListCard: {
    padding: "1em",
    height: "100%",

    marginBottom: "1em",
//dev
//     position: "relative",
//   },
//   myListActivity: {
//     paddingTop: "1em",
//     pointerEvents: "none",

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

//   arrow: {
//     color: "red",
//  dev
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

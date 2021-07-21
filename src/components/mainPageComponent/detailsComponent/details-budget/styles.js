const styles = (theme) => ({
  slider: {
    color: "#fff",
    marginBottom: "2em",
    marginRight: "1em",
    textTransform: "lowercase",
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(-20%)",
    },
    '& .MuiSlider-markLabel[data-index="1"]': {
      transform: "translateX(-100%)",
    },
  },
});
export default styles;

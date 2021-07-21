const styles = (theme) => ({
  slider: {
    color: "#fff",
    marginBottom: "2em",
    textTransform: "lowercase",
    marginRight: "1em",
    '& .MuiSlider-markLabel[data-index="0"]': {
      transform: "translateX(-20%)",
    },
    '& .MuiSlider-markLabel[data-index="1"]': {
      transform: "translateX(-100%)",
    },
  },
});
export default styles;

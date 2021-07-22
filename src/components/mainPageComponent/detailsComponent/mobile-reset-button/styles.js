const styles = (theme) => ({
  mobileResetButton: {
    backgroundColor: "#18ffff",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
});

export default styles;

const styles = (theme) => ({
  root: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
    textTransform: "uppercase",
    padding: "1em 2em",
  },
  activity: {
    background: "#546e7a",
    marginBottom: "1em",
  },
  details: {
    background: "#78909c",
    marginBottom: "1em",
  },
  activitiesResultButton: {
    margin: "2em auto",
    display: "flex",
    justifyContent: "center",
  },
  detailsForm: {
    padding: "0 1.5em",
  },
  buttonReset: {
    marginTop: "2em",
  },
  slider: {
    color: "#fff",
    marginBottom: "1em",
    textTransform: "lowercase",
  },
  participansForm: {
    width: "100%",
    marginTop: "1em",
  },
  participantsTextField: {
    background: "#fff",
    marginBottom: "1em",
  },
  autocomplete: {
    width: "100%",
    background: "#fff",
  },
  header: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
    textDecoration: "none",
  },
  myListCard: {
    marginBottom: "1em",
    padding: "1em",
  },
  myListActivity: {
    paddingTop: "1em",
  },
  myListEmptyActivity: {
    padding: "1em 0 0 1em",
  },
  myListEmptyActivityButton: {
    padding: "1em",
    margin: "1em",
  },
  myListChip: {
    background: "#2e7d32",
  },
  myListDoneButton: {
    marginTop: "1em",
  },
  myListLink: {
    textDecoration: "none",
  },
  error: {
    background: "#37474f",
    color: "white",
    margin: "2em auto",
    textTransform: "uppercase",
    height: "30rem",
  },
  errorLink: {
    display: "inline-block",
    color: "#fff",
    margin: "0.5em 2em",
    align: "justify",
  },
  errorMistake: {
    margin: "5em 0 2em",
    fontSize: "2.4rem",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  skeleton: {
    backgroundColor: "white",
    height: "11rem",

    marginBottom: "1em",
    padding: "1em",
  },
});

export default styles;

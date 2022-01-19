import Drawer from "./components/Drawer";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer />
      Something
    </div>
  );
}

export default App;

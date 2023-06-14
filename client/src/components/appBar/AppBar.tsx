import { AppBar, InputBase, Toolbar, Typography } from "@material-ui/core";
import useStyles from "./AppBar.styles";

const AppBarr = () => {
    const classes = useStyles();
  
    return (
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Coin List
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {/* <Search /> */}
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default AppBarr;
  
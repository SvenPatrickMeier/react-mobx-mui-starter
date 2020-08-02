import React from "react";
import PropTypes from "prop-types";
import {
  withStyles, Typography, Button, Grid, Paper,
} from "@material-ui/core";

import { observable, action, computed } from "mobx";
import { observer } from "mobx-react";

@observer
class App extends React.Component {
  @observable clickCount1 = 0

  @observable clickCount2 = 0

  @computed get totalClick() {
    return this.clickCount1 + this.clickCount2;
  }

  @action increaseClickCount1 = () => {
    this.clickCount1 += 1;
  }

  @action increaseClickCount2 = () => {
    this.clickCount2 += 1;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography variant="h2">react-mobx-mui-starter</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Button
                className={classes.button}
                onClick={this.increaseClickCount1}
                variant="outlined"
              >
                {`You have clicked me ${this.clickCount1} times`}
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Typography>{`Total Clicks: ${this.totalClick}`}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>
              <Button
                className={classes.button}
                onClick={this.increaseClickCount2}
                variant="outlined"
              >
                {`You have clicked me ${this.clickCount2} times`}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

export default withStyles(styles)(App);

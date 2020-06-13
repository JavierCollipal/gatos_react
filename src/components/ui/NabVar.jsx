import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  link: { textDecoration: "none", color: "white" },
});

const NabVar = ({ title }) => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant="h6">{title}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
            </Grid>
            <Grid item xs={1}>
              <Link to="/cats" className={classes.link}>
                cats
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NabVar;

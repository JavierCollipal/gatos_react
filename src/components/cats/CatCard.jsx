import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Delete from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
});

const CatCard = ({ cat, handleDelete, handleUpdate }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image={cat.imageUrl}
          title={cat.name}
        />

        <CardContent>
          <Grid container>
            <Grid item xs>
              Nombre: {cat.name}
            </Grid>
            <Grid item xs>
              Raza: {cat.breed}
            </Grid>
            <Grid item xs>
              Edad: {cat.age}
            </Grid>
            <Grid item xs>
              Id: {cat.id}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" onClick={() => handleUpdate(cat)}>
          <CreateIcon />
        </Button>
        <Button size="small" onClick={() => handleDelete(cat.id)}>
          <Delete />
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatCard;

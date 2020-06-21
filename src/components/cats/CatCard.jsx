import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CatForm from "./CatForm";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const CatCard = ({ cat, deleteCat, manageModal }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={cat.imageUrl}
          title={cat.name}
        />

        <CardContent>
          <Grid container spacing={4}>
            <Grid item xs>
              {cat.name}
            </Grid>
            <Grid item xs>
              {cat.breed}
            </Grid>
            <Grid item xs>
              {cat.age}
            </Grid>
          </Grid>
        </CardContent>
        <CatForm />
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Guardar
        </Button>
        <Button
          size="small"
          color="secondary"
          onClick={() => deleteCat(cat.id)}
        >
          Eliminar
        </Button>
        <Button size="small" color="primary" onClick={() => manageModal(false)}>
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CatCard;

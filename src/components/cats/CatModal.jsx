import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const CatModal = (props) => {
    const classes = useStyles();
    const { cat } = props;
    return (
        <div>
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
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Guardar
                    </Button>
                    <Button size="small" color="primary">
                        Cancelar
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
};

export default CatModal;

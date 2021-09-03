import React from 'react';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, withStyles} from '@material-ui/core';

import styles from './styles'

const PokemonCard = ({ classes, image, title, name, price, handleGoToPokemonDetails }) => {
    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={handleGoToPokemonDetails}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      );
}
  
export default withStyles(styles)(PokemonCard);
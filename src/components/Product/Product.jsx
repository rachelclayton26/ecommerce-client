import React from 'react';
//Alec
//Named imports from material ui - check documentation for more info on this if you're interested
//Also relevant here - using styles.js files for each functional component to keep the moving pieces simple. 
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  IconButton 
  } from '@material-ui/core';
import { 
  AddShoppingCart 
  } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({product, img }) => {
  const classes = useStyles();

  // const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h3" gutterBottom> 
            {product.name}
          </Typography>
          <Typography  variant="h3"gutterBottom>
          ${product.price}
          </Typography>
        </div>
       <Typography variant="body2" color="textSecondary">{product.description}</Typography>
      </CardContent>
      {/* Add to cart - faked at first, stretch to build it: */}
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          {/* //shopping card icon */}
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;

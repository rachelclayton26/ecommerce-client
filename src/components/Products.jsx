import React from 'react';
import {Grid} from '@material-ui/core';
 
import Product from './Product/Product';

const products = [
  { id: 1, name: 'Bwankie', description: 'So fuzzy, so warm.', price:40, image: 'https://imgflip.com/i/57ho74'},
  { id: 2, name: 'Piwwow', description: 'Rest your weary head.', price:19.95, image: 'https://imgflip.com/i/57hoke'},
];

const Products = () => { 
  // this does in Products() later >> ({ products, onAddToCart })
   return (
     <main> 
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/> 
          </Grid>
        ))}
      </Grid>
    </main>
);
}

export default Products;

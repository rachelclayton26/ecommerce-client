import React, {useEffect, useState } from 'react';
import {Grid} from '@material-ui/core';
 
import Product from './Product/Product';



// const mockProducts = [
//   { id: 1, name: 'Bwankie', description: 'So fuzzy, so warm.', price:40, image: 'https://imgflip.com/i/57ho74'},
//   { id: 2, name: 'Piwwow', description: 'Rest your weary head.', price:19.95, image: 'https://imgflip.com/i/57hoke'},
// ];

const Products = () => { 
  // this goes in Products() later >> ({ products, onAddToCart })
  const [products, setProducts] = useState();

  useEffect(() => {
  // GET request for all products using fetch, inside a of a useEffect React hook
  fetch('https://team4-our-e-commerce-app.herokuapp.com/shop/')
      .then(response => response.json())
      .then(data => setProducts(data.total));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
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

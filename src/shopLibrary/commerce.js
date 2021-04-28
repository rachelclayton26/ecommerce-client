//Alec
import Commerce from '@chec/commerce.js';
//above, we import the Commerce functionality that we installed. Below, we instantiate the package with a new instance of commerce, using the API key we've stored in the .env file. 
export const commerce = new Commerce(process.env.REACT_APP_COMMERCE_KEY, true); 
import * as React from 'react';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import  Button from '@mui/material/Button';
import { addToCart } from '../store/cart.js';
import { deletefromcart } from "../store/cart";
import { getData } from "../store/localStorage";
import { connect } from 'react-redux';

function Products(props) {
const style={
  width:'150px' , 
  height:'150px',
  
}

let data = getData();


  return (
    <>
    <div className="cart-container" >
    <section className="section-cart" style={{ backgroundColor: '#DDA0DD' , fontSize: 20,color : '#FFFAF0' } }>
        
            <Button color="inherit"> 🛒Cart({props.cart.totalCartItems})</Button>

        {
          props.cart.cartItems.map(cartItem => {
            return (
              <>
               <p className="cartData">
               {cartItem.inCart > 0 ? <> {cartItem.name}: {cartItem.inCart} <span> ||</span> </> : null }
                
              </p>
              </>
            );
          })

        }
      </section>
        <div className="div">
          <h1>
            {props.categories.activeCategory.toUpperCase()}
          </h1>
        </div>
      <section className="section1">

<div className="ddd">
  
<div className="product-list" style={{ backgroundColor: '#968e8e' }}>
          {
            props.products.map((product) => (
              
              product.category === props.categories.activeCategory ?
                <Card key={product.name} className="root" >
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" >
                        {product.category[0].toUpperCase()}
                      </Avatar>
                    }
                    title={product.name}
                    subheader={product.category}
                  />
                
                  <img className="cardMedia" src={product.image} style={style} alt="images" ></img>
                  <CardHeader
                    title={'Price  ' + product.price + '$'}
                    subheader={'In Stock  ' + product.inStock + '  Pcs'}
                  />
            
                    <CardHeader
                      title={"Price  " + product.price + "$"}
                      subheader={"In Stock  " + product.inStock + "  Pcs"}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: 50 + "%" }}
                      onClick={() => {
                        props.addToCart(product);
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ width: 50 + "%" }}
                      onClick={() => {
                        props.deletefromcart(product);
                      }}
                    >
                      delete item
                    </Button>
                  </Card>
                :
                null
            ))
          }
          
        
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

// access reducer with any component 
const mapStateToProps = (state) => {
  return { products: state.products, categories: state.categories, cart: state.cart };
};

// name methode will use it
const mapDispatchToProps = { addToCart, deletefromcart  };


export default connect(mapStateToProps, mapDispatchToProps)(Products);
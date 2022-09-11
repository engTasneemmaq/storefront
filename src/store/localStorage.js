export const localStorageData = (props)=> {

    localStorage.setItem('cart', JSON.stringify(props));
 
 } 
 export const getData = ()=> {
 
   
  let data = JSON.parse(localStorage.getItem('cart'))
 
 
     return data.cartItems
 
 
 }
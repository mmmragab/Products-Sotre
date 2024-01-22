
import { Button, Container, Table, Card, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decreaseItems , IncreaseItems, totalPrice, clearCart} from "../Redux/Cart-slice";
import { useEffect } from 'react';
import { withdraw } from '../Redux/Slice-prod';
import { toast } from "react-toastify";



function Cart (){
  const state=useSelector(state=>state.bank);
  const dispatch=useDispatch();
  const cart= useSelector((state) => state.cart);
  console.log(cart);
  
  useEffect(()=>{
    dispatch(totalPrice());
  },[cart, dispatch]);
  console.log(totalPrice);

  const OnclickButton=function(event){
   
    if ((state-cart.cartTotalAmount)>0) {
    event.preventDefault();
    dispatch(withdraw(cart.cartTotalAmount));
    dispatch(clearCart());
    toast.success(`Remaining Amount in Bank ${state-cart.cartTotalAmount}`,{
      position: "top-right",
      autoClose: 1200,});}else {    toast.error(`Your Wallet is ${state} ,You need to Deposit ${cart.cartTotalAmount-state}`,{
        position: "top-right",
        autoClose: 1400,theme: "colored",});
      };}


    return (
      <>
      
        <Container>

          <h2>Products in Your Cart....</h2>
            <Table className='text-center' striped bordered hover>
              <thead>
                <tr>

                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {cart.cartItems.map((cartItem) => (                    
                    <tr key={cartItem.id}>
                      <td style={{width:'30rem'}}>{cartItem.title}</td>
                      <td>{cartItem.price} $</td>
                      <td><Button variant='light' onClick={()=>dispatch(decreaseItems(cartItem))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                      </svg></Button>  
                      <span></span>  {cartItem.cartQuantity} <span></span> 
                      <Button variant='light' onClick={()=>dispatch(IncreaseItems(cartItem))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
                        fill="currentColor" className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                      </svg></Button></td>
                      <td>{cartItem.price * cartItem.cartQuantity} $</td>
                      <td><Button variant="danger" onClick={()=>dispatch(removeFromCart(cartItem.id))}>Remove</Button></td>
                   </tr>))}
              </tbody>
            </Table>     
         </Container>
             <Container className='d-flex justify-content-end my-5' >
             <Card style={{ width: '18rem' }}>
               <Card.Body>
                 <Card.Title>Total Price</Card.Title>
                 <Card.Subtitle className="mb-2 text-muted">{cart.cartTotalAmount} $</Card.Subtitle>
                 <Button className="offset-7"variant='success' onClick={OnclickButton}>Checkout</Button>
               
               </Card.Body>
             </Card>
             </Container>

         </>
    );
}
export default Cart
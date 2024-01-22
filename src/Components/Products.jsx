import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, fetchProducts } from "../Redux/Products-slice";
import { Card, Container, Row, Col, Button, Form, Badge } from "react-bootstrap";
import '../App.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { addToCart } from "../Redux/Cart-slice";


function Products() {
    const products= useSelector((state)=>state.products);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
  

    return (
    <>
        <h3 className='Products alert alert-success text-center my-2'>Our Products</h3>


            
                <Container className="Container">
                    <Row >
                    {products.map((product)=>(
                        <Col  className="d-flex justify-content-center  my-2 border-primary " s={12} md={6} lg={4} xl={3} key={product.id} >
                            <Card className="text-center my-2 border-primary " style={{ width: '15rem', height:'17rem' } }>
                            <h5><Card.Img variant="top ms-5 my-1" style={{width:'5rem ', height:'5em'}}  src={product.image}  />
                                <Badge className=" bg-light text-dark">{product.price} $</Badge></h5>
                                <Card.Body>
                                    <Card.Title className="small text-primary">{product.title}</Card.Title>
                                </Card.Body>

                                <div>

                                </div>
                                <div><Button className="btn btn-success mb-2" onClick={()=>{dispatch(addToCart(product));}}>Add to Cart</Button></div>
                            </Card>
                        </Col>
                        ))}</Row>
                </Container>
        
                
    </>
    )
    }
    export default Products
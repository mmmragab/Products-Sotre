import React, { useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Col, Row } from 'react-bootstrap';
import {  useSelector } from 'react-redux';
import Products from './Products';
import MyCarousel from './Carousel';


function Home (){

const state=useSelector(state=>state.bank);


    return (
        <div className='Home'>
            <Container>
                <Row>
                    <Col>
                    <Card className='text-center' bg='dark' text="white">Available Amount in Wallet : {state}</Card>
                    <MyCarousel />
                    </Col>
                <Products />
                </Row>
            </Container>
        </div>
    )}
export default Home
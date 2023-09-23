import React, { useEffect } from 'react'
import { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Beautylistcards from './Beautylistcards'

function Beautylist() {
    const [allBeautylist,setBeautylist]=useState([])
//fn to call api
const getBeautylists=async()=>{
 await fetch('/products.json')  
 .then((data)=>{
    data.json()
    .then((result)=>{
        setBeautylist(result.products)
        // console.log(result);
    })
    // console.log(data);
 }) 
   
}
console.log(allBeautylist);

useEffect(()=>{
    getBeautylists()
 },[]) 

  return (

    <Row>
        {allBeautylist.map(item=>(
            // <h1>{item.name}</h1>
            <Col sm={12} md={6} lg={4}xl={3} >
            <Beautylistcards beautylist={item}/>
            </Col>
        ))}
    </Row>
  )
}
export default Beautylist
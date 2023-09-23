import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Beautylistcards({beautylist}) {
    console.log(beautylist);
  return (
    <Link style={{textDecoration:"none"}} to={`/viewproducts/${beautylist.id}`}>
        <Card style={{  width: '18rem',height:'37rem',padding:10 ,marginBottom:30 , marginLeft:30, marginTop:30}}>{}
      <Card.Img variant="top" src={beautylist.image_link} />
      <Card.Body>
        <Card.Title>{beautylist.name}</Card.Title>
        <Card.Title>{beautylist.price}{beautylist.price_sign}{beautylist.currency}</Card.Title>
        {/* <Card.Link href={beautylist.product_link}>Product Link</Card.Link> */}
        {/* <Card.Text>{beautylist.website_link}</Card.Text> */}
        <Card.Text>{beautylist.product_type}</Card.Text>
        {/* <Card.Text>{beautylist.}</Card.Text> */}
        {/* <Card.Text>{beautylist.rating}</Card.Text> */}
        {/* <Card.Text>{beautylist.rating}</Card.Text> */}
        {/* <Card.Text>{beautylist.rating}</Card.Text> */}


        <Button variant="primary">Buy now</Button>
      </Card.Body>
    </Card>

        
    </Link>
  )
}

export default Beautylistcards
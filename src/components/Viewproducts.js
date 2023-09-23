import React,{useState,useEffect} from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'

function Viewproducts() {
    const params=useParams()
    console.log(params.id);
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
    

const viewpro=allBeautylist.find(item=>item.id==params.id)
console.log(viewpro);

  return (
    <>
        {
            viewpro?(
                <Row>
                    <Col>
                    <Image style={{ width: "700px",height:'500px', padding:20,marginLeft:30}} src={viewpro.image_link}fluid/>
                    </Col>
                    <Col style={{ padding:20}}>
                    <h1 class="display-1" style={{color:"magenta"}}>{viewpro.name}</h1>
                    <h5 >{viewpro.brand}</h5>
                    <h3 style={{color:"red"}} >{viewpro.price}{viewpro.price_sign} {viewpro.currency}</h3>
                    <h5 >Product type:<p style={{color:"black"}}>{viewpro.product_type}</p></h5>
                    <h5 >Category:<p style={{color:"black"}}>{viewpro.category}</p></h5>
                    <h4>Description</h4>
                    <h5 style={{color:"black"}} >{viewpro.description}</h5>
                    <h5 style={{color:"black"}} >{viewpro.rating}</h5>
                    <button type="button" class="btn btn-primary">BUY NOW</button>
                    <button style={{margin:10}} type="button" class="btn btn-warning">ADD TO CART</button>
                    </Col>
                </Row>
            ):"null"
        }
    </>
         )
}

export default Viewproducts
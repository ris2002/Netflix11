import React, { useEffect,useState} from 'react';
import './Plansrc.css'
import { db } from './firebase';
import { useSelector } from 'react-redux';
import {loadStripe}from '@stripe/stripe-js'


function Plansrc(){
    
    const[products,setProducts]=useState([]);
    const user =useSelector

    useEffect(()=>{
db.collection('products').where('active','==',true)
.get().then(querySnapshot=>{const products={};
    querySnapshot.forEach(async productsDoc=>{
        products[productsDoc.id]=productsDoc.data();
        const priceSnap =await productsDoc.ref.collection
        ("prices").get();
        priceSnap.docs.forEach(price=>{
            products[productsDoc.id]={
                priceId:price.id,
                priceData:price.data()
            }
        })
    })
    setProducts(products);
})
    },[]);
    console.log(products)






    //load checkout functionality
    const loadCheckout= async(priceId)=>{
       
};
    
    return(
    
    
    
    <div className='Planscrc'>
{Object.entries(products).map(([productId,productData])=>{
    // logic to check if subscription is active
    return(
        <div className='planesrc_plan'>
           <div className='planesrc_info'>
           
           <h5>  {productData.price} </h5>
           <h5> {productData.name}</h5>
           <h6>{productData.description}</h6>
                </div>
                <button onClick={()=>loadCheckout(productData.prices)}>Subscribe</button>
        </div>
    )
})}

    </div>)
}
export default Plansrc
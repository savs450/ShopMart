import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import { useEffect} from 'react';
import {setProducts} from "../redux/actions/productAction"
import axios from 'axios';

 const ProductListing = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
      const response = await axios 
      .get("https://fakestoreapi.com/products")
      .catch((err) =>{
        console.log("Error:", err)
      })
      //console.log("RES:",response.data)
      dispatch(setProducts(response.data));
    };

    useEffect (()=>{
      fetchProducts();
    },[])
    console.log("products:  ",products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  )
}
export default ProductListing;
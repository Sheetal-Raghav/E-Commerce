
import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css'


function ProductPage() {
    const [product, setProduct] = useState(" ")
    const [result, setResult] = useState([])
    const [output, setOutput] = useState([])
    
    const  changefragrances= () => {
        axios.get(`https://dummyjson.com/products/category/fragrances`).then((res) => {
            setOutput(res.data.products)
        })
    }
    const  changejewellery= () => {
        axios.get(`https://dummyjson.com/products/category/womens-jewellery`).then((res) => {
            setOutput(res.data.products)
        })
    }

    const  changefurniture= () => {
        axios.get(`https://dummyjson.com/products/category/furniture`).then((res) => {
            setOutput(res.data.products)
        })
    }
    const changeProduct = () => {
        axios.get(`https://dummyjson.com/products/category/smartphones`).then((res) => {
            setOutput(res.data.products)
        })
    }
    const  changehome= () => {
        axios.get(`https://dummyjson.com/products/category/home-decoration`).then((res) => {
            setOutput(res.data.products)
        })
    }
  
   
    const  changemens= () => {
        axios.get(`https://dummyjson.com/products/category/mens-shoes`).then((res) => {
            setOutput(res.data.products)
        })
    }
    const  changemotorcycle= () => {
        axios.get(`https://dummyjson.com/products/category/motorcycle`).then((res) => {
            setOutput(res.data.products)
        })
    }
    const  changesunglasses= () => {
        axios.get(`https://dummyjson.com/products/category/sunglasses`).then((res) => {
            setOutput(res.data.products)
        })
    }
    useEffect(() => {
        axios.get(`https://dummyjson.com/products`).then((res) => {
            setResult(res.data.products)
        })
    }, [result])

    return (
        <>
            <div>
                <h1 className="h1">Available Product</h1>
            </div>

            <div>
              
                <button type="Submit" onClick={changefragrances}>fragrances</button>
                <button type="Submit" onClick={changejewellery}> womens-jewellery</button>
                <button type="Submit" onClick={changeProduct}>Phone</button>
                <button type="Submit" onClick={changehome}>home-decoration</button>
                <button type="Submit" onClick={changefurniture}>furniture</button>
                <button type="Submit" onClick={changemens}>mens-shoes</button>
                <button type="Submit" onClick={changemotorcycle}>motorcycle</button>
                <button type="Submit" onClick={changesunglasses}>sunglasses</button>
               
            </div>
            <div className="output">
                {
                    output.map((val) => {
                        return (
                            <>
                                <div className="field">
                                    <p className="para">{val.title}</p>
                                    <h5>{val.description}</h5>
                                    <img src={val.thumbnail} height='200px' width='200px'  />
                                </div>
                            </>
                        )
                    })

                }
            </div>

            <div className="card">
                {
                    result.map((value) => {
                        return (
                            <>
                                <div className="field">
                                    <p className="para">{value.title}</p>
                                    <h5>{value.description}</h5>
                                    <img src={value.thumbnail} height='400px' width='400px' />
                                </div>


                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductPage;
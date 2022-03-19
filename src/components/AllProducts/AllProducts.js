import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = (props) => {
    const {setCartCount} = props
    const [products, setProducts] = useState ([])

    useEffect ( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json () )
            .then(data => setProducts (data) )
    }, [])

    console.log (products)

    return (
        <div>
            <h1>All products</h1>
            <div className="row container">
            {
                products.map (product => <SingleProduct
                    setCartCount={setCartCount}
                    key={product.id}
                    product={product}
                    ></SingleProduct>)
            }
            </div>
            
        </div>
    );
};

export default AllProducts;
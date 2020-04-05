import React from 'react';
import Spinner from '../Spinner';
import Product from '../Product';

import './index.scss';

export default function ProductList({ loading, products }) {
    const renderProducts = products.map((product) => {
       return (
           <Product
               key={ product.ProductID }
               product={ product }
           />
       )
    });

    return (
        <section className='products'>
            {
                loading ? (
                    <Spinner />
                ) : (
                    renderProducts
                )
            }
        </section>
    )
}

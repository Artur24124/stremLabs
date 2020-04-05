import React, { useState } from 'react';
import SubProduct from '../SubProduct';

import './index.scss';

export default function Product({ product }) {
    const [show, setShow] = useState(false);
    const subProducts = product.subProducts.map((subProduct) => {
        return (
            <SubProduct
                key={ subProduct.ProductID }
                subProduct={ subProduct }
            />
        )
    });

    return (
        <div className='product'>
            <h2 className='product__title'>{ product.Name }</h2>
            <p className='product__text'>
                <b>Описание: </b>
                { product.descriptionru }
            </p>
            <button className='product__button' onClick={ () => setShow(!show) }>
                {
                    show ? 'Скрыть' : 'Показать'
                }
            </button>

            {
                show ? (
                    <div className='product__subproducts'>
                        { subProducts }
                    </div>
                ) : null
            }
        </div>
    )
}

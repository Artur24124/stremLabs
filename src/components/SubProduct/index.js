import React from 'react';
import './index.scss';

export default function SubProduct({ subProduct }) {
    return (
        <div className='product__subproduct'>
            <h3 className='product__subproduct-title'>{ subProduct.Name }</h3>
            <p className='product__subproduct-text'>
                <b>Тип: </b>
                { subProduct.Type }
            </p>
            <p className='product__subproduct-text'>
                <b>Описание: </b>
                { subProduct.descriptionru }
            </p>
        </div>
    )
}

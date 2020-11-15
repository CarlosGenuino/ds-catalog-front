import React from 'react'
import {ReactComponent as ProductImage} from '../../../../core/assets/images/product.svg'
import ProductPrice from '../../../../core/components/ProductPrice'
import './styles.scss'

export default () => {
    return (
        <div>
            <div className="card-base border-radius-10 product-card">
                <ProductImage/>
                <div className="product-info">
                    <h6 className="product-name">
                        Computador Desktop - Intel Core i7
                    </h6>
                    <ProductPrice price="2799.99"/>
                </div>
            </div>
        </div>
    )
}
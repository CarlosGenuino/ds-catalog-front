import React from 'react'
import {ReactComponent as ProductImage} from '../../assets/images/product.svg'
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
                    <div className="product-price-container">
                        <span className="product-currancy">
                            R$
                        </span>
                        <h3 className="product-price">
                            2.779.90
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
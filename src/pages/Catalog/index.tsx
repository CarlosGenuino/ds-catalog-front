import React from 'react';
import ProductCard from '../../core/components/ProductCard';
import './styles.scss'
export default () => (
    <div className="catalog-container">
        <h1 className="catalog-title">
            Catalogo de Produtos
        </h1>
        <div className="catalog-products">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

    </div>
)
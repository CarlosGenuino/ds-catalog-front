import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';
import './styles.scss'
import { Link } from 'react-router-dom';
import { makeRequest } from '../../core/utils/request';
import { ProductResponse } from '../../core/types/Product';
export default () => {
    //buscar Lista de produtos ao iniciar o componente
    //Executa quando o componente inicia
    const [products, setProducts] = useState<ProductResponse>();
    
    useEffect(()=> {
        const params = {
            page: 0,
            linesPerPage: 12
        }
         
        makeRequest({url: '/products', params})
        .then(response => setProducts(response.data))
    }, [])
    
    
    return <div className="catalog-container">
    <h1 className="catalog-title">
        Catalogo de Produtos
    </h1>
    <div className="catalog-products">
        {products?.content.map(product => (
            <Link to={`/products/${product.id}`} key={product.id}>
                <ProductCard product={product}/>
            </Link>
        ))}
    </div>

</div>
}
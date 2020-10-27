import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';
export default () => (
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/products" exact>
                <Catalog/>
            </Route>

            <Route path="/product/:productId">
                <ProductDetails />
            </Route>

            <Route path="/admin">
                <Admin />
            </Route>
        </Switch>
    </BrowserRouter>
)
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
export default () => (
    <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
            <Route path="/" exact>
                <Home></Home>
            </Route>
            <Route path="/catalog">
                <Catalog></Catalog>
            </Route>

            <Route path="/admin">
                <Admin></Admin>
            </Route>
        </Switch>
    </BrowserRouter>
)
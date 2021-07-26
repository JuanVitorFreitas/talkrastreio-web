import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/home/index';
import Result from '../pages/result/index';



export default function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/result/:code" exact component={Result} />
                </Switch>
            </BrowserRouter>
        </React.StrictMode>
    )
}
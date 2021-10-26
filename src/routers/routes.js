import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/home/index';
import Result from '../pages/result/index';
import HistoryContextProvider from '../contexts/historyContext';
import About from "../pages/about";

export default function Router() {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<HistoryContextProvider>
					<Switch>
						<Route path="/" component={Home} exact />
						<Route path="/result/:code" exact component={Result} />
						<Route path="/about" exact component={About} />
					</Switch>
				</HistoryContextProvider>
			</BrowserRouter>
		</React.StrictMode>
	)
}
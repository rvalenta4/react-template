import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import App from "./App";

const Index = () => (
	<Router>
		<Route exact path="/" component={App} />
	</Router>
);

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById("root"),
);

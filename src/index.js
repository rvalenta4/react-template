import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./redux/store"
import { Route, BrowserRouter as Router } from "react-router-dom"
import App from "./components/app/app"

export const Index = () => (
	<Router>
		<Route exact path="/" component={App} />
	</Router>
)

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById("root"),
)

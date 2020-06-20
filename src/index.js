import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "~/redux/store"
import { Route, BrowserRouter as Router } from "react-router-dom"
import { Home } from "~/components/home/Home"

export const Index = () => {
	return (
		<Router>
			<Route exact path="/" component={Home} />
		</Router>
	)
}

ReactDOM.render(
	<Provider store={store}>
		<Index />
	</Provider>,
	document.getElementById("root"),
)

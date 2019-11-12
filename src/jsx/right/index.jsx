import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Switch} from 'react-router-dom'

import Page1table from './table.jsx'
import Page1detaile from './detile.jsx'


class Main extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	render(){
		return(
		<Switch>
			<Route path="/page1/x1" component={Page1table}></Route>
			<Route path="/page2" component={Page1detaile}></Route>
		</Switch>
		)
	}
}

export default Main
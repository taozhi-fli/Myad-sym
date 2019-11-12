import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link,Switch,Redirect} from 'react-router-dom'

import App from './App.jsx';
import Login from './Login.jsx';

import store from '../store/store.js'


class Output extends React.Component{
	constructor(props){
		super(props)
	}
	render(){	 
		 
		if(!store.getState()){
			window.location.href = "http://localhost:3000/?#/Login"
		}
		return (
		<HashRouter>
			<Switch>
				<Route exact path="/Login" component={Login}></Route>
				<Route path='/' component={App}></Route>
			</Switch>
		</HashRouter>
		)
	}
	// render(){
	// 	let x = store.getState();
	// 	console.log(x)
	// 	if(x){console.log(x)
	// 		return (
	// 			<HashRouter>
	// 					<Route path='/' component={App}></Route>
	// 			</HashRouter>
	// 		)
	// 	}else{console.log(x)
	// 		return (
	// 			<div>
	// 			<Redirect to="/Login" />
	// 			<Route exact path="/Login" component={Login}></Route>
	// 			<div>{x}</div>
	// 			</div>
	// 		)
	// 	}
	// }
}
export default Output;
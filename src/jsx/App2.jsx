import React from 'react';
// import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom'

import Top from './top/index.jsx';
import Left from './left/index.jsx';
import Main from './right/index.jsx';

import Login from './Login.jsx';

import '../css/main.css'
import '../JS/commen.js'

function A(){
	return (
		<div className = "container-fluid maintoflex">
			<Top />
			<div className="left-main-flex">
				<Left/>
				<Main />
			</div>
		</div>
	)
}
function App () {
	return (
	<HashRouter>
		<Switch>
			<Route path='/Login' component={Login}/>
			<Route path='/' render={props=>(
				<A />
			)}/>
		
		</Switch>
	</HashRouter>
	)
}
export default App;
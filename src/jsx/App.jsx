import React from 'react';
// import ReactDOM from 'react-dom';
import {HashRouter,Route} from 'react-router-dom'

import Top from './top/index.jsx';
import Left from './left/index.jsx';
import Main from './right/index.jsx';

// import Login from './Login.jsx'

// import store from '../store/store.js'

import '../css/main.css'
import '../JS/commen.js'

function App () {
	return (
		<div className = "container-fluid maintoflex">
			<Top />
			<div className="left-main-flex">
			<HashRouter>
				<Route path="/" component={Left}/>
				<Main />
			</HashRouter>
			</div>
		</div>
	)
}

// let st = store.getState()
// function showwhat(){
// 	if(st){
// 		return <App />
// 	}else{
// 		return <Login />
// 	}
// }
// export default showwhat;

export default App;
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

//这两个都可以
import Output from './jsx/output.jsx';
import App2 from './jsx/App2.jsx';

// 
// import { createStore } from 'redux'
// import store from './store/store.js'
// function getAction(x){
// 	return {
// 		type:'Login',
// 		userid:x
// 	}
// }
// const store = createStore(function(state=[],action){
// 	return [...state,]
// });
// 

// let flag = store.getState()[0];
// if(flag){
// 	console.log(flag)
	ReactDOM.render(<Output />, document.getElementById('root'));
// }else{
	// ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

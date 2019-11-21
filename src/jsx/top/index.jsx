import React from 'react';

import store from '@src/store/store.js'

class Top extends React.Component{
	constructor(props){
		super(props)
	}
	
	showLogoutC(){
		let showtarget = document.getElementsByClassName('top-index-lo')[0];
		showtarget.style.display = 'block'
	}
	notshowLogoutC(){
		let showtarget = document.getElementsByClassName('top-index-lo')[0];
		showtarget.style.display = 'none'
	}
	
	logout(){
		console.log(store);
		console.log(store.getState())
		// store.dispatch({type: "LOGIN",user: "admin123"})
		console.log(store.getState())
		localStorage.clear();
		window.location.href = "http://localhost:3000/?#/Login"
	}
	
	render(){
		return(
		<div className="row clearfix" style = {{'boxShadow': '0 0 10px 0 #eee','marginBottom':' 10px'}}>
			<div className="col-md-3 column">
				<h3 className="text-center">
					XX 后台管理系统
				</h3>
			</div>
			<div className="col-md-6 ">
					
			</div>
			<div className="col-md-3 top-index-wel" onMouseOver = {this.showLogoutC} onMouseOut={ this.notshowLogoutC}>
				<span>{'欢迎用户:'+localStorage.getItem('user')}</span>
				<div className="top-index-lo">
						<span onClick = {this.logout}>退出登录</span>
				</div>
			</div>
		</div>
		)
	} 
}
export default Top;
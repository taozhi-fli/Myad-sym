import React from 'react'
// import ReactDOM from 'react-dom'

import '../css/login.css'

import store from '../store/store.js'

function uandp(user,password){
	// console.log(123)
	if(user === 'admin' && password === '123456'){
		// console.log(456)
		store.dispatch({
			type:'LOGIN',
			user:user
		})
		
		//尝试  使用session浏览器保存
		// sessionStorage.setItem('login',true)
		localStorage.setItem('login',true);
		localStorage.setItem('user','admin')
		
		document.getElementById('username').value = '';
		document.getElementById('password').value = '';
	}
}

class Login extends React.Component{
	constructor(props){
		super(props)
	}
	
	clickforlogin(){
		let user = document.getElementById('username').value;
		let password = document.getElementById('password').value;
		uandp(user,password)

	// 登陆的时候 记录当前时间  并保存 登录记录
	console.log(new Date())
		store.dispatch({
			
		})
	}
	
	
	
	
	render(){
		return (
		<div className="loginbg">
			<div className="login">
				{/* <form action="url" methods="POST">*/}
				
				<form >
					  <fieldset>
				    <legend>欢迎登陆 -- XX后台管理系统</legend>
				    <label>
						UserName:
						<input id="username" name="username" type="text" />
					</label>
					<label>
						password:
						<input id="password" name="password" type="password" />
					</label>
					<div>
						<input type="reset" value="重置" />
						<input type="button" 
									value="登陆"
									onClick={this.clickforlogin.bind(this)} />
					</div>
				  </fieldset>
				
				</form>
			</div>
		</div>
		)
			
	}
}

export default Login;
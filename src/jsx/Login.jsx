import React from 'react'
import ReactDOM from 'react-dom'

import '../css/login.css'

import store from '../store/store.js'

function uandp(user,password){
	// console.log(123)
	if(user === 'admin' && password == '123456'){
		// console.log(456)
		store.dispatch({
			type:'LOGIN',
			user:user
		})
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
		// console.log(store.getState())
		// let xml = new XMLHttpRequest();
		// xml.open('GET','http://localhost:3000/user.json',true);
		// xml.send();
		// console.log(123)
		// xml.onreadystatechange = function(){
		// 	console.log(xml)
		// 	if(xml.readyState == 4&&xml.status == 200){
		// 		console.log(123)
		// 	}
		// }
		
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
import React from 'react'

import '@src/css/right/privilege/setting.css'



//-------------------------样式
/*
function getStyle(context){
	const style = {}
	style.inner = {
		display: 'flex',
		padding: '20px',
		flexDirection:'column',
		position:'relative',
		height:'100%'
		// width:'100%'
	}
	style.userinfo = {
		// width: '400px',
		// minWidth: '300px',
		margin: '20px',
		padding:'50px',
		backgroundColor:'#fff',
		borderRadius:'15px'
	}
	style.accountinfo = {
		backgroundColor:'#fff',
		borderRadius:'15px',
		padding:'10px',
		// width: '400px',
		// minWidth: '300px'
		margin: '20px'
	}
	style.ulflex = {
		display:'flex',
		margin:'0'
	}
	style.li = {
		listStyle : 'none',
		lineHeight : '40px',
		margin:'0 20px'
	}
	style.changePassword = {
		position:'absolute',
		top:'20%',
		left:'50%',
		marginLeft:'-200px',
		width:'400px',
		height:'200px',
		backgroundColor:'#fff',
		padding:'40px 50px',
		// display:context.toblock?'block':'none'
	}
	style.mask = {
		backgroundColor: 'rgba(68, 68, 68, 0.33)',
	  position: 'absolute',
	  top: 0,
	  bottom: 0,
	  right: 0,
	  left: 0,
		// display:context.toblock?'block':'none'
	}
	style.label = {
		display:'flex',
		justifyContent:'space-between',
		marginBottom:'10px'
	}
	return style
}
*/

//------------样式结束

//----------------模块

class Setmore extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			// style:getStyle(this),
			toblock:false
		}
	}
	
	changepassword(){
		// if(style.mask.display == 'block'){
		// 	style.mask.display = 'none';
		// 	style.changePassword.display = 'none'
		// }else{
		// 	console.log((style.x.lala))
		// 	style.x.lala = 456
		// 	console.log((style.x.lala))
		// 	// style.mask.display = 'block';
		// 	// style.changePassword.display = 'block'
		// }
		this.setState({
			toblock:!this.state.toblock 
		})
	}
	
	render(){
		return (
				<div className='inner'>
					<div className="mask" style={{display:this.state.toblock?'block':'none'}}>
						<div className="changePassword" style={{display:this.state.toblock?'block':'none'}}>
							<form>
								<label className='label'>
									<span>原密码:</span><input type="text" />
								</label>
								<label className='label'>
									<span>新密码:</span><input type="text" />
								</label>
								<label className='label'>
									<span>确认新密码:</span><input type="text" />
								</label>
								<label className='label'>
									<span></span><input className="btn btn-warning" type="button" onClick={this.changepassword.bind(this)}  value="确定"/>
								</label>
							</form>
						</div>
					</div>
					<div className='accountinfo'>
						<ul className='ulflex'>
							<li className='li'>当前用户:</li>
							<li className='li'>账号:id789</li>
							<li className='li'><button onClick={this.changepassword.bind(this)} className="btn btn-info btn-xs">修改密码</button></li>
						</ul>
					</div>
					<div className='userinfo'>
						上次登录时间:
						
					</div>
				</div>
		)
	}
}

export default Setmore
import React from 'react'

import Addnewperson from './per-addnewperson'
import Delperson from './per-deletperson'
import Setpraivi from './per-setpraivi.jsx'
import '@src/css/right/privilege/person.css'

class PerManag extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			toblock:false,//mask是否显示
			toaddperson:false,//添加组件是否显示
			todelete:false,//删除组件是否显示
			pplist:[{id: "nn", name: "nn", ac_name: "nn", password: "nn"},{id: "2", name: "n", ac_name: "bla", password: "nn"}],//所有用户信息
			cha_setpraivi:{},//当前点击的 行 信息 传给组件内部 渲染显示 
			uid:'',//当前点击的 id
			currentindex:0,//当前行 在数组里的位置
		}
	}
	
	componentWillMount(){
		//异步获取数据
		// let list = {}
		/*
		this.setState({
			pplist:--------异步获取数据///待写
		})
		*/
	}
	
	addnewperson(objorid){
		console.log('objcetORid:--------:',objorid)
		if(objorid instanceof Object){
			this.setState({
				uid : ''
			})
			this.setState({
				cha_setpraivi:{}
			})
			console.log('new')
			//添加被点击
			// post 新数据到服务器
			//diff算法不会区分 堆里的数据 应该重新创建
			if(this.state.toblock && objorid.id){
				console.log(this.state.currentindex)
				if(typeof this.state.currentindex == 'number'){
					let pplist = this.state.pplist;
					pplist.splice(this.state.currentindex,1,objorid)
					this.setState({
						pplist:[...pplist]})
				}else{
					this.setState({
						pplist:[...this.state.pplist,objorid]})
				}
				
			}
			
		}else if(typeof objorid == 'string'){
			console.log('set')
			/////设置被点击
			if(!this.state.toblock){
				//外部点击-------设置
				// 获取当前点击位置行 的 用户信息
				let currentlist;
				let currentindex;
				this.state.pplist.forEach((item,index)=>{
					if(item.id == objorid){
						currentlist = item;
						currentindex = index
					}
				})
				this.setState({
					cha_setpraivi:currentlist,
					uid:currentlist.id,
					currentindex:currentindex
				})
			}
		}else{
			this.setState({
				currentindex:null
			})
		}
		//是否显示组件
		this.setState({
			toaddperson:!this.state.toaddperson,
			toblock:!this.state.toblock
		})	
	}
	
	deleteperdon(objorid){
		if(typeof objorid == 'string'){
			let currentindex;
			this.state.pplist.forEach((item,index)=>{
				if(item.id == objorid){
					currentindex = index
				}
			})
			this.setState({
				currentindex:currentindex
			})
		}else{
			if(objorid){
				let pplist = this.state.pplist;
				pplist.splice(this.state.currentindex,1)
				this.setState({
					pplist:[...pplist]})
			}
		}
		this.setState({
			todelete:!this.state.todelete,
			toblock:!this.state.toblock
		})
	}
	
	
	render(){ 
		let showwhat;
		if(this.state.toaddperson){
			showwhat = <Addnewperson  
							changevalue={this.addnewperson.bind(this)} 
							show={this.state.toaddperson}
							value={this.state.cha_setpraivi}
							currentindex={this.state.currentindex}
							uid={this.state.uid}/>
		}else if(this.state.todelete){
			showwhat = <Delperson
					changevalue={this.deleteperdon.bind(this)} 
					currentindex={this.state.currentindex}
					show={this.state.todelete}/>
		}
		return (
			<div className="inner">
				<div className="mask" style={{display:this.state.toblock?'block':'none'}}>
				{showwhat}
				</div>			
						
				<div className="more-set-head">
						<button className="btn btn-primary btn-sm" onClick={this.addnewperson.bind(this,null)}>新增</button>
				</div>
					<div className="more-set-body">
					<table className="table table-hover set-person-tabel">
						<thead>
							<tr>
								<td>#</td>
								<td>IdNum</td>
								<td>Name</td>
								<td>accname</td>
								<td>Userpassword</td>
								<td>setting</td>
							</tr>
						</thead>
						<tbody>
							{this.state.pplist.map((item,index)=>{
								return (
									<tr key={index}>
										<td>{item.id}</td>
										<td>{item.id}</td>
										<td>{item.name}</td>
										<td>{item.ac_name}</td>
										<td>{item.password}</td>
										<td>
											<div className="row">
												<button 
													type="button" 
													className="btn btn-danger btn-xs" 
													onClick={this.deleteperdon.bind(this,item.id)} 
													>del</button>
												<button 
													className="btn btn-info btn-xs" 
													onClick={this.addnewperson.bind(this,item.id)}  
													>设置</button>
											</div>
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default PerManag
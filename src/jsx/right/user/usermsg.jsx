import React from 'react'

import '@src/css/right/user/usermsg.css'

let arr = [{
	userid:'123',usename:'张三',useradr:'*',userleval:'普通用户',isin:'true',userphone:'12345678910'
},{	userid:'1213',usename:'张三',useradr:'*',userleval:'普通用户',isin:'true',userphone:'12345678910'},
{	userid:'783',usename:'张三',useradr:'*',userleval:'普通用户',isin:'true',userphone:'12345678910'},
{	userid:'8923',usename:'张三',useradr:'*',userleval:'普通用户',isin:'true',userphone:'12345678910'}]

class Umsg extends React.Component{
	constructor(props){
		super(props);
		this.state={
			arrlist:arr,
			currentitem:{},
			isdel:false,
			isedi:false,
			isadd:false,
			isfreez:false
		}
	}
	
	getuseitem(){
		return this.state.arrlist.map(i=>{
			return(
				<tr key={i.userid}>
					<td>
						<input type="checkbox" />
					</td>
					<td>{i.userid}</td>
					<td>{i.usename}</td>
					<td>{i.userphone}</td>
					<td>{i.useradr}</td>
					<td>{i.userleval}</td>
					<td>
						123
					</td>
					<td>
						<button className="btn btn-info btn-xs" onClick={this.ediitem.bind(this,i.userid)}>编辑</button>
						<button className="btn btn-info btn-xs" onClick={this.itemmore.bind(this,i.userid)}>详情</button>
						<button className="btn btn-danger btn-xs" onClick={this.freezeitem.bind(this,i.userid)}>{i.isfreez?'解开':'冻结'}</button>
					</td>
				</tr>
			)
		})
	}
	
	delitem(){		//删除项目
		this.setState({
			isdel:true
		})
	}
	
	freezeitem(){  //冻结用户
		this.setState({
			isfreez:true
		})
	}
	
	ediitem(id){ //编辑项目
		this.state.arrlist.forEach(i=>{
			if(i.userid === id){
				this.setState({
					currentitem : i
				})
			}
		})
		this.setState({
			isedi:true
		})
	}
	
	additem(){ //添加项目
		this.setState({
			isadd:true
		})
	}
	
	itemmore(id){//查看详情
		this.state.arrlist.forEach(i=>{
			if(i.userid === id){
				this.setState({
					currentitem : i
				})
			}
		})
		this.setState({
			islook:true
		})		
	}
	
	tempEdi(){
		return(
			<div className="mask">
				<div class="gsedi">
					<div
						className="change-mask-inner" >
						<form>
							<div className="flex1">
								<label className='label'>
									<span>会员卡号:</span><input id="peraddid1" type="text"  currenttype="id"  defaultValue={this.state.currentitem.userid} />
								</label>
								<label className='label'>
									<span>姓名</span><input type="text"  currenttype="name" defaultValue={this.state.currentitem.usename}/>
								</label>
								<label className='label'>
									<span>地址</span><input type="text"  currenttype="ac_name" defaultValue={this.state.currentitem.useradr} />
								</label>
								<label className='label'>
									<span>等级</span><input type="text"  currenttype="password" defaultValue={this.state.currentitem.userleval} />
								</label>
								<label className='label'>
									<span>电话</span><input type="text"  currenttype="password" defaultValue={this.state.currentitem.userphone} />
								</label>		
							</div>
							<label className='label'>
								<span></span>
								<input className="btn btn-warning" type="button" onClick={this.tocloseedi.bind(this)} value="确定"/>
							</label>
						</form>
					</div>
				</div>
			</div>
		)
	}
	tocloseedi(){
		this.setState({
			isedi:false
		})
	}
	
	tempadd(){
		return(
			<div className="mask">
				<div className="gsedi">
					<div
						className="change-mask-inner" >
						<form>
							<div className="flex1">
								<label className='label'>
									<span>会员卡号:</span><input id="peraddid1" type="text"  currenttype="id"  defaultValue={this.state.arrlist.userid} />
								</label>
								<label className='label'>
									<span>姓名</span><input type="text"  currenttype="name" defaultValue={this.state.arrlist.usename}/>
								</label>
								<label className='label'>
									<span>地址</span><input type="text"  currenttype="ac_name" defaultValue={this.state.arrlist.useradr} />
								</label>
								<label className='label'>
									<span>等级</span><input type="text"  currenttype="password" defaultValue={this.state.arrlist.userleval} />
								</label>
								<label className='label'>
									<span>电话</span><input type="text"  currenttype="password" defaultValue={this.state.arrlist.userphone} />
								</label>		
							</div>
							<label className='label'>
								<span></span>
								<input className="btn btn-warning" type="button" onClick={this.tocloseadd.bind(this)} value="确定"/>
							</label>
						</form>
					</div>
				</div>
			</div>
		)
	}
	tocloseadd(){
		this.setState({
			isadd:false
		})
	}
	
	templook(){
		return(
			<div className="mask">
				<div class="gsedi">
					<div
						className="change-mask-inner" >
						<form>
							<div className="flex1">
								<label className='label'>
									<span>会员卡号:</span>
									<span>{this.state.currentitem.userid}</span>
								</label>
								<label className='label'>
									<span>姓名</span>
									<span>{this.state.currentitem.usename}</span>
								</label>
								<label className='label'>
									<span>地址</span>
									<span>{this.state.currentitem.useradr}</span>
								</label>
								<label className='label'>
									<span>等级</span>
									<span>{this.state.currentitem.userleval}</span>
								</label>
								<label className='label'>
									<span>电话</span>
									<span>{this.state.currentitem.userphone}</span>
								</label>		
							</div>
							<label className='label'>
								<span></span>
								<input className="btn btn-warning" type="button" onClick={this.tocloselook.bind(this)} value="确定"/>
							</label>
						</form>
					</div>
				</div>
			</div>
		)		
	}
	tocloselook(){
		this.setState({
			islook:false
		})
	}
	
	tempdel(){
		return(
		<div className="mask">
			<div class="gsdel">
				<div className="change-mask-inner" >
						是否确认删除
						<label className='label'>
							<span></span>
							<input className="btn btn-warning" type="button" onClick={this.toclosedel.bind(this)} value="确定"/>
						</label>
				</div>
			</div>
		</div>
		)		
	}
	toclosedel(){
		this.setState({
			isdel:false
		})
	}
	
	tempfreeze(){
		return (
			<div className="mask">
				<div class="gsedi">
					<div
						className="change-mask-inner" >
						方法
					</div>
				</div>
			</div>
		)
	}
	
	
	render(){	
		let temp;
		if(this.state.isdel){
			temp = this.tempdel()
		}else if(this.state.isedi){
			temp = this.tempEdi()
		}else if(this.state.isadd){
			temp = this.tempadd()
		}else if(this.state.islook){
			temp = this.templook()
		}else if(this.state.isfreez){
			temp = this.tempfreeze()
		}
		return(
		<div className="usmsg">
			<div className="usmsg-control">
				<div  className="my-to-flex">
					<div>
						<button className="btn btn-danger btn-sm" onClick={this.delitem.bind(this)}>
							<span className="glyphicon glyphicon-exclamation-sign"></span>
							&nbsp;&nbsp;删除
						</button>
					</div>
					<div>
						<button className="btn btn-primary btn-sm" onClick={this.additem.bind(this)}>
							<span className="glyphicon glyphicon-edit"></span>
							&nbsp;&nbsp;新增会员
						</button>
					</div>
				</div>
				<div className="my-to-flex">
					<span className="gs-ctrl-ser">会员搜索 :</span>
					<div className="input-group">
						<div className="input-group-btn">
							<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Action 
								<span className="caret"></span>
							</button>
							<ul className="dropdown-menu">
								<li><a href="#">姓名</a></li>
								<li><a href="#">电话</a></li>
								<li><a href="#">等级</a></li>
							</ul>
						</div>
						<input type="text" className="form-control" aria-label="..." />
						<div className="input-group-btn">
							<select className="form-control">
								<option>A</option>
								<option>D</option>
								<option>B</option>
							</select>
						</div>
						<span className="input-group-btn">
							<button className="btn btn-default" type="button">
								<span className="glyphicon glyphicon-search"></span>
							</button>
						</span>
					</div>
				</div>
			</div>
			<div className="usmsg-list">
				{temp}
				<table className="table table-striped table-hover">
				  <thead >
						<tr>
							<td>#</td>
							<td>会员编号	</td>
							<td>姓名</td>
							<td>电话</td>
							<td>地址</td>
							<td>等级</td>
							<td>会员积分</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
						{this.getuseitem()}
					</tbody>
				</table>
			</div>
		</div>
		)
	}
}

export default Umsg
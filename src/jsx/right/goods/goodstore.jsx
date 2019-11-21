import React from 'react'

import Addgs from './addgoods.jsx' 

import '@src/css/right/goods/goodstore.css'
// import {getgoodstorelist} from '@src/http/useEM/apis.js'
import {getgoodstorelist} from '@src/http/apis.js'

let tesstarr = [
	{"itemcode": "301041015", "catagory": {'1nd':'A','2nd':'A1'}, "name": "地身", "price": 19, "store": 455},
	{"itemcode": "301041016", "catagory": "零食", "name": "就值", "price": 62, "store": 468},
	{"itemcode": "301041017", "catagory": "零食", "name": "你斗着", "price": 72, "store": 490},
	{"itemcode": "301041018", "catagory": "零食", "name": "过参直信", "price": 19, "store": 558},
	{"itemcode": "301041019", "catagory": "服饰", "name": "构里点记", "price": 4, "store": 497},
	{"itemcode": "301041011", "catagory": "服饰", "name": "会基", "price": 22, "store": 491}
]

let arr = [
		{"itemcode": "301041015", "catagory": "零食", "name": "地身", "price": 19, "store": 455},
		{"itemcode": "301041016", "catagory": "零食", "name": "就值", "price": 62, "store": 468},
		{"itemcode": "301041017", "catagory": "零食", "name": "你斗着", "price": 72, "store": 490},
		{"itemcode": "301041018", "catagory": "零食", "name": "过参直信", "price": 19, "store": 558},
		{"itemcode": "301041019", "catagory": "服饰", "name": "构里点记", "price": 4, "store": 497},
		{"itemcode": "301041011", "catagory": "服饰", "name": "会基", "price": 22, "store": 491}
	]

let llchoose = {A:['A1',"A2",3,4,5],B:['B1',"B2",3,4,5],C:['C1',"C2",3,4,5],D:['D1',"D2",3,4,5],'其他':['其他']}

class Gsstore extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isadd:false,//添加按钮
			isdel:false,//删除按钮
			isedi:false,//编辑按钮
			isshowmore:false,//
			option2:['A1',"A2",3,4,5],
			goodslist:[],
			// testarr:arr,
			testarr:[],
			currentedi:{}
		}
	}
	
	componentWillMount(){
			// this.showgsto();
			let _this = this;
			getgoodstorelist().then(data =>{
				_this.setState({
					testarr : data.msg
				})})
			// this.showstore()
	}
	
	
	
	showgsto(){		//错误的方法

		let getgoodslist,_this = this;
		getgoodstorelist().then(data =>{
			_this.setState({
				useritemlist : data.msg
			},()=>{console.log(this.state.useritemlist)
			getgoodslist = this.state.useritemlist.map((i,index)=>{
		
			return (<tr key={i.itemcode}>
					<td>
						<input type="checkbox" />
					</td>
					<td>{i.itemcode}</td>
					<td>{i.catagory}</td>
					<td>{i.name}</td>
					<td>{i.price}</td>
					<td>{i.store}</td>
					<td>
						<button className={"btn btn-xs " +( i.isinshelf?"btn-info":"btn-danger")}>{i.isinshelf?'在架上':'已下架'}</button>
					</td>
					<td>
						<button className="btn btn-info btn-xs" onClick={this.ediitem.bind(this,i.itemcode)}>编辑</button>
						<button className="btn btn-info btn-xs" onClick={this.showmore.bind(this,i.itemcode)}>{i.isinshelf?'详情A':'详情B'}</button>
						<button className="btn btn-danger btn-xs" onClick={this.notsale.bind(this,i.itemcode)}>{this.state.justtest}</button>
					</td>
				</tr>)
			})
				this.setState({
				goodslist:getgoodslist
				},()=>{
				console.log(this.state.goodslist)
				})
				})})}

	delitem(){
		//删除项目
		
		this.setState({
			isdel:true
		})
	}
	
	addgoods(){
		//添加商品
		this.setState({
			isadd:true
		})
	}
	
	ediitem(id){	//编辑 本行商品设置
		this.state.testarr.forEach(i=>{
			if(i.itemcode == id){
				this.setState({
					currentedi:i
				})
			}
		})
		this.setState({
			isedi:true
		})
	}
	
	showmore(id){
		//查看 本行商品详情
		this.state.testarr.forEach(i=>{
			if(i.itemcode == id){
				this.setState({
					currentedi:i
				})
			}
		})
		this.setState({
			isshowmore:true
		})
	}
	
	showstore(){//正确的循环显示方法
		return this.state.testarr.map((i)=>{
			return (
				<tr key={i.itemcode}>
						<td>
							<input type="checkbox" />
						</td>
						<td>{i.itemcode}</td>
						<td>{i.catagory}</td>
						<td>{i.name}</td>
						<td>{i.price}</td>
						<td>{i.store}</td>
						<td>
							<button className={"btn btn-xs " +( i.isinshelf?"btn-info":"btn-danger")}>{i.isinshelf?'在架上':'已下架'}</button>
						</td>
						<td>
							<button className="btn btn-info btn-xs" onClick={this.ediitem.bind(this,i.itemcode)}>编辑</button>
							<button className="btn btn-info btn-xs" onClick={this.showmore.bind(this,i.itemcode)}>详情</button>
							<button className="btn btn-danger btn-xs" onClick={this.notsale.bind(this,i.itemcode)}>{i.isinshelf?'上':'下'}</button>
						</td>
					</tr>
			)
		})
	}
	
	tempTop(){
		return (
			<div className="gstore-control">
				<div  className="my-to-flex">
					<div>
						<button className="btn btn-danger btn-sm" onClick={this.delitem.bind(this)}>
							<span className="glyphicon glyphicon-exclamation-sign"></span>
							&nbsp;&nbsp;删除
						</button>
					</div>
					<div>
						<button className="btn btn-primary btn-sm" onClick={this.addgoods.bind(this)}>
							<span className="glyphicon glyphicon-edit"></span>
							&nbsp;&nbsp;添加产品
						</button>
					</div>
				</div>
				<div className="my-to-flex">
					<span className="gs-ctrl-ser">产品搜索 :</span>
					<div className="input-group">
						<div className="input-group-btn">
							<select>
								<option>编号</option>
								<option>分类</option>
								<option>状态</option>
								<option>P</option>
							</select>
						</div>
						<input type="text" className="form-control" aria-label="..." />
						<span className="input-group-btn">
							<button className="btn btn-default" type="button">
								<span className="glyphicon glyphicon-search"></span>
							</button>
						</span>
					</div>
				</div>
			</div>
		)
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
									<span>调整现价</span><input type="text" id="gsediprice" currenttype="password" defaultValue={this.state.currentedi.price} />
								</label>								
								<label className='label'>
									<span>调整库存</span><input type="text" id="gsedistore" currenttype="password" defaultValue={this.state.currentedi.store} />
								</label>
							</div>
							<label className='label'>
								<input className="btn btn-warning" type="button" onClick={this.tocancel.bind(this)} value="取消"/>
								<input className="btn btn-warning" type="button" onClick={this.tocloseedi.bind(this)} value="确定"/>
							</label>
						</form>
					</div>
				</div>
			</div>
		)
	}
	tocloseedi(){//关闭 编辑组件
		let currentprice = document.getElementById('gsediprice').value;
		let currentstore = document.getElementById('gsedistore').value;
		console.log(this.state.testarr)
		this.state.testarr.forEach(i=>{
			if(i.itemcode == this.state.currentedi.itemcode){
				i.price = currentprice;
				i.store = currentstore;
			}
		})
		this.setState({
			testarr:[...this.state.testarr],
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
									<span>产品分类</span>
									<select onChange={this.addgsselect.bind(this)} id="peraddid2">
										<option>A</option>
										<option>B</option>
										<option>C</option>
										<option>D</option>
										<option>其他</option>
									</select>
									<select>
									  <option required>请选择</option>
										{this.state.option2.map(i=>{
											return(
												<option>{i}</option>
											)
										})}
									</select>
								</label>
								<label className='label'>
									<span>产品编号:</span>
									<input id="peraddid1" type="text"  currenttype="id" readOnly defaultValue={new Date().getTime()} />
								</label>
								<label className='label'>
									<span>产品名称</span>
									<input type="text"  id="peraddid3"  currenttype="ac_name"  />
								</label>
								<label className='label'>
									<span>当前价格</span>
									<input type="number"  id="peraddid4"  currenttype="password"  />
								</label>
								<label className='label'>
									<span>原价</span>
									<input type="number" id="peraddid5" currenttype="password"  />
								</label>								
								<label className='label'>
									<span>库存</span>
									<input type="number"  id="peraddid6" currenttype="password" />
								</label>
							</div>
							<label className='label'>
								<input className="btn btn-warning" type="button" onClick={this.tocancel.bind(this)} value="取消"/>
								<input className="btn btn-warning" type="button" onClick={this.tocloseadd.bind(this)} value="确定"/>
							</label>
						</form>
					</div>
				</div>
			</div>
		)
	}
	tocloseadd(){
		let obj = {}
		obj.itemcode = document.getElementById('peraddid1').value;
		obj.catagory = document.getElementById('peraddid2').value||'其他';
		obj.name = document.getElementById('peraddid3').value;
		obj.price = document.getElementById('peraddid4').value;
		obj.old_price = document.getElementById('peraddid5').value;
		obj.store = document.getElementById('peraddid4').value;
		console.log(obj)
		this.setState({
			isadd:false,
			
		},()=>{console.log(this.state.testarr)})
		if(obj.name&&obj.store&&obj.price){
			this.setState({
				testarr:[...this.state.testarr,obj]
			})
		}
	}
	addgsselect(){ // 添加商品按钮 弹出框的 产品分类
		let selected1value = document.getElementById('peraddid2').options[document.getElementById('peraddid2').selectedIndex].text
		console.log(llchoose[selected1value])
		this.setState({
			option2:llchoose[selected1value]
		})
	}
	getitemcode(){
		let beforenum = this.state.testarr[this.state.testarr.length-1].itemcode;
		return new Date().time()
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
									<span>产品编号:</span><span>{this.state.currentedi.itemcode}</span>
								</label>
								<label className='label'>
									<span>产品分类</span><span>{this.state.currentedi.catagory}</span>
								</label>
								<label className='label'>
									<span>产品名称</span><span>{this.state.currentedi.name}</span>
								</label>
								<label className='label'>
									<span>当前价格</span><span>{this.state.currentedi.price}</span>
								</label>
								<label className='label'>
									<span>原价</span><span>{this.state.currentedi.old_price}</span>
								</label>								
								<label className='label'>
									<span>库存</span><span>{this.state.currentedi.store}</span>
								</label>
							</div>
							<label className='label'>
								<input className="btn btn-warning" type="button" onClick={this.tocancel.bind(this)} value="取消"/>
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
			isshowmore:false
		})
	}
	
	tempdel(){
		return(
		<div className="mask">
			<div class="gsdel">
				<div className="change-mask-inner" >
						是否确认删除
						<label className='label'>
							<input className="btn btn-warning" type="button" onClick={this.tocancel.bind(this)} value="取消"/>
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
	
	tocancel(){//点击弹出框之后 取消
		this.setState({
			isadd:false,
			isdel:false,
			isedi:false
		})
	}
	
	notsale(id,e){
		this.state.testarr.forEach((i)=>{
			if(i.itemcode === id){
				i.isinshelf = !i.isinshelf
			}else{
				return;
			}
		})
		this.setState({
			testarr:[...this.state.testarr]
		})
		console.log(123)
	}
	
	render(){
		let showwhat;
		if(this.state.isadd){
			showwhat=this.tempadd()
		}else if(this.state.isdel){
			showwhat=this.tempdel()
		}else if(this.state.isedi){
			showwhat=this.tempEdi()
		}else if(this.state.isshowmore){
			showwhat=this.templook()
		}
		return(	
		<div className="gstore">
				{showwhat}
				{this.tempTop()}
			<div className="gstore-list">
				<table className="table table-striped table-hover">
				  <thead >
						<tr>
							<td>#</td>
							<td onClick={e=>this.notsale(e)}>产品编号	</td>
							<td>分类</td>
							<td>产品名称	</td>
							<td>价格</td>
							<td>库存</td>
							<td>状态</td>
							<td>操作</td>
						</tr>
					</thead>
					<tbody>
					{this.showstore( )}
						<tr>
						<td>
						</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		)
	}
}

export default Gsstore
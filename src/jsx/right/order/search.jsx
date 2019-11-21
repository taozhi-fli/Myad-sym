import React from 'react'

import '@src/css/right/order/search.css'

let arrl = [{'gsid':'301201911160001234','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more'},
						{'gsid':'301201911160001478','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more'},
						{'gsid':'301201911160001123','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more'},
						{'gsid':'301201911160001543','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more'}]

class Orsearch extends React.Component{
	constructor(props){
		super(props);
		this.state={
			listitem:arrl
		}
	}
	
	daochu(){
		console.log('	SpreadJS , 还没做呢 ')
	}
	
	showitem(id){
		this.state.listitem.forEach(i=>{
			if(i.gsid === id){
				console.log(123)
			}
		})
	}
	
	templistitem(){
		return this.state.listitem.map(i=>{
			return(
				<tr>
					<td>
						<input type="checkbox" />
					</td>
					<td>{i.gsid}</td>
					<td>{i.time}</td>
					<td>{i.userid}</td>
					<td>{i.money}</td>
					<td><span className="hoverudl" onClick={this.showitem.bind(this,i.gsid)}>[点击查看]</span></td>
					<td>
						<button className="btn btn-info btn-xs">正常</button>
					</td>
					<td>
						<button className="btn btn-info btn-xs" onClick={this.daochu.bind(this)}>导出</button>
						<button className="btn btn-danger btn-xs">退款</button>
					</td>
				</tr>
			)
		})
	}
	
	render(){
		return (
			<div className="or-search">
				<div className="or-search-control">
					<div className="my-to-flex">
						<span className="gs-ctrl-ser">订单搜索 :</span>
						<div className="input-group">
							<div className="input-group-btn">
								<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									订单编号 
									<span className="caret"></span>
								</button>
								<ul className="dropdown-menu">
									<li><a href="#">订单编号</a></li>
									<li><a href="#">123</a></li>
									<li><a href="#">等级</a></li>
								</ul>
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
				<div className="or-search-list">
					<table className="table table-striped table-hover">
					  <thead >
							<tr>
								<td>#</td>
								<td>订单编号	</td>
								<td>交易时间</td>
								<td>会员账号</td>
								<td>金额</td>
								<td>详情</td>
								<td>状态</td>
								<td>操作</td>
							</tr>
						</thead>
						<tbody>
							{this.templistitem()}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default Orsearch

import React from 'react'

import '@src/css/right/order/refund.css'

let arrl = [{'gsid':'301201911160001234','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more','isTorS':true},
						{'gsid':'301201911160001478','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more','isTorS':true},
						{'gsid':'301201911160001123','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more','isTorS':true},
						{'gsid':'301201911160001543','time':'17:30','userid':'154875416878','money':'35.4','linkmore':'more','isTorS':true}]

class Orrefund extends React.Component{
	constructor(props){
		super(props);
		this.state={
			listitem:arrl
		}
	}
	
	showitem(){
		
	}
	
	givemoney(){//点击发起退款,到用户账户
		
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
						<button className="btn btn-info btn-xs">{i.isTorS?'申请中':'退款中'}</button>
					</td>
					<td>
						<button className="btn btn-danger btn-xs" onClick={this.givemoney.bind(this)}>退款</button>
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
											<td>退单编号</td>
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
export default Orrefund

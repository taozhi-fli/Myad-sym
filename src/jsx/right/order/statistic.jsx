import React from 'react'

import '@src/css/right/order/statistic.css'

class Orstatistic extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		return (
			<div className="or-stc">
				<div className="or-stc-sale">
					圆图 内容是最近销售的物品数据
				</div>
				<div className="or-stc-refen">
					圆图 近一周退款原因
				</div>
				<div className="or-stc-all">
					折线图 最近一周/月的各种数据切换
				</div>
			</div>
		)
	}
}

export default Orstatistic

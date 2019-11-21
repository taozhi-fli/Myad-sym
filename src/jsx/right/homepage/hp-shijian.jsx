import React from 'react'

import '@src/css/right/homepage/hptime.css'

class HpTime extends React.Component{
	constructor(props){
		super(props);
		this.state={
			date : new Date()
		}
	}
	
	componentWillMount(){
		setInterval(()=>{
			this.setState({
				date:new Date()
			})
			// console.log(123)
		},1000)
	}
	
	
	render(){ 
		return (
			<div className="hp-inner-main hptime">
				<div className="time-contain">
					<div className="time-show">{this.state.date.getHours()>9?this.state.date.getHours():'0'+this.state.date.getHours()}</div>
					<div className="time-point">:</div>
					<div className="time-show">{this.state.date.getMinutes()>9?this.state.date.getMinutes():'0'+this.state.date.getMinutes()}</div>
					<div className="time-point">:</div>
					<div className="time-show">{this.state.date.getSeconds()>9?this.state.date.getSeconds():'0'+this.state.date.getSeconds()}</div>
				</div>
				<div className="day-contain">
					<div className="day-YM">{this.state.date.getFullYear()+'年'+(this.state.date.getMonth()+1)+'月'}</div>
					<div className="day-D">
						<div className="day-D-top">{this.state.date.getDate()}</div>
						<div className="day-D-bot">{'星期'+this.state.date.getDay()}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HpTime
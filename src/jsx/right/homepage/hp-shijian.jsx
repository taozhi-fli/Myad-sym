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
			<div class="hp-inner-main hptime">
				<div class="time-contain">
					<div class="time-show">{this.state.date.getHours()>9?this.state.date.getHours():'0'+this.state.date.getHours()}</div>
					<div class="time-point">:</div>
					<div class="time-show">{this.state.date.getMinutes()>9?this.state.date.getMinutes():'0'+this.state.date.getMinutes()}</div>
					<div class="time-point">:</div>
					<div class="time-show">{this.state.date.getSeconds()>9?this.state.date.getSeconds():'0'+this.state.date.getSeconds()}</div>
				</div>
				<div class="day-contain">
					<div class="day-YM">{this.state.date.getFullYear()+'年'+(this.state.date.getMonth()+1)+'月'}</div>
					<div class="day-D">
						<div class="day-D-top">{this.state.date.getDate()}</div>
						<div class="day-D-bot">{'星期'+this.state.date.getDay()}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default HpTime
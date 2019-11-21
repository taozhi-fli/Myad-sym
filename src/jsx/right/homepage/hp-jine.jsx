import React from 'react'
import echarts from 'echarts'

import '@src/css/right/homepage/dollar.css'

class Hpdollar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isBar:true
		}
	}
	
	componentDidMount(){
		if(this.state.isBar){
			this.paintbar()
		}else{
			this.paintpie()
		}
	}
	
	paintpie(){
		echarts.init(document.getElementById('echapie')).setOption({
			title:{
				text:'test'
			},
			series:[
				{
					type:'pie',
					data:[
						{name:'A',value:123},
						{name:'B',value:178},
						{name:'C',value:223}
					],
					roseType:'angle'
				}
			],
			xAxis:{show:false},
			yAxis:{show:false}
		})
	}
	
	paintbar(){
		echarts.init(document.getElementById('echabar')).setOption({
			title:{
				text:'testbar'
			},
			series:[{
				data:[25,30,24,10],
				type:'bar'
			}],
			xAxis:{
				data:['A','B','C','D'],
				show:true
			},
			yAxis:{show:true}
		})
	}
	
	changestyle(){
		this.setState({
			isBar:!this.state.isBar
		},()=>{
			if(this.state.isBar){
				this.paintbar()
			}else{
				this.paintpie()
			}
		})
	}
	
	render(){
		let showwhat;
		if(this.state.isBar){
			showwhat = <div id="echabar" style={{width: '100%',height:'100%'}}></div>
		}else{
			showwhat = <div id="echapie" style={{width: '100%',height:'100%'}}></div>
		}
		return (
			<div className="hpdol">
				<span onClick={this.changestyle.bind(this)}>点击切换</span>
				{showwhat}
			</div>
		)
	}
}
export default Hpdollar
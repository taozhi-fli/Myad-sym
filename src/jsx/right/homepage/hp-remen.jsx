import React from 'react'
import echarts from 'echarts'

import '@src/css/right/homepage/hppop.css'

class HpRemen extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	changelist(e){
		console.log(e.target.nodeName)
		if(e.target.nodeName != 'SPAN') return;
		let spanlist = document.getElementsByTagName('span');
		let splength = spanlist.length;
		let typeid = e.target.getAttribute('plul');
		let showul = document.getElementById(typeid);
		let ullist = document.getElementsByClassName('hppop-body-ul');
		let ullength =  ullist.length;
		
		//移除下边框none属性
		for(let i=0;i<splength;i++){
			//H5新增的操作class方法 
			spanlist[i].classList.remove('hppop-title-curspan')
		}
		for(let i=0;i<ullength;i++){
			//H5新增的操作class方法 
			ullist[i].classList.remove('hppop-show')
		}
		e.target.classList.add('hppop-title-curspan')
		showul.classList.add('hppop-show')
	}
	
	render(){
		return (
			<div>
				<div className="hppop-title"> 热门产品 </div>
				<div className="hppop-body">
					<div className="hppop-body-title" onClick={this.changelist}>
						<span className="hppop-title-curspan" plul="hppop-type1">type1</span>
						<span plul="hppop-type2">type2</span>
						<span plul="hppop-type3">type3</span>
						<span plul="hppop-type4">type4</span>
					</div>
					<div className="hppop-body-item" >
						<ul id="hppop-type1" className="hppop-body-ul hppop-show">
							<li>tt123</li>
							<li>123</li>
							<li>123</li>
							<li>qwe</li>
							<li>qwr</li>
							<li>sd</li>
							<li>as</li>
							<li>fadfa</li>
							<li>qwe</li>
						</ul>
						<ul id="hppop-type2" className="hppop-body-ul">
							<li>ee2123</li>
							<li>123</li>
							<li>123</li>
							<li>qwe</li>
							<li>qwr</li>
							<li>sd</li>
							<li>as</li>
							<li>fadfa</li>
							<li>qwe</li>
						</ul>
						<ul id="hppop-type3" className="hppop-body-ul">
							<li>123</li>
							<li>123</li>
							<li>123</li>
							<li>qwe</li>
							<li>qwr</li>
							<li>sd</li>
							<li>as</li>
							<li>fadfa</li>
							<li>qwe</li>
						</ul>
						<ul id="hppop-type4" className="hppop-body-ul">
							<li>123</li>
							<li>123</li>
							<li>123</li>
							<li>qwe</li>
							<li>qwr</li>
							<li>sd</li>
							<li>as</li>
							<li>fadfa</li>
							<li>qwe</li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

class Remenpicline extends React.Component{
	constructor(props){
		super(props)
	}
	
	componentDidMount(){
		this.showechartline()
	}
	
	showechartline(){
		echarts.init(document.getElementById('hpremenline')).setOption({
			  title: {
			        text: 'A',
			        subtext: '纯属虚构'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['typeA','typeB','typeC','typeD']
			    },
			    toolbox: {
			        show: false,
			        feature: {
			            magicType: {show: true, type: ['stack', 'tiled']},
			            saveAsImage: {show: true}
			        }
			    },
			    xAxis: {
			        // type: 'category',
			        boundaryGap: false,
			        data: ['周一','周二','周三','周四','周五','周六','周日']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        name: 'typeA',
			        type: 'line',
			        smooth: true,
			        data: [10, 12, 21, 54, 260, 830, 710]
			    },
			    {
			        name: 'typeB',
			        type: 'line',
			        smooth: true,
			        data: [30, 182, 434, 791, 390, 30, 10]
			    },
			    {
			        name: 'typeC',
			        type: 'line',
			        smooth: true,
			        data: [1320, 1132, 601, 234, 120, 90, 20]
			    },{
							name:'typeD',
							type:'line',
							smooth:true,
							data:[200,10,512,48,50,318,12,48]
					}]
		})
	}
	
	render(){
		return(
		<div id="hpremenline" style={{width:'100%',height:'100%'}}></div>
		)
	}
}

class Remenout extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			what:false
		}
	}
	
	changeshow(){
		this.setState({
			what:!this.state.what
		})
	}
	
	render(){
		let showwhat;
		if(this.state.what){
			showwhat =	<HpRemen />
		}else{
			showwhat = <Remenpicline />
		}
		return(
		<div className="hppop">
			<div onClick={this.changeshow.bind(this)}>点击切换</div>
			{showwhat}
		</div>
		)
	}
}

export default Remenout
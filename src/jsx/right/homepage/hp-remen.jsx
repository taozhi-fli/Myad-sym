import React from 'react'

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
			<div className="hppop">
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

export default HpRemen
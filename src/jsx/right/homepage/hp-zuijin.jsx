import React from 'react'

import '@src/css/right/homepage/hpnewgoods.css'

class Hpnew extends React.Component{
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
		let ullist = document.getElementsByClassName('hpnew-body-ul');
		let ullength =  ullist.length;
		
		//移除下边框none属性
		for(let i=0;i<splength;i++){
			//H5新增的操作class方法 
			spanlist[i].classList.remove('hpnew-title-curspan')
		}
		for(let i=0;i<ullength;i++){
			//H5新增的操作class方法 
			ullist[i].classList.remove('hpnew-show')
		}
		e.target.classList.add('hpnew-title-curspan')
		showul.classList.add('hpnew-show')
	}
	
	render(){
		return (
			<div className="hpnew">
				<div className="hpnew-title"> 最新 </div>
				<div className="hpnew-body">
					<div className="hpnew-body-title" onClick={this.changelist}>
						<span className="hpnew-title-curspan" plul="hpnew-type1">type1</span>
						<span plul="hpnew-type2">type2</span>
						<span plul="hpnew-type3">type3</span>
						<span plul="hpnew-type4">type4</span>
					</div>
					<div className="hpnew-body-item" >
						<ul id="hpnew-type1" className="hpnew-body-ul hpnew-show">
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
						<ul id="hpnew-type2" className="hpnew-body-ul">
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
						<ul id="hpnew-type3" className="hpnew-body-ul">
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
						<ul id="hpnew-type4" className="hpnew-body-ul">
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
export default Hpnew
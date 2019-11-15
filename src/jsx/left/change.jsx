import ReactDOM from 'react-dom';
import React from 'react';
import {Link,HashRouter} from 'react-router-dom';


class Leftchange extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:this.props.list.items,
			hassede:this.props.list.hassede,
			link : this.props.list.link,
			title:this.props.list.title
		}
	}
	render(){
		let Items = this.state.items && this.state.items.map((i,index)=>{
				// console.log(i)
					return (		<Link to= {i.link}  key={index}>
													<li> {i.title} </li>
											</Link>	)
				})
		// if(this.state.hassede){	
			// console.log(this.state.hassede)
			if(this.state.hassede){
			return (
				<div className="leftchangeitem">
					<div className="change-title" onClick={leftNavChangePart}>
						{this.state.title}
					</div>
					<ul className="change-items" style={{listStyle:'none'}}>
						{Items}
					</ul>			
				</div>
			)
			} else{
			return (
				<div className="leftchangeitem">
					<Link to= {this.state.link}>
						<div className="change-title" onClick={leftNavChangePart}>
							{this.state.title}
						</div>
					</Link>					
				</div>
		)
		}
	}
}

let leftnavitems = document.getElementsByClassName('leftchangeitem');

function leftNavChangePart(e){
	// console.log(leftnavitems,'-------',e,'=========',e.target.nextSibling)
	let length = leftnavitems.length;
	for(let i=0;i<length;i++){
		if(leftnavitems[i].getElementsByClassName('change-items')[0]){
			 leftnavitems[i].getElementsByClassName('change-items')[0].style.display = 'none';
		}
	}
	if(e.target.nextSibling){e.target.nextSibling.style.display = 'block';}
}



export default Leftchange
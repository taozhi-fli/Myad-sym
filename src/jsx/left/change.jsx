import ReactDOM from 'react-dom';
import React from 'react';
import {Link,HashRouter} from 'react-router-dom';

let style={
	changetitle:{
		
	}
}

class Leftchange extends React.Component{
	constructor(props){
		super(props);
		this.state={
			items:this.props.items,
		}
	}
	
	render(){
		
		let Items = this.state.items.map((i,index)=>{
				return (		<Link to= {i.loca}  key={index}>
												<li> {i.text} </li>
										</Link>	)
			})
		
		return (
			<div className="leftchangeitem">
				<div className="change-title" onClick={leftNavChangePart}>
					{this.props.listtitle}
				</div>
				<ul className="change-items" style={{listStyle:'none'}}>
					{Items}
				</ul>			
			</div>
		)
	}
}

let leftnavitems = document.getElementsByClassName('leftchangeitem');

function leftNavChangePart(e){
	console.log(leftnavitems,'-------',e,'=========',e.target.nextSibling)
	let length = leftnavitems.length;
	for(let i=0;i<length;i++){
		leftnavitems[i].getElementsByClassName('change-items')[0].style.display = 'none';
	}
	if(e.target.nextSibling){e.target.nextSibling.style.display = 'block';}
}



export default Leftchange
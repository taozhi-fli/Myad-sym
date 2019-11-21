import React from 'react';
// import ReactDOM from 'react-dom';

import ChangeBar from './change.jsx'
import '@src/css/leftnavchange.css'

import {getleftlist} from '@src/http/apis.js'
// import {getleftlist} from '@src/http/useEM/apis.js'


class Left extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			leftlist:[],
			hasdata:false
		}
	}
	
	componentWillMount(){
		let getlist;
		getleftlist().then(data=>{
			// console.log(data)
			getlist = data.list.map((i,index)=>
					<ChangeBar
								key = {index}
								items = {i.items} 
								listtitle = {i.title}
								list = {i}/>
			)
			// console.log(getlist)
			this.setState({
				leftlist:getlist,
				hasdata:true
			})
		})
		
		
	}
	
	render(){
			return (
			<div  className=" lefttoflex" id="left">
				{this.state.hasdata?this.state.leftlist:'Loading'}
			</div>
			)
	}
	
}
export default Left;
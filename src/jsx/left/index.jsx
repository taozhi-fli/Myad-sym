import React from 'react';
import ReactDOM from 'react-dom';

import ChangeBar from './change.jsx'
import '../../css/leftnavchange.css'
// 
// import {ax} from '../../http/httprequest.js'
// 
// 
// let res = ax({
// 	methods:'GET',
// 	url:'/api/main-left.json'
// }).then(data=>{
// 	console.log(data)
// })
// 
// console.log(res)
import {getleftlist} from '../../http/apis.js'

let list1 = [{text:'item1',loca:'/page1/x1'},{text:'item2',loca:'/page1/x2'}]
let list2 = [{text:'item1',loca:'/page2/x1'},{text:'item2',loca:'/page2/x2'}]

// function Left () {
// 	return (
// 		<div  className=" lefttoflex" id="left">
// 			<ChangeBar 
// 						items={list1} 
// 						listtitle='List1'/>
// 			<ChangeBar
// 						items={list2} 
// 						listtitle='List2'/>
// 			<ChangeBar
// 						items={[{text:'item1',loca:'#'},{text:'item2',loca:'#'}]} 
// 						listtitle='main'/>
// 		</div>
// 		)
// }


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
			console.log(data,typeof data)
			getlist = data.list.map((i,index)=>
					<ChangeBar
								key = {index}
								items = {i.items} 
								listtitle = {i.title}
								list = {i}/>
			)
			console.log(getlist)
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
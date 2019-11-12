import React from 'react';
import ReactDOM from 'react-dom';

import ChangeBar from './change.jsx'
import '../../css/leftnavchange.css'

let list1 = [{text:'item1',loca:'/page1/x1'},{text:'item2',loca:'/page1/x2'}]
let list2 = [{text:'item1',loca:'/page2/x1'},{text:'item2',loca:'/page2/x2'}]
function Left () {
	return (
		<div  className=" lefttoflex" id="left">
			<ChangeBar 
						items={list1} 
						listtitle='List1'/>
			<ChangeBar
						items={list2} 
						listtitle='List2'/>
			<ChangeBar
						items={[{text:'item1',loca:'#'},{text:'item2',loca:'#'}]} 
						listtitle='main'/>
		</div>
		)
}
export default Left;
import React from 'react'
import ReactDOM from 'react-dom'
import {Route,Switch} from 'react-router-dom'

import Homepage from './homepage/homepage.jsx'
import Page1table from './table.jsx'
import Page1detaile from './detile.jsx'

import SetMore from './Privilege/setting.jsx'
import PerManag from './Privilege/personalManagement.jsx'

import Addgoods  from './goods/addgoods.jsx'

class Main extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	render(){
		return(
		<div id="right" style={{backgroundColor:'#eee',margin:'0 10px',flex:1}}>
			<Switch>
				<Route exact path="/" component={Homepage}></Route>
				<Route path="/page1/x1" component={Page1table}></Route>
				<Route path="/page2" component={Page1detaile}></Route>
				
				<Route path="/setting/setmore" component={SetMore}></Route>
				<Route path="/setting/person" component={PerManag}></Route>
				
				
				<Route path="/goods/add" component={Addgoods}></Route>
			</Switch>
		</div>
		)
	}
}

export default Main
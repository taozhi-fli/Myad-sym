import React from 'react'
// import ReactDOM from 'react-dom'
import {Route,Switch} from 'react-router-dom'

import '@src/css/public.css'

import Homepage from './homepage/homepage.jsx'

import Addgoods  from './goods/addgoods.jsx'
import GoodsIndex  from './goods/goodsindex.jsx'
import Goodstore  from './goods/goodstore.jsx'

import UserMsg from './user/usermsg.jsx'

import Orsearch from './order/search.jsx'
import Orstatistic from './order/statistic.jsx'
import Orrefund from './order/refund.jsx'

import ActWhole from './active/whole-act.jsx'
import Actonly from './active/onlyact.jsx'
import Actlast from './active/last.jsx'

import SetMore from './Privilege/setting.jsx'
import PerManag from './Privilege/personalManagement.jsx'

import Err from './er.jsx'

/*
class Main extends React.Component{
	constructor(props){
		super(props)
	}
	
	
	render(){
		return(
		<div id="right" style={{backgroundColor:'#eee',margin:'0 10px',flex:1}}>
			<Switch>
			
				<Route exact path="/" component={Homepage}></Route>
				
				<Route path="/goods/add" component={Addgoods}></Route>
				<Route path="/goods/index" component={GoodsIndex}></Route>
				<Route path="/goods/store" component={Goodstore}></Route>
				
				<Route path="/user/msg" component={UserMsg}></Route>
				
				<Route path="/order/ser" component={Orsearch}></Route>
				<Route path="/order/statistic" component={Orstatistic}></Route>
				<Route path="/order/refund" component={Orrefund}></Route>
				
				<Route path="/act/whole" component={ActWhole}></Route>
				<Route path="/act/vip" component={Actonly}></Route>
				<Route path="/act/last" component={Actlast}></Route>
				
				<Route path="/setting/setmore" component={SetMore}></Route>
				<Route path="/setting/person" component={PerManag}></Route>
				
				<Route default component={Err}></Route>
			</Switch>
		</div>
		)
	}
}*/


function Main(){
		return(
		<div id="right" style={{backgroundColor:'#eee',margin:'0 10px',flex:1}}>
			<Switch>
			
				<Route exact path="/" component={Homepage}></Route>
				
				<Route path="/goods/add" component={Addgoods}></Route>
				<Route path="/goods/index" component={GoodsIndex}></Route>
				<Route path="/goods/store" component={Goodstore}></Route>
				
				<Route path="/user/msg" component={UserMsg}></Route>
				
				<Route path="/order/ser" component={Orsearch}></Route>
				<Route path="/order/statistic" component={Orstatistic}></Route>
				<Route path="/order/refund" component={Orrefund}></Route>
				
				<Route path="/act/whole" component={ActWhole}></Route>
				<Route path="/act/vip" component={Actonly}></Route>
				<Route path="/act/last" component={Actlast}></Route>
				
				<Route path="/setting/setmore" component={SetMore}></Route>
				<Route path="/setting/person" component={PerManag}></Route>
				
				<Route default component={Err}></Route>
			</Switch>
		</div>
		)
}

export default Main
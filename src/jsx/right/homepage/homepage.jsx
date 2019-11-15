import React from 'react'

import '@src/css/right/homepage/homepage.css'

import HPTime from './hp-shijian.jsx'
import HPpop from './hp-remen.jsx'
import HPnew from './hp-zuijin.jsx'
import HPdollar from './hp-jine.jsx'
import HPlogin from './hp-denglujilu.jsx'


class Homepage extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<div class="hp-main">
				<HPTime />
				<HPdollar />
				<HPlogin />
				<HPnew />
				<HPpop />
			</div>
		)
	}
}

export default Homepage;
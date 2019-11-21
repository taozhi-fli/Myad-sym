import React from 'react'


class Actlast extends React.Component{
	constructor(props){
		super(props);
	}
	
	componentWillMount(){
		console.log('in')
	}
	componentWillUnmount(){
		console.log('del')
	}
	
	render(){
		return(
			<div>
				last
			</div>
		)
	}
}
export default Actlast
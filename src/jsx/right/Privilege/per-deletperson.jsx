import React from 'react'

import '@src/css/right/privilege/dele.css'

class Delperson extends React.Component{
	constructor(props){
		super(props);
		this.state={
			todelete:this.props.show
			// addnewperson:this.props.addnewperson
		}
	}
	
	deleteperdon(){
		this.props.changevalue(1);
	}
	
	notdel(){
		this.props.changevalue();
	}
	
	render(){
		return (	<div className="change-mask-del-inner">
							<form>
								<div className="flex1" style={{height:100}}>
									<span>是否确认删除</span>
								</div>

								<label className='label'>
									<input className="btn btn-warning" type="button" onClick={this.notdel.bind(this)}  value="取消"/>
									<input className="btn btn-warning" type="button" onClick={this.deleteperdon.bind(this)}  value="确定"/>
								</label>
							</form>
						</div>
			
		)
	}
	}

export default Delperson
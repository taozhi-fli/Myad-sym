import React from 'react'

// import '@src/css/right/privilege/person.css'

class Setpraivi extends React.Component{
	constructor(props){
		super(props);
		this.state={
			
			// addnewperson:this.props.addnewperson
		}
	}
	
	setpraivi(x){
		console.log(x)
		this.props.changevalue(x);
	}
	
	render(){
		return (
		<div 
			className="change-mask-inner" 
			style={{display:this.props.show?'block':'none'}}>
			<form>
				<div className="flex1">
					<label className='label'>
						<span>id:</span><input id="peraddid1" type="text"  currenttype="id"  defaultValue={this.state.uid} />
					</label>
					<label className='label'>
						<span>name</span><input type="text"  currenttype="name"/>
					</label>
					<label className='label'>
						<span>accname</span><input type="text"  currenttype="ac_name"  />
					</label>
					<label className='label'>
						<span>password</span><input type="text"  currenttype="password"  />
					</label>
				</div>
				<label>
					<span>权限</span>
					<div className="checklabelinnerbox">
						<label className='checklabel'>
							<span>A</span><input type="checkbox" name="autho"  currenttype="A"  />
						</label>
						<label className='checklabel'>
							<span>B</span><input type="checkbox" name="autho"  currenttype="B"  />
						</label>
						<label className='checklabel'>
							<span>C</span><input type="checkbox" name="autho"  currenttype="C"  />
						</label>
						<label className='checklabel'>
							<span>D</span><input type="checkbox" name="autho"  currenttype="D"  />
						</label>
						<label className='checklabel'>
							<span>E</span><input type="checkbox" name="autho"  currenttype="E"  />
						</label>
					</div>
				</label>
				<label className='label'>
					<span></span><input className="btn btn-warning" type="button" onClick={this.setpraivi.bind(this)}  value="确定"/>
				</label>
			</form>
		</div>
		)
	}
	
}

export default Setpraivi
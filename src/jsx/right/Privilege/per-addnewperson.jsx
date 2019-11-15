import React from 'react'

// import '@src/css/right/privilege/person.css'

// 添加新成员的  只获取就可以
//-------------------------------

let objlinshi =  {
        "1045": {
            "id": 1045,
            "name": "zzz",
            "ac_name": "admin",
            "password": 123456,
            "pri": {
                "con-p": true,
                "con-an": "falses"
            }
        },
        "1044": {
            "id": 1045,
            "name": "zzz",
            "ac_name": "admin",
            "password": 123456,
            "pri": {
                "con-p": true,
                "con-an": "falses"
            }
        }
    }

//--------------------------------






class Addperson extends React.Component{
	constructor(props){
		super(props);
		this.state={
			currentobj:{},
			currentId:null,
			conp:0,
			// currentindex:this.props.currentindex
		}
	}
	
	addnewperson(){
		let input = document.getElementsByClassName('per-addorset-input');
		let length = input.length;
		let resarr = {};
		for(let i=0;i<length;i++){
			let type = input[i].getAttribute('currenttype');
			resarr[type] = i<4? input[i].value : input[i].checked
		}
		if(resarr.id){
			this.props.changevalue(resarr);
		}else{
			this.props.changevalue();
		}

	}
	
	render(){
		console.log('组件内部输出的value',this.props.value)
		return (
			<div className="change-mask-inner">
				<form>
					<div className="flex1">
						<label className='label'>
							<span>id:</span><input id="peraddid1" className="per-addorset-input" type="text"   currenttype="id"  defaultValue={this.props.value.id} />
						</label>
						<label className='label'>
							<span>name:</span><input type="text" className="per-addorset-input"    currenttype="name" defaultValue={this.props.value.name} />
						</label>
						<label className='label'>
							<span>accname</span><input type="text"  className="per-addorset-input"   currenttype="ac_name" defaultValue={this.props.value.ac_name}  />
						</label>
						<label className='label'>
							<span>password</span><input type="text"   className="per-addorset-input"  currenttype="password" defaultValue={this.props.value.password}  />
						</label>
					</div>
					<label>
						<span>权限</span>
						<div className="checklabelinnerbox">
							<label className='checklabel'>
								<span>A</span><input type="checkbox" name="autho"  className="per-addorset-input"   currenttype="check-A" defaultValue={this.props.value.A}  />
							</label>
							<label className='checklabel'>
								<span>B</span><input type="checkbox" name="autho"  className="per-addorset-input"   currenttype="check-B" defaultValue={this.props.value.B}  />
							</label>
							<label className='checklabel'>
								<span>C</span><input type="checkbox" name="autho"   className="per-addorset-input"  currenttype="check-C" defaultValue={this.props.value.C}  />
							</label>
							<label className='checklabel'>
								<span>D</span><input type="checkbox" name="autho"  className="per-addorset-input"   currenttype="check-D" defaultValue={this.props.value.D}  />
							</label>
							<label className='checklabel'>
								<span>E</span><input type="checkbox" name="autho"   className="per-addorset-input"  currenttype="check-E" defaultValue={this.props.value.E} />
							</label>
						</div>
					</label>
					<label className='label'>
						<span></span><input className="btn btn-warning" type="button" onClick={this.addnewperson.bind(this)}  value="确定"/>
					</label>
				</form>
			</div>
		)
	}
	
}

export default Addperson
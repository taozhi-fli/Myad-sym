
import React from 'react'

import '@src/css/right/goods/addgoods.css'

let llchoose = {A:['A1',"A2",3,4,5],B:['B1',"B2",3,4,5],C:['C1',"C2",3,4,5],D:['D1',"D2",3,4,5]}


class Addgoods extends React.Component{
	constructor(props){
		super(props);
		this.state={
			option2:[]
		}
	}
	
	
	showimg(){
		//调用
		let ff = new FileReader();
		let chosefile = document.getElementById('gsupimg');
		let file = chosefile.files[0]
		ff.readAsDataURL(file);
		ff.onload = function(){
			chosefile.nextElementSibling.src = ff.result;
			// chosefile.nextElementSibling.style.display = "block";
		}
	}
	
	changeselect1(){
		let currentsele = document.getElementsByClassName("select")[0].selectedOptions[0].innerText;
		let n2 = document.getElementsByClassName("select-2nd")[0];
		console.log(currentsele)
		let temp = llchoose[currentsele].map(i=>(
			<option>{i}</option>
		))
		
		this.setState({
			option2:temp,
		})
	}
	
	subgs(e){
		e.preventDefault()
		let obj = {};
		obj.itemcode = document.getElementById("goodsid").value;
		obj.name = document.getElementById("goodstitle").value;
		obj.catagory = document.getElementsByClassName("select")[0].selectedOptions[0].innerText;
		obj.oldp = document.getElementById("oldp").value;
		obj.newp = document.getElementById("newp").value;
		obj.store = document.getElementById("gstore").value;
		obj.mark = document.getElementById("gs-tear").value;
		console.log(obj)
	}
	
	render(){
		return(
			<div className="addgoods">
				<form>
						<div className="form-group">
							<label htmlFor="goodsid">编号</label>
							<input type="text" className="form-control " id="goodsid" defaultValue={Math.random()} disabled/>
						</div>
						<div className="form-group">
							<label htmlFor="goodstitle">商品名称</label>
							<input type="text" className="form-control " id="goodstitle" placeholder="名称" />
						</div>
						<div className="form-group">
							<label htmlFor="goodstitle">分类</label>
							<div className="row">
								<select className="select form-control col-xs-6" onChange={this.changeselect1.bind(this)}>
									<option>A</option>
									<option>B</option>
									<option>C</option>
									<option>D</option>
								</select>
								<select class="select select-2nd">
								  <option required>请选择</option>
									{this.state.option2}
								</select>
							</div>
						</div>
						<div className="form-group">
							<span className="add-gs-item-span">发布栏</span>
							
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox1" value="option1" /> 全场
								</label>
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox2" value="option2" /> 类型2
								</label>
								<label className="checkbox-inline">
									<input type="checkbox" id="inlineCheckbox3" value="option3" /> 类型3
								</label>
						</div>
						<div className="form-group">
							<label htmlFor="oldp">商品原价</label>
							<input required type="number" className=" form-control" id="oldp" placeholder="$" />
						</div>
						<div className="form-group">
							<label htmlFor="newp">活动价</label>
							<input required type="number" className="form-control " id="newp" placeholder="$" />
						</div>
						<div className="form-group">
							<label htmlFor="gstore">库存数量</label>
							<input required type="number" className=" form-control" id="gstore" placeholder="数量" />
						</div>
						<div className="form-group">
							<label htmlFor="gsupimg" >点击选择图片</label>
							<input type="file" id="gsupimg" onChange={this.showimg} accept="image/png,image/jpg,image/jpeg,image/svg"/>
							<img src="/img/nophoto.jpg" alt="这是选择提交的图片" id="gsup-rep-img"/>
						</div>
						<div className="form-group">
							<label htmlFor="gs-tear">备注</label>
							<textarea id="gs-tear" className="form-control"></textarea>
						</div>
						<div>
							<button className="btn btn-primary btn-sm" onClick={this.subgs.bind(this)}>点击提交</button>
							
						</div>
				</form>
			</div>
		)
	}
}


export default Addgoods


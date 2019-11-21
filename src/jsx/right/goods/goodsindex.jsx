import React from 'react'

import '@src/css/right/goods/goodsindex.css'

class Gsindex extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			gs_index_list:[
				"http://img5.imgtn.bdimg.com/it/u=3639672230,2887125259&fm=26&gp=0.jpg",
				"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1363604059,503347371&fm=26&gp=0.jpg",
				"http://img5.imgtn.bdimg.com/it/u=4004794639,559935944&fm=26&gp=0.jpg",
				"http://img4.imgtn.bdimg.com/it/u=2101426210,4125564718&fm=26&gp=0.jpg",
				"http://img1.imgtn.bdimg.com/it/u=3005862202,112459197&fm=26&gp=0.jpg",
				"http://img3.imgtn.bdimg.com/it/u=4212109401,3483547324&fm=26&gp=0.jpg",
				"http://img4.imgtn.bdimg.com/it/u=2039473044,3426514214&fm=11&gp=0.jpg"
			],
			
		}
	}
	
	
	
	render(){
	const gs_index_item_mp = this.state.gs_index_list.map((item,index)=>{
		return (
			<div className="sdd" key={index}>
				<img src={item} alt=""/>
			</div>
		)
	})
		return(
		<div className="gsindex">
			<div className="gsindex-title">
				头部写什么我还没想好
			</div>
			<div className="gsindex-content">
				{gs_index_item_mp}
			</div>
		</div>
		)
	}
}

export default Gsindex
import {ax} from './httprequest.js'

// let obj = {}

const getleftlist = function(){
	return ax({
		methods:'GET',
		url:'/api/main-left.json'
	})
}

const getgoodstorelist = function(){
	return ax({
		methods:'GET',
		url:"/api/goodsstore.json"
	})
}


export {
	getleftlist,getgoodstorelist
}
// export default obj;
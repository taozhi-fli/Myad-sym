import ax from './httpreq.js'

const getleftlist = function(){
	return ax({
		methods:'GET',
		url:'/api/mainleft/v8'
	})
}

const getgoodstorelist = function(){
	return ax({
		methods:'GET',
		url:"/api/goods/store"
	})
}

export {getleftlist,getgoodstorelist}
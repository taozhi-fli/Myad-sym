import {ax} from './httprequest.js'

// let obj = {}

const getleftlist = function(){
	
	return ax({
		methods:'GET',
		url:'/api/main-left.json'
	})

}

export {
	getleftlist
}
// export default obj;
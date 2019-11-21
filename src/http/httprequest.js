import axios from 'axios'


// const htpobj = {}
// 
// htpobj.mainleft = function(){
// 	$.get('/api/main-left.json').then(data=>{
// 		return data;
// 	}).catch(err=>{
// 		return err;
// 	})
// }
// 
// 
// 
//
 export function ax(config){
	 const inst = axios.create({
		 // baseURL : 'http://localhost:8000/',
		 baseURL :process.env.BASE_API,
		 timeout:5000,
		 withCredentials: true
	 })
	 
	 	inst.interceptors.request.use(config => {
	 		return config
	 	},err =>{
	 		console.log('err')
	 	});
		
	 	inst.interceptors.response.use(res =>{
	 		return res.data
	 	},err =>{
	 		console.log('err')
	 	})
		
	 	return inst(config)
 }



// export default htpobj;
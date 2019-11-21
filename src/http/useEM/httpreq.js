import axios from 'axios'

function ax(config){
	let ins = axios.create({
		baseURL:process.env.BASE_API
		
	})
	
	ins.interceptors.request.use(data=>data,err=>'err')
	
	ins.interceptors.response.use(res=>res.data,err=>'err')
	
	return ins(config)
}


export default ax
import { createStore } from 'redux'

const reducer = function(state = [],action){
	console.log(789)
	if(action.type === 'LOGIN'){
		// store.setState(Action(action))
		let flag = state.some((i)=>{
			return i.type === 'LOGIN'
		})
		if(flag) return ;
		return [...state,action]
	}
}

function Action(action){
	return action
}

const store = createStore(reducer)

store.subscribe(()=>{
	// console.log(store.getState());
	// console.log(window.history)
	window.location.href = "http://localhost:3000/?#/"
	// window.history.pushState({},'http://localhost:3000/?#/')
})

export default store;
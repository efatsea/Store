//Library Code

function createStore(reducer) {
  //create a function that creates store objects
	let state     //the state of the store 
	let listeners = [] //array
  //a function to get the state 
	const getState = () => state

  //function that push the data fron subscribe in the listeners
	const subscribe = (listener) =>{
		listeners.push(listener)
		return() => {
			listeners=listeners.filter((l) => l!== listener)
		}
	}

	//function to update the state. 
	const dispatch = (action) =>{
		state = reducer(state,action)
		listeners.forEach((listener)=>listener())
	}


  // when createStore is invoked, it will return an object back that invoke the getState method
	return{
		getState,
		subscribe,
		dispatch,
	}

 
}

//App Code

//reduce fuction and also a pure function, tales as arguments the current 
//state and the action and return the state.
function todos(state=[],action){
	if (action.type === 'ADD_TODO') {
		return state.concat([action.todo])
	}
	return state
}


const store = createStore(todos)
store.subscribe(()=>{
	console.log('The new state is:',store.getState())
})


store.dispatch({
	type: 'ADD_TODO',
	todo:{
		id:0,
		name:'Learn Redux',
		complete:false
	}
})


//reduce fuction and also a pure function, tales as arguments the current 
//state and the action and return the state.
function todos(state=[],action){
	if (action.type === 'ADD_TODO') {
		return state.concat([action.todo])
	}
	return state
}

function createStore () {
  //create a function that creates store objects
	let state     //the state of the store 
	let listeners = [] //array
  //a function to get the state
	const getState = () => state

  //function that push the data fron subscribe in the listeners
	const subscribe = (listener) =>{
		listeners.push(listener)
		return() => {
			listeners=listeners.filter((l) = > l!== listener)
		}
	}

  // when createStore is invoked, it will return an object back that invoke the getState method
	return{
		getState,
		subscribe
	}
}

const store = createStore()
store.subscribe(()=>{
	console.log('The new state is:',store.getState())
})

const unsubscribe = store.subscribe(() =>{
	console.log('The store changed')
})
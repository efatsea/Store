function createStore () {
  //create a function that creates store objects
	let state     //the state of the store 

  //a function to get the state
	const getState = () => state

  // when createSore is invoked, it will return an object back that invoke the getState method
	return{
		getState
	}
}
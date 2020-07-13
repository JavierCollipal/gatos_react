//Function from redux docs, remember to comment it
const createStoreReducer = (initialState, actionHandlers) => {
	//declaracion de un reducer
	return function reducer(state = initialState, action) {
		//investigar que pasa aca, ya que esto termina ejecutando las actions
		if (actionHandlers.hasOwnProperty(action.type)) {
			const newState = actionHandlers[action.type](state, action);
			if (newState !== state) {
				return newState;
			}
			return state;
		}
		//si no se le pasa un action al reducer, con esto simulamos el default de un switch
		else return initialState;
	};
};

export default createStoreReducer;

// base de redux funcionalidad basica de mi redux
const createStore = (reducer, initialState) => {
  let state = initialState; //eventualmente mi state tiene que cambiar.
  let updater = () => {};
  const getState = () => state; //devuelve mi estado inicial

  const dispatch = (action) => {
    // State es igual a la devolución de lo que hace mi reducer
    state = reducer(state, action);
    updater();
  };
  const subscribe = (listener) => {
    updater = listener;
  };
  return {
    getState,
    dispatch,
    subscribe,
  };
};

function combineReducers() {}

export { createStore, combineReducers };

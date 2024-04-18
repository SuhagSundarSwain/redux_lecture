const redux = require("redux");

const INITIAL_VALUE = { counter: 0 };

const reducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    store.counter += 1;
  } else if (action.type === "DECREMENT") {
    store.counter -= 1;
  } else if (action.type === "ADD") {
    store.counter += action.payload;
  }
  return store;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};
store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", payload: 7 });
store.dispatch({ type: "DECREMENT" });

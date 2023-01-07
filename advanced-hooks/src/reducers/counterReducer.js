const initialState = 0;
const CounterReducer = (state, action) => {
if(action.type === "INCREMENT"){
 state = state + 1;
}else if(action.type === "DECREMENT"){
 state = state - 1;
} else {
  throw new Error("No action available");
}
  return state;
};
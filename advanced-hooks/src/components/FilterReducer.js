import "./FilterReducer.module.css";
import { useReducer } from "react";

const initialState = [
  {
    id: 1,
    task: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    done: false,
  },
  {
    id: 2,
    task: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    done: false,
  },
  {
    id: 3,
    task: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    done: true,
  },
];
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "Remove":
      return state.filter((item) => item.id !== action.payload);
    case "Toggle":
      return state.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};
function FilterReducer() {
  useReducer(reducer, initialState);
  return <div></div>;
}

export default FilterReducer;

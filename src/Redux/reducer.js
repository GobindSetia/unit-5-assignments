import { ADD_COUNT } from "./action";
import { SUB_COUNT } from "./action";
import { ADD_TODO } from "./action";

// const initState = {
//   count: 0,
//   todo: [],
// };
export const reducer = (store, { type, payload }) => {
    console.log(store);
  switch (type) {
    case ADD_COUNT:
      return { ...store, count: store.count + payload };
    case SUB_COUNT:
      return { ...store, count: store.count - payload };

    //TODOS:
    case ADD_TODO:
      return { ...store, todo: [...store.todo, payload] };
    default:
      return store;
  }
};

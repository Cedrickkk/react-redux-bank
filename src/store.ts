import { combineReducers, createStore } from "redux";
import { accountReducer } from "./slices/accountSlice";
import { createCustomer, customerReducer } from "./slices/customerSlice";

const root = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(root);

store.dispatch(createCustomer({ fullname: "Test", nationalId: "0000" }));

console.log(store.getState());

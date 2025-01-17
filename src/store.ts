import { createStore } from "redux";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

type State = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

enum ActionType {
  SET_ACCOUNT_DEPOSIT = "account/deposit",
  SET_ACCOUNT_WITHDRAW = "account/withdraw",
  SET_ACCOUNT_REQUEST_LOAN = "account/requestLoan",
  SET_ACCOUNT_PAY_LOAN = "account/payLoan",
}

type DepositPayload = {
  amount: number;
};

type WithdrawPayload = {
  amount: number;
};

type RequestLoanPayload = {
  amount: number;
  purpose: string;
};

type PayLoanPayload = {
  amount: number;
};

type Action =
  | { type: ActionType.SET_ACCOUNT_DEPOSIT; payload: DepositPayload }
  | { type: ActionType.SET_ACCOUNT_WITHDRAW; payload: WithdrawPayload }
  | {
      type: ActionType.SET_ACCOUNT_REQUEST_LOAN;
      payload: RequestLoanPayload;
    }
  | { type: ActionType.SET_ACCOUNT_PAY_LOAN; payload: PayLoanPayload };

const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_ACCOUNT_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };
    case ActionType.SET_ACCOUNT_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };
    case ActionType.SET_ACCOUNT_REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case ActionType.SET_ACCOUNT_PAY_LOAN:
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

store.dispatch({
  type: ActionType.SET_ACCOUNT_DEPOSIT,
  payload: { amount: 5000 },
});

console.log(store.getState());

store.dispatch({
  type: ActionType.SET_ACCOUNT_REQUEST_LOAN,
  payload: { amount: 2000, purpose: "Learning purpose" },
});

console.log(store.getState());

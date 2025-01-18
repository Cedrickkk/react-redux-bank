import { Reducer } from "redux";

const initialStateAccount: Readonly<AccountState> = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

export type AccountState = {
  balance: number;
  loan: number;
  loanPurpose: string;
};

enum AccountActionType {
  DEPOSIT = "account/deposit",
  WITHDRAW = "account/withdraw",
  REQUEST_LOAN = "account/requestLoan",
  PAY_LOAN = "account/payLoan",
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

type AccountAction =
  | { type: AccountActionType.DEPOSIT; payload: DepositPayload }
  | { type: AccountActionType.WITHDRAW; payload: WithdrawPayload }
  | { type: AccountActionType.REQUEST_LOAN; payload: RequestLoanPayload }
  | { type: AccountActionType.PAY_LOAN; payload: PayLoanPayload };

export const accountReducer: Reducer<AccountState, AccountAction> = (
  state: AccountState = initialStateAccount,
  action: AccountAction
): AccountState => {
  switch (action.type) {
    case AccountActionType.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload.amount,
      };
    case AccountActionType.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };
    case AccountActionType.REQUEST_LOAN:
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case AccountActionType.PAY_LOAN:
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

// Action Creators
export const deposit = ({ amount }: DepositPayload): AccountAction => ({
  type: AccountActionType.DEPOSIT,
  payload: { amount },
});

export const withdraw = ({ amount }: DepositPayload): AccountAction => ({
  type: AccountActionType.WITHDRAW,
  payload: { amount },
});

export const requestLoan = ({
  amount,
  purpose,
}: RequestLoanPayload): AccountAction => ({
  type: AccountActionType.REQUEST_LOAN,
  payload: { amount, purpose },
});

export const payLoan = ({ amount }: PayLoanPayload): AccountAction => ({
  type: AccountActionType.PAY_LOAN,
  payload: { amount },
});

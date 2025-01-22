import { RootState } from "@/store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const CURRENCY_CONVERTER_API = "https://api.frankfurter.app/latest";

export type AccountState = {
  balance: number;
  loan: number;
  loanPurpose: string;
  isLoading: boolean;
};

type Currency = "USD" | "EUR" | "GBP" | "JPY" | "AUD";

type ConvertedValue = {
  amount: number;
  base: Currency;
  date: string;
  rates: Record<Currency, number>;
};

const initialState: AccountState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit: (state, action: PayloadAction<{ amount: number }>) => {
      state.balance += action.payload.amount;
      state.isLoading = false;
    },
    withdraw: (state, action: PayloadAction<{ amount: number }>) => {
      state.balance -= action.payload.amount;
    },
    requestLoan: (
      state,
      action: PayloadAction<{ amount: number; purpose: string }>,
    ) => {
      if (state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    payLoan: (state) => {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(convertCurrency.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        convertCurrency.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.balance += action.payload;
          state.isLoading = false;
        },
      );
  },
});

export const convertCurrency = createAsyncThunk(
  "account/convertCurrency",
  async (
    { amount, currency }: { amount: number; currency: string },
    thunkAPI,
  ) => {
    if (currency === "USD") thunkAPI.dispatch(deposit({ amount }));

    const response = await fetch(
      `${CURRENCY_CONVERTER_API}?amount=${amount}&from=${currency}&to=USD`,
    );

    const data: ConvertedValue = await response.json();
    const convertedAmount = data.rates.USD;
    return convertedAmount;
  },
);

export const { deposit, withdraw, requestLoan, payLoan } = accountSlice.actions;
export const accountSelector = (state: RootState) => state.account;
export default accountSlice.reducer;

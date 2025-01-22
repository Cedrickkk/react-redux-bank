import { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CustomerState = {
  fullname: string;
  nationalId: string;
  createdAt?: string;
};

const initialState: CustomerState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create: (
      state,
      action: PayloadAction<{
        fullname: string;
        nationalId: string;
      }>,
    ) => {
      state.fullname = action.payload.fullname;
      state.nationalId = action.payload.nationalId;
      state.createdAt = new Date().toISOString();
    },
    update: (state, action: PayloadAction<{ fullname: string }>) => {
      state.fullname = action.payload.fullname;
    },
  },
});

export const { create, update } = customerSlice.actions;
export const customerSelector = (state: RootState) => state.customer;
export default customerSlice.reducer;

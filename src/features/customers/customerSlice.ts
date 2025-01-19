import { Reducer } from "redux";

type CustomerState = {
  fullname: string;
  nationalId: string;
  createdAt?: string;
};

type CreateCustomerPayload = {
  fullname: string;
  nationalId: string;
  createdAt?: string;
};

type UpdateCustomerPayload = {
  fullname: string;
  nationalId?: string;
};

enum CustomerActionType {
  CREATE = "customer/create",
  UPDATE = "customer/update",
}

type CustomerAction =
  | {
      type: CustomerActionType.CREATE;
      payload: CreateCustomerPayload;
    }
  | {
      type: CustomerActionType.UPDATE;
      payload: UpdateCustomerPayload;
    };

const initialStateCustomer: Readonly<CustomerState> = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

const customerReducer: Reducer<CustomerState, CustomerAction> = (
  state: CustomerState = initialStateCustomer,
  action: CustomerAction
): CustomerState => {
  switch (action.type) {
    case CustomerActionType.CREATE:
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case CustomerActionType.UPDATE:
      return {
        ...state,
        fullname: action.payload.fullname,
      };
    default:
      return state;
  }
};

export const createCustomer = ({
  fullname,
  nationalId,
}: CreateCustomerPayload): CustomerAction => {
  return {
    type: CustomerActionType.CREATE,
    payload: { fullname, nationalId, createdAt: new Date().toISOString() },
  };
};

export const updateCustomer = ({
  fullname,
}: UpdateCustomerPayload): CustomerAction => {
  return {
    type: CustomerActionType.UPDATE,
    payload: { fullname },
  };
};

export default customerReducer;

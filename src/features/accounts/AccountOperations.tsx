import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useState } from "react";
import {
  accountSelector,
  convertCurrency,
  payLoan,
  requestLoan,
  withdraw,
} from "./accountSlice";
import Deposit from "./Deposit";
import Loan from "./Loan";
import PayLoan from "./PayLoan";
import Withdraw from "./Withdraw";

export default function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<number>();
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>();
  const [loanAmount, setLoanAmount] = useState<number>();
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("");

  const { loan } = useAppSelector(accountSelector);

  const dispatch = useAppDispatch();

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(convertCurrency({ amount: depositAmount, currency }));
    setDepositAmount(undefined);
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw({ amount: withdrawalAmount }));
    setWithdrawalAmount(undefined);
  };

  const handleRequestLoan = () => {
    if (!loanAmount) return;
    dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }));
    setLoanAmount(0);
    setLoanPurpose("");
  };

  const handlePayLoan = () => {
    dispatch(payLoan());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Deposit
        currency={currency}
        depositAmount={depositAmount}
        setCurrency={setCurrency}
        setDepositAmount={setDepositAmount}
        handleDeposit={handleDeposit}
      />

      <Withdraw
        withdrawalAmount={withdrawalAmount}
        setWithdrawalAmount={setWithdrawalAmount}
        handleWithdrawal={handleWithdrawal}
      />

      <Loan
        loanAmount={loanAmount}
        setLoanAmount={setLoanAmount}
        loanPurpose={loanPurpose}
        setLoanPurpose={setLoanPurpose}
        handleRequestLoan={handleRequestLoan}
      />

      {loan > 0 && <PayLoan handlePayLoan={handlePayLoan} />}
    </form>
  );
}

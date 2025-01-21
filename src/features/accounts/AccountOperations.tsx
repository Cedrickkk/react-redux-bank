import { RootState } from "@/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, requestLoan, withdraw } from "./accountSlice";
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

  const { loan } = useSelector((state: RootState) => state.account);

  const dispatch = useDispatch();

  const handleDeposit = () => {
    if (!depositAmount) return;
    dispatch(deposit({ amount: depositAmount }));
    setDepositAmount(undefined);
  };

  const handleWithdrawal = () => {
    if (!withdrawalAmount) return;
    dispatch(withdraw({ amount: withdrawalAmount }));
  };

  const handleLoan = () => {
    if (!loanAmount) return;
    dispatch(requestLoan({ amount: loanAmount, purpose: loanPurpose }));
    setLoanAmount(undefined);
    setLoanPurpose("");
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
        handleLoan={handleLoan}
      />

      {loan > 0 && <PayLoan />}
    </form>
  );
}

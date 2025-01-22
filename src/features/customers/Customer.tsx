import { useAppSelector } from "@/hooks/store";
import { accountSelector } from "../accounts/accountSlice";
import { customerSelector } from "./customerSlice";
import AccountOperations from "../accounts/AccountOperations";
import { formatCurrency } from "@/utils";
import { useMemo } from "react";

export default function Customer() {
  const { fullname } = useAppSelector(customerSelector);
  const { balance } = useAppSelector(accountSelector);

  const formattedBalance = useMemo(() => formatCurrency(balance), [balance]);

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="scroll-m-20 text-2xl font-medium tracking-tight">
            Welcome,
            <span className="me-1 ms-1 font-bold">{`${fullname.toUpperCase()} 👋`}</span>
          </h3>
          <p>
            <span className="text-xs font-semibold uppercase text-muted-foreground">
              Your Balance
            </span>
            <span className="block text-xl font-bold text-black">
              {formattedBalance}
            </span>
          </p>
        </div>
        <p className="text-lg text-muted-foreground">Your account operations</p>
      </div>
      <AccountOperations />
    </div>
  );
}

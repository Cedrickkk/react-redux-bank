import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function PayLoan() {
  const { loan } = useSelector((state: RootState) => state.account);
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-full">
        <Label htmlFor="pay_loan">
          Pay back: <span className="text-lg text-red-500">${loan}</span>
        </Label>
        <Input id="pay_loan" type="number" />
      </div>
      <Button variant="secondary" className="self-end uppercase">
        Pay Loan
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type WithdrawProps = {
  withdrawalAmount: number | undefined;
  setWithdrawalAmount: (amount: number) => void;
  handleWithdrawal: () => void;
};

export default function Withdraw({
  withdrawalAmount,
  setWithdrawalAmount,
  handleWithdrawal,
}: WithdrawProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-full">
        <Label htmlFor="withdraw">Withdraw</Label>
        <Input
          id="withdraw"
          type="number"
          value={withdrawalAmount !== undefined ? withdrawalAmount : ""}
          onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
        />
      </div>
      <Button
        variant="secondary"
        className="self-end uppercase"
        onClickCapture={handleWithdrawal}
      >
        Withdraw
      </Button>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DepositProps = {
  depositAmount: number | undefined;
  setDepositAmount: (amount: number) => void;
  currency: string;
  setCurrency: (currency: string) => void;
  handleDeposit: () => void;
};

export default function Deposit({
  depositAmount,
  setDepositAmount,
  currency,
  setCurrency,
  handleDeposit,
}: DepositProps) {
  return (
    <div className="flex w-full items-center justify-between gap-2">
      <div className="w-1/2">
        <Label htmlFor="deposit">Deposit</Label>
        <Input
          id="deposit"
          type="number"
          value={depositAmount !== undefined ? depositAmount : ""}
          onChange={(e) => setDepositAmount(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2">
        <Label htmlFor="currency">Currency</Label>
        <Select
          value={currency}
          onValueChange={(currency) => setCurrency(currency)}
        >
          <SelectTrigger id="currency">
            <SelectValue placeholder="Select a currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Currency</SelectLabel>
              <SelectItem value="USD">US Dollar</SelectItem>
              <SelectItem value="EUR">Euro</SelectItem>
              <SelectItem value="GBP">British Pound</SelectItem>
              <SelectItem value="JPY">Japanese Yen</SelectItem>
              <SelectItem value="AUD">Australian Dollar</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button
        variant="secondary"
        className="self-end uppercase"
        onClick={handleDeposit}
      >
        Deposit
      </Button>
    </div>
  );
}

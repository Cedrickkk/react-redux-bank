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
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Customer() {
  const { fullname } = useSelector((store: RootState) => store.customer);

  return (
    <>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        Welcome 👋, {fullname}
      </h3>
      <p className="text-lg text-muted-foreground">Your account operations</p>
      <form action="" className="flex flex-col gap-2">
        <div className="flex items-center w-full gap-2 justify-between">
          <div className="w-1/2">
            <Label htmlFor="deposit">Deposit</Label>
            <Input id="deposit" />
          </div>
          <div className="w-1/2">
            <Label htmlFor="currency">Currency</Label>
            <Select>
              <SelectTrigger>
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
          <Button variant="secondary" className="self-end uppercase">
            Deposit
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <Label htmlFor="withdraw">Withdraw</Label>
            <Input id="withdraw" />
          </div>
          <Button variant="secondary" className="self-end uppercase">
            Withdraw
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <Label htmlFor="request_loan">Request Loan</Label>
            <Input id="request_loan" placeholder="Loan amount" />
          </div>
          <Button variant="secondary" className="self-end uppercase">
            Request
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="w-full">
            <Label htmlFor="pay_loan">Pay back</Label>
            <Input id="pay_loan" />
          </div>
          <Button variant="secondary" className="self-end uppercase">
            Pay Loan
          </Button>
        </div>
      </form>
    </>
  );
}

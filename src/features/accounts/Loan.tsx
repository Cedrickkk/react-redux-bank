import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

type LoanProps = {
  loanAmount: number | undefined;
  setLoanAmount: (amount: number) => void;
  loanPurpose: string;
  setLoanPurpose: (purpose: string) => void;
  handleLoan: () => void;
};

export default function Loan({
  loanAmount,
  setLoanAmount,
  loanPurpose,
  setLoanPurpose,
  handleLoan,
}: LoanProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="w-full">
        <Label htmlFor="request_loan">Request Loan</Label>
        <Input
          id="request_loan"
          type="number"
          value={loanAmount !== undefined ? loanAmount : ""}
          onChange={(e) => setLoanAmount(Number(e.target.value))}
        />
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="self-end uppercase">
            Request
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Loan</DialogTitle>
            <DialogDescription>
              Please provide the purpose of the loan and click request when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="loanPurpose">Purpose</Label>
            <Textarea
              id="loanPurpose"
              value={loanPurpose}
              onChange={(e) => setLoanPurpose(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" onClick={handleLoan}>
                Request
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

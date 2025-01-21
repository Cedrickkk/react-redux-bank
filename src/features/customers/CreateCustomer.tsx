import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

export default function CreateCustomer() {
  const [fullname, setFullname] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!fullname || !nationalId) return;
    dispatch(createCustomer({ fullname, nationalId }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Create New Customer</CardTitle>
        <CardDescription>
          Please fill in the details below to create a new customer.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Full name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="national_id">National ID</Label>
              <Input
                id="national_id"
                placeholder="National ID"
                value={nationalId}
                onChange={(e) => setNationalId(e.target.value)}
              />
            </div>
            <Button>Create</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

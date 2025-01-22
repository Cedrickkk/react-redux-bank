import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import { customerSelector } from "./features/customers/customerSlice";
import { useAppSelector } from "./hooks/store";

function App() {
  const { fullname } = useAppSelector(customerSelector);

  if (!fullname) {
    return (
      <div className="container mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-9">
        <Header />
        <CreateCustomer />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-4 md:px-6">
      <div className="container mx-auto flex min-h-screen max-w-lg flex-col justify-center gap-9">
        <Header />
      </div>
      <div className="flex min-h-screen max-w-lg flex-col justify-center gap-3">
        <Customer />
      </div>
    </div>
  );
}

export default App;

import { useSelector } from "react-redux";
import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import { RootState } from "./store";

function App() {
  const { fullname } = useSelector((state: RootState) => state.customer);

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

import Header from "./components/Header";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  return (
    <div className="grid grid-cols-2 md:px-6 gap-x-4">
      <div className="container mx-auto flex flex-col min-h-screen justify-center gap-9 max-w-lg">
        <Header />
        <CreateCustomer />
      </div>
      <div className="min-h-screen flex justify-center max-w-lg flex-col gap-3">
        <Customer />
      </div>
    </div>
  );
}

export default App;

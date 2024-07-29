import Partners from "./pages/Partners";
import Sponsor from "./pages/Sponsor";
import "./App.css";
import PricingTable from "./pages/PricingTable";
import Cards from "./pages/Cards";
const App = () => {
  return (
    <div className="bg-white flex flex-col gap-[50px]">
      <Sponsor />
      <Partners />
      <PricingTable />
      <Cards />
    </div>
  );
};

export default App;

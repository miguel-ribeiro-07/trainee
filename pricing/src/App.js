
import Header from "./components/Header";
import PersText from "./components/PersText";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="PricingPage">
      <Header/>
      <PersText/>
      <div className="pricing-cards">
          <Pricing
          title={"1 Month"}
          price={"R$15,99"}
          />
          <Pricing
          title={"3 Months"}
          price={"R$40,99"}
          />
          <Pricing
          title={"6 Months"}
          price={"R$60,99"}
          />
          <Pricing
          title={"1 Year"}
          price={"R$93,99"}
          />
      </div>
    </div>
  );
}

export default App;

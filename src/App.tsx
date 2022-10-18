import "./App.css";
import { ReactNode } from "react";
import Tabs from "./components/ui/Tabs/Tabs";
import Tab from "./components/ui/Tabs/Tab";
import { Products } from "./components/ui/Products";

interface TabList {
  id: Number;
  label: String;
  disabled: Boolean;
  component: ReactNode;
}

const TabList: TabList[] = [
  {
    id: 1,
    label: "Product",
    disabled: false,
    component: <Products />,
  },
  {
    id: 2,
    label: "Addresses",
    disabled: true,
    component: null,
  },
  {
    id: 3,
    label: "Overview",
    disabled: true,
    component: null,
  },
];

function App() {
  return (
    <div className="App">
      <h2 className="page-heading" role="heading">Create Demand</h2>
      <div className="page-subheading">
        Search the product you need here. Use tags to find any alternative.
      </div>
      <Tabs>
        {TabList.map(({ label, component, disabled, id }) => {
          return (
            <Tab label={label} key={id} disabled={disabled}>
              {component}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default App;

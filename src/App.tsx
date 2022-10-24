import { observer } from "mobx-react-lite";
import {TabList} from '../data/tabData';
import Tabs from "./components/ui/Tabs/Tabs";
import Tab from "./components/ui/Tabs/Tab";
import { Products } from "./components/ui/Products";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App" style={{ width: "70%" }}>
      <h2 className="page-heading" role="heading">Create Demand</h2>
      <div className="page-subheading">
        Search the product you need here. Use tags to find any alternative.
      </div>
      <Tabs>
        {TabList.map(({ label, disabled, id }, index) => {
          return (
            <Tab label={label} key={id} disabled={disabled} index={index} activeTab={label}>
              {(label === "Product") && <Products />}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  )
}

export default observer(App);

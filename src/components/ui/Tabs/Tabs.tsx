import { FC, ReactNode, useState } from "react";
import Tab from "./Tab";
import "./Tabs.css";

interface TabProps {
  props: {
    label: string;
    disabled: boolean;
    children: ReactNode;
  };
}

interface IProps {
  children: Array<TabProps>;
}

const Tabs: FC<IProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const onClickTabItem = (label: String) => {
    setActiveTab(label);
  };

  return (
    <div className="tabs">
      <ol className="tab-list">
        {children.map((child, index) => {
          const { label, disabled } = child.props;

          return (
            <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              index={index}
              disabled={disabled}
              onClick={() => !disabled && onClickTabItem(label)}
            />
          );
        })}
      </ol>
      <div className="tab-content">
        {children.map((child) => {
          return child.props.label === activeTab ? child.props.children : null;
        })}
      </div>
    </div>
  );
};

export default Tabs;

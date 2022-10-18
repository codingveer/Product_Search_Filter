import { MouseEventHandler } from "react";

interface IProps {
  activeTab: string;
  label: string;
  index: number;
  disabled: boolean;
  onClick: MouseEventHandler<HTMLLIElement>;
}

const Tab: React.FC<IProps> = ({
  activeTab,
  label,
  onClick,
  index,
  disabled,
}) => {
  let className = "tab-list-item";

  if (activeTab === label) {
    className += " tab-list-active";
  }
  if (disabled) {
    className += " tab-list-disabled";
  }

  return (
    <li className={className} onClick={onClick}>
      {`${index + 1} ${label}`}
    </li>
  );
};

export default Tab;

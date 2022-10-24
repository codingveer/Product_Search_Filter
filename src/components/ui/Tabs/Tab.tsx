
interface IProps {
  activeTab: string;
  label: string;
  index: number;
  disabled: boolean;
  children?: any;
  onClick?: (param: any) => void;
}

const Tab: React.FC<IProps> = ({
  activeTab,
  label,
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
    <li className={className} data-testid={label} >
      {`${index + 1} ${label}`}
    </li>
  );
};

export default Tab;

import { memo } from "react";
import Checkbox from "../checkbox/Checkbox";
import "./PageItem.css";

const PageItem = ({ label, checked, setSelectedPages }) => {
  const handleCheckboxChange = () => {
    if (label === "All pages") {
      return setSelectedPages((prevSelectedPages) => {
        const allSelected = Object.values(prevSelectedPages).every(Boolean);
        const newSelectedPages = Object.keys(prevSelectedPages).reduce(
          (acc, page) => {
            acc[page] = !allSelected;
            return acc;
          },
          {}
        );
        return newSelectedPages;
      });
    }
    setSelectedPages((prevPages) => ({
      ...prevPages,
      [label]: !prevPages[label],
    }));
  };
  return (
    <div className="page-item">
      <span className="item-label">{label}</span>
      <Checkbox checked={checked} onChange={handleCheckboxChange} />
    </div>
  );
};

export default memo(PageItem);

import { memo } from "react";
import "./Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className={`custom-checkbox ${checked ? "checked" : ""}`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark"></span>
    </label>
  );
};

export default memo(Checkbox);

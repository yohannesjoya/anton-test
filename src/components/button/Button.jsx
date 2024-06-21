import { memo } from "react";
import "./Button.css";

const Button = ({ label, onClick }) => {
  return (
    <button className="custom-button" onClick={onClick}>
      <span>{label}</span>
    </button>
  );
};

export default memo(Button);

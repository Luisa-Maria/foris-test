import { useState } from "react";
import "./input.css";

interface InputProps {
  name: string;
  label: string;
  type: "text" | "password" | "email" | "number";
}

const Input = ({ name, label, type }: InputProps) => {
  const [inputType, setInputType] = useState(type);
  const togglePassword = () => {
    setInputType((prevType) => {
      return prevType === "password" ? "text" : "password";
    });
  };

  return (
    <div className="input-group">
      <label id="inputname" className="input-label">
        {label}
      </label>

      <div className="input-container">
        <input type={inputType} name={name} className="input-field" />
        {type === "password" && (
          <svg
            className="input-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
            onClick={togglePassword}
          >
            <path d="M12 9a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
            <path d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-12c5.35 0 7.42 3.85 7.93 5-.5 1.16-2.58 5-7.93 5s-7.42-3.84-7.93-5c.5-1.16 2.58-5 7.93-5"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Input;

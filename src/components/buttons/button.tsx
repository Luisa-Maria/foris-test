import "./button.css";

interface ButtonProps {
  name: string;
  label: string;
  CustomStyle?: object;
  typeButton?: string;
  action?: () => void;
  disabled?: boolean;
}
const Button = ({
  name,
  label,
  CustomStyle,
  action,
  disabled,
}: ButtonProps) => {
  return (
    <button
      type="submit"
      name={name}
      className="button-style"
      style={CustomStyle}
      onClick={action}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

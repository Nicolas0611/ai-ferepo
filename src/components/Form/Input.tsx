import { InputProps } from "../../interfaces/ComponentInterfaces";
const Input = ({
  name,
  type,
  placeholder,
  isRequired,
  bgColor,
  value,
  handleChange,
}: InputProps) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      id={`input-${name}`}
      onChange={handleChange}
      className={`block w-full p-5 pl-10 text-sm text-white rounded-lg bg-${bgColor}`}
      placeholder={placeholder}
      required={isRequired}
    />
  );
};

export default Input;

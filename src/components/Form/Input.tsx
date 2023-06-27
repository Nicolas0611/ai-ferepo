import { InputProps } from "../../interfaces/ComponentInterfaces";
import { ICONS } from "../../constants/Icons";

const Input = ({
  iconType = "",
  name = "",
  type,
  placeholder,
  isRequired,
  value,
  handleChange,
}: InputProps) => {
  const Icon = ICONS[iconType];
  return (
    <div className="input-search relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon />
      </div>
      <input
        value={value}
        name={name}
        type={type}
        id={`input-${name}`}
        onChange={handleChange}
        className={`block w-full p-5 pl-10 text-sm text-white rounded-lg bg-primary-input`}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};

export default Input;

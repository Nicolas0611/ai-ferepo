import { ICONS } from "../../constants/Icons";
import Button from "../Buttons/Button";
import Input from "./Input";

interface InputSearchProps {
  icon: keyof typeof ICONS;
}

const InputSearch = ({ icon }: InputSearchProps) => {
  const IconComponent = ICONS[icon];
  return (
    <div className="input-search">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <IconComponent />
      </div>
      <Input
        type="input"
        placeholder="Search by article"
        bgColor="primary-input"
      />
      <Button
        style={{ position: "absolute", top: "12%", right: "2%" }}
        type="submit"
        label="Search"
        bgColor="primary-cta"
      />
    </div>
  );
};

export default InputSearch;

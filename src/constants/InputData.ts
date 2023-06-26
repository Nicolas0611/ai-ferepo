import { InputProps } from "../interfaces/ComponentInterfaces";
export const initialInputSearchData = {
  ai: "",
};

export const inputSearchData: InputProps[] = [
  {
    placeholder: "Search for any AI",
    name: "ai",
    type: "text",
    isRequired: false,
    bgColor: "primary-input",
  },
];

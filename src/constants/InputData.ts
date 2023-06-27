import { InputProps } from "../interfaces/ComponentInterfaces";
export const initialInputSearchData = {
  ai: "",
};

export const inputSearchData: InputProps[] = [
  {
    iconType: "search",
    placeholder: "Search for any AI",
    name: "ai",
    type: "text",
    isRequired: false,
  },
];

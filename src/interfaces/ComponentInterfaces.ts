import { FormikHandlers, FormikHelpers } from "formik";
export interface FormProps {
  handleSubmit: <Value = any>(
    values: Value,
    formikHelpers: FormikHelpers<Value>
  ) => void | Promise<any>;
  initialValues: { [key: string]: any };
  inputsData: InputProps[];
  children?: string | JSX.Element | JSX.Element[];
  formClass?: string;
}

export interface IconsProps {
  [key: string]: React.ElementType;
}

export interface InputProps {
  iconType?: string;
  name?: string;
  isRequired?: boolean | undefined;
  type: string | undefined;
  placeholder: string | undefined;
  value?: string | number | readonly string[] | undefined;
  handleChange?: FormikHandlers["handleChange"];
}

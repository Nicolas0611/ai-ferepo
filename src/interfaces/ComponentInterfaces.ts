export interface FormProps {
  handleSubmit: (values: { [key: string]: any }) => void | Promise<any>;
  initialValues: { [key: string]: any };
  inputsData: InputProps[];
  children?: string | JSX.Element | JSX.Element[];
  formClass?: string;
}

export interface InputProps {
  name?: string;
  isRequired?: boolean | undefined;
  type: string | undefined;
  placeholder: string | undefined;
  bgColor: string | undefined;
  value?: string | number | readonly string[] | undefined;
  handleChange?: {
    (e: React.ChangeEvent<any>): void;
    <T = string | React.ChangeEvent<any>>(
      field: T
    ): T extends React.ChangeEvent<any>
      ? void
      : (e: string | React.ChangeEvent<any>) => void;
  };
}

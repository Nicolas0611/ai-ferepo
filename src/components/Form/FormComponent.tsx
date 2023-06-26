import { Formik, Form } from "formik";

import Input from "./Input";
import { FormProps, InputProps } from "../../interfaces/ComponentInterfaces";

const FormComponent = ({
  handleSubmit,
  initialValues,
  inputsData,
  children,
  formClass,
}: FormProps) => {
  return (
    <Formik
      onSubmit={(values) => {
        handleSubmit(values);
      }}
      initialValues={initialValues}
    >
      {({ values, handleChange }) => (
        <Form className={formClass}>
          {inputsData.map((input: InputProps, index) => (
            <Input
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name || ""]}
              bgColor={input.bgColor}
              name={input.name}
              handleChange={handleChange}
            />
          ))}
          {children}
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;

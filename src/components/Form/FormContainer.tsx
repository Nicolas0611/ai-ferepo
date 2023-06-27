import { Formik, Form } from "formik";

import Input from "./Input";
import { FormProps } from "../../interfaces/ComponentInterfaces";

const FormContainer = ({
  handleSubmit,
  initialValues,
  inputsData,
  children,
  formClass,
}: FormProps) => {
  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      {({ values, handleChange }) => (
        <Form className={formClass}>
          {inputsData.map((input, index) => (
            <Input
              iconType={input.iconType}
              key={index}
              type={input.type}
              placeholder={input.placeholder}
              value={values[input.name || ""]}
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

export default FormContainer;

export interface FormAppareanceProps {
  elements: object;
  variables: object;
}

const FormAppareance: FormAppareanceProps = {
  elements: {
    formButtonPrimary: "bg-primary-cta text-primary-text",
    footerActionLink: "text-black hover:text-black",
  },
  variables: {
    colorPrimary: "#74a202",
    colorText: "black",
    colorTextSecondary: "black",
    colorTextOnPrimaryBackground: "black",
  },
};
export { FormAppareance };

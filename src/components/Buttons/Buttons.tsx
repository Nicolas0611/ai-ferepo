import { Link } from "react-router-dom";

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  href?: string;
  label: string;
  bgColor: string;
}
const Buttons = ({ type, href, label, bgColor }: ButtonProps) => {
  return (
    <LinkButtonWrapper href={href}>
      <button
        type={type}
        className={`text-primary-text bg-${bgColor} focus:ring-4 focus:ring-blue-300 font-regular rounded-lg  px-5 py-2.5`}
      >
        {label}
      </button>
    </LinkButtonWrapper>
  );
};

type WrapperArgs = {
  href?: string;
  children?: JSX.Element;
};

const LinkButtonWrapper = ({ href, children }: WrapperArgs) => {
  if (href) return <Link to={href}>{children}</Link>;
  return children;
};

export default Buttons;

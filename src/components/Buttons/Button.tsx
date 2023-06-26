import { Link } from "react-router-dom";

export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  href?: string;
  style?: object;
  label: string;
  bgColor: string;
}
const Button = ({ type, href, label, bgColor, style }: ButtonProps) => {
  return (
    <LinkButtonWrapper href={href}>
      <button
        type={type}
        className={`text-primary-text focus:ring-4 font-regular rounded-lg  px-5 py-2.5 bg-${bgColor}`}
        style={style}
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

export default Button;

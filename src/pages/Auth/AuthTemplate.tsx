import { useNavigate } from "react-router-dom";
import { PATHS } from "../../routes/paths";

type AuthTemplateProps = {
  children: string | JSX.Element | JSX.Element[];
};
const AuthTemplate = ({ children }: AuthTemplateProps) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-background-gray ">
      <img
        className="absolute top-10 left-10 cursor-pointer"
        src="/LogoWhite.svg"
        alt="logo zipper"
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      />
      {children}
    </div>
  );
};

export default AuthTemplate;

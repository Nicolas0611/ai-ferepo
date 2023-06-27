import { SignUp } from "@clerk/clerk-react";
import { PATHS } from "../../routes/paths";
import AuthTemplate from "./AuthTemplate";

const SignUpPage = () => {
  return (
    <AuthTemplate>
      <SignUp
        path={PATHS.SIGNUP}
        redirectUrl={PATHS.HOME}
        afterSignUpUrl={PATHS.HOME}
        signInUrl={PATHS.LOGIN}
      />
    </AuthTemplate>
  );
};

export default SignUpPage;

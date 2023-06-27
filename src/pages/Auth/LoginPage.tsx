import { SignIn as SignInClerk } from "@clerk/clerk-react";
import { PATHS } from "../../routes/paths";
import AuthTemplate from "./AuthTemplate";
const LoginInPage = () => {
  return (
    <AuthTemplate>
      <SignInClerk
        path={PATHS.LOGIN}
        redirectUrl={PATHS.HOME}
        afterSignInUrl={PATHS.HOME}
        signUpUrl={PATHS.SIGNUP}
      />
    </AuthTemplate>
  );
};

export default LoginInPage;

import { SignIn as SignInClerk } from "@clerk/clerk-react";
import { PATHS } from "../../routes/paths";
const LoginInPage = () => {
  return (
    <div>
      <SignInClerk
        path={PATHS.LOGIN}
        redirectUrl={PATHS.HOME}
        afterSignInUrl={PATHS.HOME}
      />
    </div>
  );
};

export default LoginInPage;

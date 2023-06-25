import { SignUp } from "@clerk/clerk-react";
import { PATHS } from "../../routes/paths";

const SignUpPage = () => {
  return (
    <div>
      <SignUp
        path={PATHS.SIGNUP}
        redirectUrl={PATHS.HOME}
        afterSignUpUrl={PATHS.HOME}
      />
    </div>
  );
};

export default SignUpPage;

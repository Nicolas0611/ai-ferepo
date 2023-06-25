import Buttons from "../../Buttons/Buttons";
import { PATHS } from "../../../routes/paths";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
const ButtonsWrapper = () => {
  const { user } = useUser();

  return (
    <div className="flex">
      {user ? (
        <UserButton afterSignOutUrl={PATHS.HOME} />
      ) : (
        <>
          {" "}
          <Buttons
            href={`${PATHS.LOGIN}`}
            label="Login"
            bgColor="transparent"
          />
          <Buttons
            href={`${PATHS.SIGNUP}`}
            label="Sign Up"
            bgColor="primary-cta"
          />
        </>
      )}
    </div>
  );
};

export default ButtonsWrapper;

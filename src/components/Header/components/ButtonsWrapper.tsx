import { PATHS } from "../../../routes/paths";
import { UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/clerk-react";
import Button from "../../Buttons/Button";
const ButtonsWrapper = () => {
  const { user } = useUser();

  return (
    <div className="flex">
      {user ? (
        <UserButton afterSignOutUrl={PATHS.HOME} />
      ) : (
        <>
          <Button href={`${PATHS.LOGIN}`} label="Login" bgColor="transparent" />
          <Button
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

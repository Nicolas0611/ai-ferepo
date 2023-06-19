import Buttons from "../../Buttons/Buttons";
const ButtonsWrapper = () => {
  return (
    <div className="flex">
      <Buttons href="/auth" label="Login" bgColor="transparent" />
      <Buttons href="/auth" label="Sign Up" bgColor="primary-cta" />
    </div>
  );
};

export default ButtonsWrapper;

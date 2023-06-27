import Button from "../Buttons/Button";
import {
  initialInputSearchData,
  inputSearchData,
} from "../../constants/InputData";
import HeaderTitle from "./HeaderTitle";
import Decoration from "./Decoration";
import FormContainer from "../Form/FormContainer";

const CtaSection = () => {
  const handleSubmit = (values: any, { resetForm }: any) => {
    console.log(values);
    resetForm();
  };
  return (
    <div className="bg-background-gray relative isolate overflow-hidden w-full px-6 pt-16 py-24 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0 lg:py-0">
      {/*  DECORATION LIGHT YELLOW TOP */}
      <Decoration color={"#DCFD88"} />
      <div className="w-full flex flex-col items-center gap-10 mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center lg:px-16">
        {/*  START HERO H1 */}
        <HeaderTitle text="Platform that brings together  a wide collection of AIs and Plugins." />
        <div className="relative lg:w-1/2 md:w-full sm:w-full">
          {/*   START FORM COMPONENT */}
          <FormContainer
            handleSubmit={handleSubmit}
            initialValues={initialInputSearchData}
            inputsData={inputSearchData}
          >
            <Button
              style={{ position: "absolute", top: "12%", right: "2%" }}
              type="submit"
              label="Search"
              bgColor="primary-cta"
            />
          </FormContainer>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;

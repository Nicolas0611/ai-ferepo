import InputSearch from "../Form/InputSearch";
import FormComponent from "../Form/FormComponent";
import Button from "../Buttons/Button";
import {
  initialInputSearchData,
  inputSearchData,
} from "../../constants/InputData";

const CtaSection = () => {
  return (
    <div className="bg-background-gray relative isolate overflow-hidden w-full px-6 pt-16 py-24 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:px-24 lg:pt-0 lg:py-0">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 bottom-1/2 -z-10 h-[64rem] w-[64rem] translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#DCFD88" />
            <stop offset={1} stopColor="#DCFD88" />
          </radialGradient>
        </defs>
      </svg>
      <div className="w-full flex flex-col items-center gap-10 mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-center lg:px-16">
        <h1 className="text-4xl tracking-tight text-white sm:text-4xl lg:text-5xl">
          Platform that{" "}
          <span className="font-semibold text-primary-cta">
            brings together
          </span>{" "}
          a wide collection of AIs and Plugins.
        </h1>
        <FormComponent
          handleSubmit={(values: object) => {
            console.log(values);
          }}
          initialValues={initialInputSearchData}
          inputsData={inputSearchData}
        >
          <Button type="submit" label="Search" bgColor="primary-cta" />
        </FormComponent>
        <form className="lg:w-1/2 md:w-full sm:w-full">
          <div className="relative">
            <InputSearch icon="search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CtaSection;

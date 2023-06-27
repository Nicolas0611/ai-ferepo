type HeaderTitleProps = {
  text: string;
};

const HeaderTitle = ({ text }: HeaderTitleProps) => {
  return (
    <h1 className="text-4xl tracking-tight text-white sm:text-4xl lg:text-5xl">
      {text}
    </h1>
  );
};

export default HeaderTitle;

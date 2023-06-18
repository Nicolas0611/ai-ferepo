import Header from "../components/Header/Header";
import LinkWrapper from "../components/Header/components/LinkWrapper";
import ButtonsWrapper from "../components/Header/components/ButtonsWrapper";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";
const NavigationLayout = () => {
  return (
    <>
      <Header>
        <LinkWrapper />
        <ButtonsWrapper />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavigationLayout;

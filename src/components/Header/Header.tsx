import { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <header className="w-full container h-20 flex items-center gap-20">
      <img src="/LogoDark.svg" alt="logo zipper" />
      <nav className="flex items-center w-full justify-between">{children}</nav>
    </header>
  );
};

export default Header;

import { Link } from "react-router-dom";
import { PATHS } from "../../../routes/paths";

type LinkProps = {
  href: string;
  label: string;
};

const Links: LinkProps[] = [
  { href: PATHS.HOME, label: "Home" },
  { href: PATHS.BLOG, label: "Blog" },
  { href: PATHS.ABOUT, label: "About is" },
  { href: PATHS.COMMUNITY, label: "Community" },
];
const LinkWrapper = () => {
  return (
    <ul className="flex items-center gap-8 ">
      {Links.map((link) => (
        <Link key={link.href} to={link.href}>
          {link.label}
        </Link>
      ))}
    </ul>
  );
};

export default LinkWrapper;

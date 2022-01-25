import { useRouter } from "next/router";
import Link from "next/link";

const NavLink = ({ href, exact, children, className = "", ...props }) => {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  const underlineStyles = isActive ? "underline" : "";

  return (
    <Link href={href}>
      <a className={`${className} ${underlineStyles}`} {...props}>
        {children}
      </a>
    </Link>
  );
};
export default NavLink;

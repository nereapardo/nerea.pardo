import NextLink from "next/link";

const Link = ({
  href,
  type = "unstyled",
  external = false,
  children,
  className = "",
}) => {
  let anchorProps = {};
  let nextLinkProps = {};
  if (external) {
    anchorProps = { target: "_blank", rel: "noopener noreferrer" };
    nextLinkProps = { passHref: true };
  }
  if (type === "unstyled") {
    return (
      <NextLink href={href} {...nextLinkProps}>
        <a {...anchorProps} className={className}>
          {children}
        </a>
      </NextLink>
    );
  }
  const styles =
    type === "primary"
      ? "bg-neon text-stone-900 font-bold"
      : "border-2 border-neon font-light text-neon";
  return (
    <>
      <NextLink href={href} {...nextLinkProps}>
        <a
          {...anchorProps}
          className={`rounded-3xl py-2 px-4 text-lg text-center inline-flex items-center ${styles} ${className}`}
        >
          {children}
        </a>
      </NextLink>
    </>
  );
};
export default Link;

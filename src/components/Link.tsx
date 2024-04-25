import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";

type LinkProps = NextLinkProps & {
  children: React.ReactNode;
};

export default function Link({ children, ...props }: LinkProps) {

  return (
    <NextLink
      className="relative text-blue-600 after:bg-blue-600 after:absolute after:h-px after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
      {...props}
    >
      {children}
    </NextLink>
  )
}
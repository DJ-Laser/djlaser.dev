import { AnchorHTMLAttributes } from "react";

export function A(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a className="text-cyan-500 hover:text-cyan-600" {...props}></a>;
}

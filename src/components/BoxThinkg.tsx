import { PropsWithChildren } from "react";

export interface BoxThinkgProps {
  header: string;
}

export function BoxThinkg({
  header,
  children,
}: PropsWithChildren<BoxThinkgProps>) {
  return (
    <div className="p-4 my-8 flex flex-col flex-nowrap bg-neutral-900 rounded-lg">
      <h1 className="text-4xl">{header}</h1>
      <hr className="my-4 text-neutral-300" />
      <div>{children}</div>
    </div>
  );
}

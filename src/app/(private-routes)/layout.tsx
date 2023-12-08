import { PropsWithChildren } from "react";

export default function PrivateLayout(props: PropsWithChildren) {
  return (
    <>
      <div>
        Private layout
        {props.children}
      </div>
    </>
  );
}

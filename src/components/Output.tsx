import { OutputType } from "@/types";
import { MutableRefObject, ReactNode } from "react";

type Props = {
  title: string;
  value: MutableRefObject<OutputType>;
  measure: ReactNode;
};

export default function CardOutput(props: Props) {
  return (
    <div className="flex items-center gap-2">
      <h3 className="m-0 font-semibold">{props.title}</h3>
      <p className="m-0">{props.value.current}</p>
      {props.measure}
    </div>
  );
}

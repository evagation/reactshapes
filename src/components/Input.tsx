import { Dispatch } from "react";
import { handleOnChange } from ".";
import { InputType } from "@/types";

type Props = {
  value: InputType;
  setValue: Dispatch<InputType>;
  title: string;
  measure: string;
};

export default function CardInput(props: Props) {
  return (
    <div className="flex gap-2 items-center">
      <label className="font-medium">{props.title}</label>
      <input
        type="number"
        value={props.value}
        onChange={(e) => handleOnChange(e, props.setValue)}
        name="edge"
        className="h-5 px-3 w-full proportional-nums leading-none border-solid border-2 border-primary rounded-md bg-transparent font-sans font-medium text-sm text-tertiary focus:outline-none focus:border-tertiary"
      />
      <label className="font-medium">{props.measure}</label>
    </div>
  );
}

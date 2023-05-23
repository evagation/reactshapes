import { InputType } from "@/types";
import { ChangeEvent, Dispatch } from "react";

export default function handleOnChange(event: ChangeEvent<HTMLInputElement>, dispatch: Dispatch<InputType>) {
  if (event.target.value !== "")
    return dispatch(parseFloat(event.target.value));

  return dispatch("");
}

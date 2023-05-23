import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Diamond() {
  const [d1, setD1] = useState<InputType>("");
  const [d2, setD2] = useState<InputType>("");
  const [a, setA] = useState<InputType>("");

  const area = useRef<OutputType>();
  const perimeter = useRef<OutputType>();

  area.current = undefined;
  perimeter.current = undefined;

  if (typeof d1 !== "string" && typeof d2 !== "string") {
    area.current = (d1 * d2) / 2;
  }

  if (typeof a !== "string") {
    perimeter.current = 4 * a;
  }

  return (
    <Card
      title="Rombo"
      img="img/shapes/Diamond.png"
      input={
        <>
          <CardInput
            title="D1"
            value={d1}
            setValue={setD1}
            measure="cm"
          />
          <CardInput
            title="D2"
            value={d2}
            setValue={setD2}
            measure="cm"
          />
          <CardInput
            title="a"
            value={a}
            setValue={setA}
            measure="cm"
          />
        </>
      }
      output={
        <>
          <CardOutput
            title="Area"
            value={area}
            measure={
              <label>
                cm<sup>2</sup>
              </label>
            }
          />
          <CardOutput
            title="Perimetro"
            value={perimeter}
            measure={<label>cm</label>}
          />
        </>
      }
    />
  );
}

import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Circle() {
  const [r, setR] = useState<InputType>("");

  const area = useRef<OutputType>();
  const perimeter = useRef<OutputType>();

  area.current = undefined;
  perimeter.current = undefined;

  if (typeof r !== "string") {
    area.current = Math.PI * Math.pow(r, 2);
    perimeter.current = 2 * Math.PI * r;
  }

  return (
    <Card
      title="Circulo"
      img="img/shapes/Circle.png"
      input={<CardInput value={r} setValue={setR} title="Radio" measure="cm" />}
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

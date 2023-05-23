import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Square() {
  const [side, setSide] = useState<InputType>("");
  const area = useRef<OutputType>();
  const perimeter = useRef<OutputType>();
  const diagonal = useRef<OutputType>();

  area.current = undefined;
  perimeter.current = undefined;
  diagonal.current = undefined;

  if (typeof side !== "string") {
    area.current = Math.pow(side, 2);
    perimeter.current = side * 4;
    diagonal.current = side * Math.SQRT2;
  }

  return (
    <Card
      title="Cuadrado"
      img="img/shapes/Square.png"
      input={
        <CardInput value={side} setValue={setSide} title="Lado" measure="cm" />
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
            title="Diagonal"
            value={diagonal}
            measure={<label>cm</label>}
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

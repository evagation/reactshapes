import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Rectangle() {
  const [base, setBase] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");

  const area = useRef<OutputType>();
  const perimeter = useRef<OutputType>();
  const diagonal = useRef<OutputType>();

  area.current = undefined;
  perimeter.current = undefined;
  diagonal.current = undefined;

  if (typeof base !== "string" && typeof height !== "string") {
    area.current = base * height;
    perimeter.current = (2 * base) + (2 * height);
    diagonal.current = Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
  }

  return (
    <Card
      title="Rectangulo"
      img="img/shapes/Rectangle.png"
      input={
        <>
          <CardInput
            title="Base"
            value={base}
            setValue={setBase}
            measure="cm"
          />
          <CardInput
            title="Altura"
            value={height}
            setValue={setHeight}
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
          <CardOutput
            title="Diagonal"
            value={diagonal}
            measure={<label>cm</label>}
          />
        </>
      }
    />
  );
}

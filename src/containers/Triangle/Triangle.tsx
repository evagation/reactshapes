import { useRef, useState } from "react";
import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";

export default function Triangle() {
  const [base, setBase] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");

  const area = useRef<OutputType>();

  area.current = undefined;

  if (typeof base !== "string" && typeof height !== "string") {
    area.current = (base * height) / 2;
  }

  return (
    <Card
      title="Triangulo"
      img="img/shapes/Triangle.png"
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
        <CardOutput
          title="Area"
          value={area}
          measure={
            <label>
              cm<sup>2</sup>
            </label>
          }
        />
      }
    />
  );
}

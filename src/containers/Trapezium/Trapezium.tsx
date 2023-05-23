import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Trapezium() {
  const [b, setb] = useState<InputType>("");
  const [B, setB] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");

  const area = useRef<OutputType>();

  area.current = undefined;

  if (typeof b !== "string" && typeof B !== "string" && typeof height !== "string") {
    area.current = ((B * b) * height) / 2;
  }

  return (
    <Card
      title="Rectangulo"
      img="img/shapes/Trapezium.png"
      input={
        <>
          <CardInput
            title="B"
            value={B}
            setValue={setB}
            measure="cm"
          />
          <CardInput
            title="b"
            value={b}
            setValue={setb}
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
        </>
      }
    />
  );
}

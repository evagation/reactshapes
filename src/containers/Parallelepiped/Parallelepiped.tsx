import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Parallelepiped() {
  const [base, setBase] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");
  const [depth, setDepth] = useState<InputType>("");

  const area = useRef<OutputType>();
  const volume = useRef<OutputType>();

  area.current = undefined;
  volume.current = undefined;

  if (typeof base !== "string" && typeof height !== "string" && typeof depth !== "string") {
    area.current = 2 * ((base * depth) + (base * height) + (depth * height));
    volume.current = base * height * depth;
  }

  return (
    <Card
      title="Paralelepipedo"
      img="img/shapes/Paralelipiped.png"
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
          <CardInput
            title="Profundidad"
            value={depth}
            setValue={setDepth}
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
            title="Volumen"
            value={volume}
            measure={<label>cm<sup>3</sup></label>}
          />
        </>
      }
    />
  );
}

import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Cilinder() {
  const [r, setR] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");

  const area = useRef<OutputType>();
  const volume = useRef<OutputType>();

  area.current = undefined;
  volume.current = undefined;

  if (typeof r !== "string" && typeof height !== "string") {
    area.current = 2 * Math.PI * r * (r * height);
    volume.current = (Math.PI * Math.pow(r, 2)) * height;
  }

  return (
    <Card
      title="Cilindro"
      img="img/shapes/Cilinder.png"
      input={
        <>
          <CardInput
            title="Radio"
            value={r}
            setValue={setR}
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
            title="Volumen"
            value={volume}
            measure={<label>cm<sup>3</sup></label>}
          />
        </>
      }
    />
  );
}

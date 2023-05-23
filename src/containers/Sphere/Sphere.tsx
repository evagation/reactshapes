import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Sphere() {
  const [r, setR] = useState<InputType>("");

  const area = useRef<OutputType>();
  const volume = useRef<OutputType>();

  area.current = undefined;
  volume.current = undefined;

  if (typeof r !== "string") {
    area.current = 4 * Math.PI * Math.pow(r, 2);
    volume.current = (4/3) * Math.PI * Math.pow(r, 3);
  }

  return (
    <Card
      title="Esfera"
      img="img/shapes/Sphere.png"
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
            title="Volumen"
            value={volume}
            measure={<label>cm<sup>3</sup></label>}
          />
        </>
      }
    />
  );
}

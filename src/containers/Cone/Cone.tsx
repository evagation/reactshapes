import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";
import { useRef, useState } from "react";

export default function Cone() {
  const [r, setR] = useState<InputType>("");
  const [height, setHeight] = useState<InputType>("");

  const area = useRef<OutputType>();
  const volume = useRef<OutputType>();
  const g = useRef<OutputType>();

  area.current = undefined;
  volume.current = undefined;
  g.current = undefined;

  if (typeof r !== "string" && typeof height !== "string") {
    g.current = Math.sqrt(Math.pow(r, 2) + Math.pow(height, 2));
    area.current = Math.PI * r * (r + g.current);
    volume.current = (1 / 3) * Math.PI * Math.pow(r, 2) * height;
  }

  return (
    <Card
      title="Cono"
      img="img/shapes/Cone.png"
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
            title="Volume"
            value={volume}
            measure={
              <label>
                cm<sup>3</sup>
              </label>
            }
          />
          <CardOutput
            title="g"
            value={g}
            measure={<label>cm</label>}
          />
        </>
      }
    />
  );
}

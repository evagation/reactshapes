import { useRef, useState } from "react";
import { Card, CardInput, CardOutput } from "@/components";
import { InputType, OutputType } from "@/types";

export default function Cube() {
  const [edge, setEdge] = useState<InputType>("");
  const area = useRef<OutputType>();
  const volume = useRef<OutputType>();

  area.current = undefined;
  volume.current = undefined;

  if (typeof edge !== "string") {
    area.current = 6 * Math.pow(edge, 2);
    volume.current = Math.pow(edge, 3);
  }

  return (
    <Card
      title="Cubo"
      img="img/shapes/Cube.png"
      input={
        <CardInput
          value={edge}
          setValue={setEdge}
          title="Arista"
          measure="cm"
        />
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
            measure={
              <label>
                cm<sup>3</sup>
              </label>
            }
          />
        </>
      }
    />
  );
}

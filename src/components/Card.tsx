import { ReactNode } from "react";

type Props = {
  // Url de la imagen.
  img: string;
  // Los componentes necesarios para ingresar datos.
  input: ReactNode;
  // Los componentes para visualizar resultados.
  output: ReactNode;
  // Titulo para poner en la cabeza de la tarjeta.
  title: string;
};

export default function Card(props: Props) {
  return (
    <section className="flex p-5 gap-4 rounded-lg bg-secondary">
      <div>
        <img src={props.img} alt={props.title} />
      </div>
      <div className="">
        <h2 className="m-0 font-semibold">{props.title}</h2>
        <div className="flex max-w-full flex-col sm:flex-row mt-5 gap-4">
          <div className="max-w-full flex flex-col gap-2">
            {props.input}
          </div>
          <div className="max-w-full flex flex-col gap-2">
            {props.output}
          </div>
        </div>
      </div>
    </section>
  );
}

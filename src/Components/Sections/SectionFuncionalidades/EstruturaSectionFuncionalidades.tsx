import { ReactElement } from "react";

interface EstruturaSectionFuncionalidadesProps {
  texto: ReactElement;
  title: string;
  image: string;
  invert?: boolean;
}

export default function EstruturaSectionFuncionalidades({
  texto,
  title,
  image,
  invert
}: EstruturaSectionFuncionalidadesProps) {
  return (
    <div>
      <h1
        className={`text-xl md:text-3xl font-bold pb-4 
        text-center  
        `}
      >
        {title}
      </h1>
      <div
        className="flex
        flex-col
        gap-10
        lg:flex-row
        justify-around
        items-center
        pt-5
        lg:text-[1rem]
        2xl:text-[1.2rem]"
      >
        <div className={`lg:w-[45%] ${invert && "lg:order-2"}`}>
          <img
            src={image}
            alt={`Um print do sistema da tela de ${title}`}
            className="w-full"
          />
        </div>

        <div className={`text-justify lg:max-w-[45%]`}>{texto}</div>
      </div>
    </div>
  );
}

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
    <div
      className="flex
      flex-col
      gap-10
      lg:flex-row 
      even:justify-end
      pt-5"
    >
      <div className={`lg:w-[25rem] ${invert && "lg:order-2"}`}>
        <img src={image} alt="" className="w-full" />
      </div>

      <div className={`text-justify lg:max-w-[45%]`}>
        <h1
          className={`text-xl md:text-3xl font-bold pb-4  ${
            invert && "lg:text-right"
          }`}
        >
          {title}
        </h1>
        {texto}
      </div>
    </div>
  );
}

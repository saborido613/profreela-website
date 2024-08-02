import { ReactElement } from "react"

interface EstruturaSectionFuncionalidadesProps {
    texto: ReactElement;
    title: string;
    image: string;
}

export default function EstruturaSectionFuncionalidades({ texto, title, image }: EstruturaSectionFuncionalidadesProps) {
  return (

    <div
      className="flex
      flex-col
      gap-10
      lg:flex-row            
      pt-5"
    >
      <div className="lg:w-[50%]">
        <img
          src={image}
          alt=""
          className="w-full"
        />
      </div>

      <div className="text-justify lg:w-[50%]">
        <h1 className="text-xl md:text-3xl font-bold pb-4">{title}</h1>
        {texto}
      </div>
    </div>
    
  )
}

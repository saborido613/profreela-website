import ImagemCadastro from "/images/form-img.png";

export interface SectionCadastroProps {
  id: string;
}

export default function SectionCadastro(props: SectionCadastroProps) {
  return (
    <section
           id={props.id} 
           className="flex
            flex-col
            md:flex-row
            justify-center
            items-center
            max-w-[75vw]
            w-full
            md:container
            mx-auto
            pt-10
            gap-24"
        >
          <img src={ImagemCadastro} alt="" className="md:h-[60vh] lg:h-[70vh]" />
          <div className="flex flex-col gap-14">

            <h1 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Pré-Cadastro</h1>
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Nome Completo"
                className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
                />
              <input
                type="text"
                placeholder="Username"
                className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
                />
              <input
                type="text"
                placeholder="Senha"
                className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
                />
              <input
                type="text"
                placeholder="Seu melhor email"
                className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
                />
              <input
                type="text"
                placeholder="Telefone"
                className="border border-purple-950 p-2 rounded-lg focus:outline-none md:w-[20vw]"
                />
              <button className="bg-purple-700 text-white font-bold py-2 px-8 rounded-lg">
                Enviar
              </button>
            </form>

          </div>
    </section>
  );
}

import SectionComponent from "../../shared/component/Section/SectionComponent";
import FotoSobre from "/images/Scrum board-bro.png";

export interface SectionProps {
  id: string;
  title: string;
}

function SectionSobre(props: SectionProps) {
  return (
    <SectionComponent
      id={props.id}
      title={props.title}
      children={
        <div
          className="flex
        flex-col
        md:flex-row
        justify-center
        items-center
        max-w-[75vw]
        w-full
        md:container
        mx-auto
        pt-10"
        >
          <img
            src={FotoSobre}
            alt="Uma mulher na esquuerda apontando para um quadro kanbam e um homem na direita falando sobre a tarefa que ela está apontando. Na imagem possui um vaso no lado esquerdo da mulher e um armário na frente do homem. Ambos abaixo do quadro kanbam"
            className="md:h-[60vh] lg:h-[70vh]"
          />
          <div>
            <p className="my-4 text-justify">
              Nós entendemos que um dos grandes desafios dos freelancers é a
              organização das demandas para cumprir os prazos prometidos aos
              clientes. Muitas vezes, nos deparamos com a incerteza sobre o
              tempo necessário para concluir um projeto, perguntando: “Será que
              vai dar tempo?”.
            </p>
            <p className="my-4 text-justify">
              É por isso que estamos aqui, para ajudar. Com o WayFreela, você
              pode organizar suas tarefas e estabelecer prazos mais realistas
              para seus clientes. Além disso, nossa plataforma permite o envio
              direto de itens para revisão, facilitando a comunicação e o
              feedback.
            </p>
            <p className="my-4 text-justify">
              Mas não paramos por aí. Sabemos que a organização financeira é tão
              importante quanto a organização dos projetos. Por isso, o
              WayFreela oferece um módulo financeiro que proporciona
              previsibilidade nas suas entradas e saídas, ajudando você a manter
              suas finanças em ordem.
            </p>
          </div>
        </div>
      }
    />
  );
}

export default SectionSobre;

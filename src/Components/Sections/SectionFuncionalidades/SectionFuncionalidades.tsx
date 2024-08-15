import SectionComponent from "../../shared/component/Section/SectionComponent";
import EstruturaSectionFuncionalidades from "./EstruturaSectionFuncionalidades";
import FotoFuncionalidadesDashboard from "/images/image 2.png";
import FotoFuncionalidadesCronograma from "/images/image 3.png";
import FotoFuncionalidadesFinanceiro from "/images/image 2 (1).png";

export interface SectionProps {
  id: string;
  title: string;
}

function SectionFuncionalidades(props: SectionProps) {
  return (
    <SectionComponent
      id={props.id}
      title={props.title}
      children={
        <div
          className="flex
      flex-col
      items-center
      max-w-[75vw]
      w-full
      md:container
      mx-auto
      pt-10
      gap-10"
        >
          <EstruturaSectionFuncionalidades
            image={FotoFuncionalidadesDashboard}
            title="Dashboard"
            texto={
              <>
                <p>
                  Tenha tudo que precisa em um único lugar. No nosso dashboard,
                  você encontra:
                </p>
                <ul className="list-disc pl-10">
                  <li>
                    Entradas Previstas do Mês: Visualize rapidamente suas
                    receitas esperadas e planeje suas finanças.
                  </li>
                  <li>
                    Projetos Ativos: Monitore o progresso de todos os seus
                    projetos em andamento.
                  </li>
                  <li>
                    Clientes Cadastrados: Acesse facilmente informações de todos
                    os seus clientes.
                  </li>
                </ul>
                <p>
                  Com a dashboard do ProFreela, você gerencia seu negócio de
                  forma eficiente e organizada. Tudo ao seu alcance, em um só
                  lugar.
                </p>
              </>
            }
          />

          <EstruturaSectionFuncionalidades
            image={FotoFuncionalidadesCronograma}
            title="Cronograma"
            invert
            texto={
              <>
                <p>
                  Aproveite o poder do nosso cronograma para uma gestão de
                  projetos mais eficiente. Com base nas tarefas já cadastradas.
                </p>
                <p>Destaques do Nosso Cronograma:</p>
                <ul className="list-disc pl-10">
                  <li>
                    Visão Integrada: Veja todas as tarefas em um formato de
                    cronograma, destacando prazos e marcos importantes. Ideal
                    para uma visão estratégica e detalhada do progresso do
                    projeto.
                  </li>
                  <li>
                    Baseado em Dados Reais: Utilize as informações das tarefas
                    já cadastradas para criar um cronograma preciso, evitando a
                    necessidade de reentrada de dados e garantindo um
                    planejamento realista.
                  </li>
                  <li>
                    Comunicação Clara com Clientes: Forneça aos seus clientes
                    uma visão transparente do andamento do projeto, destacando o
                    progresso e os próximos passos com uma interface visualmente
                    atraente.
                  </li>
                </ul>
              </>
            }
          />

          <EstruturaSectionFuncionalidades
            image={FotoFuncionalidadesFinanceiro}
            title="Financeiro"
            texto={
              <>
                <p>
                  Tenha tudo que precisa em um único lugar. No nosso dashboard,
                  você encontra:
                </p>
                <ul className="list-disc pl-10">
                  <li>
                    Entradas Previstas do Mês: Visualize rapidamente suas
                    receitas esperadas e planeje suas finanças.
                  </li>
                  <li>
                    Projetos Ativos: Monitore o progresso de todos os seus
                    projetos em andamento.
                  </li>
                  <li>
                    Clientes Cadastrados: Acesse facilmente informações de todos
                    os seus clientes.
                  </li>
                </ul>
                <p>
                  Com a dashboard do ProFreela, você gerencia seu negócio de
                  forma eficiente e organizada. Tudo ao seu alcance, em um só
                  lugar.
                </p>
              </>
            }
          />
        </div>
      }
    />
  );
}

export default SectionFuncionalidades;

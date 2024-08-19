import Footer from "../Footer/Footer";
import Nav from "../Nav/nav";

export default function TermosCondicoes() {
  return (
    <div>
      <Nav />

      <div className="bg-termos-politicas h-[17vh] lg:h-[23vh] pt-20">
        <h1 className="text-2xl md:text-4xl xl:text-7xl text-white font-bold justify-center flex">
          WayFreela - Termos e condições
        </h1>
      </div>

      <div className="py-20 max-w-[75vw] md:container mx-auto text-justify flex flex-col gap-1">
        <h2 className="text-2xl font-bold py-4">1. Termos</h2>
        <p>
          Ao acessar ao site{" "}
          <a href="https://www.wayfreela.com" className="text-purple-800">
            Wayfreela
          </a>
          , concorda em cumprir estes termos de serviço, todas as leis e
          regulamentos aplicáveis e concorda que é responsável pelo cumprimento
          de todas as leis locais aplicáveis. Se você não concordar com algum
          desses termos, está proibido de usar ou acessar este site. Os
          materiais contidos neste site são protegidos pelas leis de direitos
          autorais e marcas comerciais aplicáveis.
        </p>
        <h2 className="text-2xl font-bold py-4">2. Uso de Licença</h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Wayfreela , apenas para
          visualização transitória pessoal e não comercial. Esta é a concessão
          de uma licença, não uma transferência de título e, sob esta licença,
          você não pode:&nbsp;
        </p>
        <ol>
          <li>modificar ou copiar os materiais;&nbsp;</li>
          <li>
            usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);&nbsp;
          </li>
          <li>
            tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Wayfreela;&nbsp;
          </li>
          <li>
            remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou&nbsp;
          </li>
          <li>
            transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </li>
        </ol>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Wayfreela a qualquer
          momento. Ao encerrar a visualização desses materiais ou após o término
          desta licença, você deve apagar todos os materiais baixados em sua
          posse, seja em formato eletrónico ou impresso.
        </p>
        <h2 className="text-2xl font-bold py-4">
          3. Isenção de responsabilidade
        </h2>
        <ol className="list-decimal pl-10">
          <li>
            Os materiais no site da Wayfreela são fornecidos 'como estão'.
            Wayfreela não oferece garantias, expressas ou implícitas, e, por
            este meio, isenta e nega todas as outras garantias, incluindo, sem
            limitação, garantias implícitas ou condições de comercialização,
            adequação a um fim específico ou não violação de propriedade
            intelectual ou outra violação de direitos.
          </li>
          <li>
            Além disso, o Wayfreela não garante ou faz qualquer representação
            relativa à precisão, aos resultados prováveis ou à confiabilidade do
            uso dos materiais em seu site ou de outra forma relacionado a esses
            materiais ou em sites vinculados a este site.
          </li>
        </ol>
        <h2 className="text-2xl font-bold py-4">4. Limitações</h2>
        <p>
          Em nenhum caso o Wayfreela ou seus fornecedores serão responsáveis por
          quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
          lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
          incapacidade de usar os materiais em Wayfreela, mesmo que Wayfreela ou
          um representante autorizado da Wayfreela tenha sido notificado
          oralmente ou por escrito da possibilidade de tais danos. Como algumas
          jurisdições não permitem limitações em garantias implícitas, ou
          limitações de responsabilidade por danos conseqüentes ou incidentais,
          essas limitações podem não se aplicar a você.
        </p>
        <h2 className="text-2xl font-bold py-4">5. Precisão dos materiais</h2>
        <p>
          Os materiais exibidos no site da Wayfreela podem incluir erros
          técnicos, tipográficos ou fotográficos. Wayfreela não garante que
          qualquer material em seu site seja preciso, completo ou atual.
          Wayfreela pode fazer alterações nos materiais contidos em seu site a
          qualquer momento, sem aviso prévio. No entanto, Wayfreela não se
          compromete a atualizar os materiais.
        </p>
        <h2 className="text-2xl font-bold py-4">6. Links</h2>
        <p>
          O Wayfreela não analisou todos os sites vinculados ao seu site e não é
          responsável pelo conteúdo de nenhum site vinculado. A inclusão de
          qualquer link não implica endosso por Wayfreela do site. O uso de
          qualquer site vinculado é por conta e risco do usuário.
        </p>
        <p>
          <br />
        </p>
        <h3 className="text-2xl font-semibold py-4">Modificações</h3>
        <p>
          O Wayfreela pode revisar estes termos de serviço do site a qualquer
          momento, sem aviso prévio. Ao usar este site, você concorda em ficar
          vinculado à versão atual desses termos de serviço.
        </p>
        <h3 className="text-2xl font-semibold py-4">Lei aplicável</h3>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Wayfreela e você se submete irrevogavelmente à jurisdição
          exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </div>

      <Footer id="contato" />
    </div>
  );
}

import Footer from "../Footer/Footer";
import Nav from "../Nav/nav";

export default function PoliticaPrivacidade() {
  return (
    <div>
      <Nav />

      <div className="bg-termos-politicas h-[17vh] lg:h-[23vh] pt-20">
        <h1 className="text-2xl md:text-4xl xl:text-7xl text-white font-bold justify-center flex">
          WayFreela - Política e privacidade
        </h1>
      </div>

      <div className="py-20 max-w-[75vw] md:container mx-auto text-justify flex flex-col gap-1">
        <p>
          A sua privacidade é importante para nós. É política do Wayfreela
          respeitar a sua privacidade em relação a qualquer informação sua que
          possamos coletar no site{" "}
          <a className="text-purple-800" href="https://www.wayfreela.com">
            Wayfreela
          </a>
          , e outros sites que possuímos e operamos.
        </p>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>
        <p>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas políticas de privacidade.
        </p>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </p>
        <p>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </p>

        <ul className="list-disc pl-10">
          <li>
            <span>
              O serviço Google AdSense que usamos para veicular publicidade usa
              um cookie DoubleClick para veicular anúncios mais relevantes em
              toda a Web e limitar o número de vezes que um determinado anúncio
              é exibido para você.
            </span>
          </li>
          <li>
            <span>
              Para mais informações sobre o Google AdSense, consulte as FAQs
              oficiais sobre privacidade do Google AdSense.
            </span>
          </li>
          <li>
            <span>
              Utilizamos anúncios para compensar os custos de funcionamento
              deste site e fornecer financiamento para futuros desenvolvimentos.
              Os cookies de publicidade comportamental usados por este site
              foram projetados para garantir que você forneça os anúncios mais
              relevantes sempre que possível, rastreando anonimamente seus
              interesses e apresentando coisas semelhantes que possam ser do seu
              interesse.
            </span>
          </li>
          <li>
            <span>
              Vários parceiros anunciam em nosso nome e os cookies de
              rastreamento de afiliados simplesmente nos permitem ver se nossos
              clientes acessaram o site através de um dos sites de nossos
              parceiros, para que possamos creditá-los adequadamente e, quando
              aplicável, permitir que nossos parceiros afiliados ofereçam
              qualquer promoção que pode fornecê-lo para fazer uma compra.
            </span>
          </li>
        </ul>

        <h1 className="text-2xl font-bold py-5">Compromisso do Usuário</h1>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o Wayfreela oferece no site e com caráter enunciativo,
          mas não limitativo:
        </p>
        <ul className="pl-10">
          <li>
            <span>
              A) Não se envolver em atividades que sejam ilegais ou contrárias à
              boa fé a à ordem pública;
            </span>
          </li>
          <li>
            <span>
              B) Não difundir propaganda ou conteúdo de natureza racista,
              xenofóbica,{" "}
            </span>
            <span>
              <a
                className="text-purple-800"
                href="https://betnacionalbrasil.br.com"
              >
                Bet Nacional
              </a>{" "}
              ou azar, qualquer tipo de pornografia ilegal, de apologia ao
              terrorismo ou contra os direitos humanos;
            </span>
          </li>
          <li>
            <span>
              C) Não causar danos aos sistemas físicos (hardwares) e lógicos
              (softwares) do Wayfreela, de seus fornecedores ou terceiros, para
              introduzir ou disseminar vírus informáticos ou quaisquer outros
              sistemas de hardware ou software que sejam capazes de causar danos
              anteriormente mencionados.
            </span>
          </li>
        </ul>
        <h1 className="text-2xl font-bold py-5">Mais informações</h1>
        <p>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>
        <p>Esta política é efetiva a partir de&nbsp;13 August 2024 14:54</p>
      </div>
      <Footer id="contato" />
    </div>
  );
}

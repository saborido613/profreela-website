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
      justify-center
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
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
                quam commodi perspiciatis voluptas eos tempora explicabo, quae
                sapiente adipisci! Laudantium, eaque maxime rem fugit fuga
                eveniet nesciunt tempore ratione laborum! In dignissimos
                possimus sequi quam nemo voluptates, veniam provident voluptatum
                est minus et quod officiis eveniet! Nobis iste eligendi, quos at
                rem quae hic accusantium voluptatum nostrum fugiat, recusandae
                illo libero fugit? Veritatis aut quaerat unde nam dignissimos
                minima consequuntur dolorem doloribus totam voluptate laudantium
                officia perspiciatis accusamus optio iure, repellendus nihil
                architecto voluptatum amet reprehenderit, recusandae similique
                officiis, asperiores illum. Blanditiis nam pariatur labore ullam
                magni temporibus, tempore earum quod nihil reprehenderit ex
                assumenda ipsum ipsam asperiores sapiente iusto cupiditate
                mollitia perferendis libero dolore rerum exercitationem non
                quaerat? Perferendis eos obcaecati consectetur dolore debitis
                inventore omnis, non id quo sunt, maiores exercitationem velit
                quod officia delectus perspiciatis, quidem voluptatum temporibus
                minus veniam voluptatibus magni sapiente possimus. Nemo,
                obcaecati dignissimos.
              </p>
            }
          />

          <EstruturaSectionFuncionalidades
            image={FotoFuncionalidadesCronograma}
            title="Cronograma"
            texto={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam unde dolor maiores hic sit iure, ipsum recusandae
                voluptates corrupti minus consequuntur perferendis qui soluta
                dicta consequatur quia laborum quod. Odit facere deleniti
                molestias. Fugiat iure voluptatem omnis fugit commodi
                laboriosam. Illo assumenda nostrum eum ad suscipit aut impedit
                nisi officia perferendis sit magni, in cumque velit dignissimos
                aliquid, rerum amet reprehenderit tenetur, harum eveniet ullam.
                Aut vitae excepturi, aliquam id modi vel atque nemo maxime
                inventore quis commodi eius quam harum alias magnam distinctio
                quod facilis repudiandae fugiat dolorem molestias tenetur
                voluptatum debitis doloribus! Fugiat quaerat iure at facilis
                voluptatem, voluptates officia maiores vero, obcaecati ratione,
                porro hic nesciunt ut quibusdam temporibus ipsam eius nam
                deserunt exercitationem sequi inventore mollitia quia dolorum?
                Laboriosam consectetur reprehenderit magnam culpa ex quam, unde
                soluta non sint laborum ipsa sequi perferendis. Quis quidem
                suscipit autem non recusandae nesciunt magnam, incidunt, alias
                distinctio animi quo!
              </p>
            }
          />

          <EstruturaSectionFuncionalidades
            image={FotoFuncionalidadesFinanceiro}
            title="Financeiro"
            texto={
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                incidunt, ratione, qui neque recusandae mollitia earum id libero
                nisi ducimus odio ipsum eaque, laborum similique veniam
                repudiandae. Qui ratione dolorem provident inventore eligendi
                quo repellendus earum assumenda quod cupiditate ipsa corrupti
                natus, id fugiat doloribus autem asperiores error quasi,
                quibusdam, debitis placeat? A aperiam, ipsa veniam nulla
                excepturi aliquid labore ipsum sit. Non esse ullam eveniet illum
                quidem atque consequatur architecto illo autem ab! Ut, aut.
                Porro aliquam esse atque. Dolorum dolore odio placeat inventore,
                amet officiis nihil ut necessitatibus facilis, perferendis esse
                omnis ratione obcaecati voluptates, modi illo! Illo eius commodi
                quam mollitia eveniet tempore natus incidunt similique
                molestiae! Ratione cum asperiores cupiditate dicta vel alias et
                animi eius praesentium natus omnis eos consequuntur, maiores
                iusto. Expedita totam, recusandae consequuntur adipisci,
                nesciunt laborum sint, quis corporis quasi facilis hic. Tempora
                explicabo, dolore nihil tempore sequi ipsum voluptate facere
                eum.
              </p>
            }
          />
        </div>
      }
    />
  );
}

export default SectionFuncionalidades;

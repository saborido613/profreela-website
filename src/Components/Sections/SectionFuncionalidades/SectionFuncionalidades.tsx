import SectionComponent from "../../shared/component/Section/SectionComponent";

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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
          vitae numquam commodi tempora, expedita eaque recusandae. Ipsum,
          reprehenderit pariatur quae provident aliquid excepturi libero illum
          voluptatem culpa optio? Sequi fugiat magnam consequatur maiores
          ratione debitis, modi hic consectetur cupiditate quasi animi eaque est
          nihil quis id dignissimos ea ipsum quisquam sapiente impedit pariatur
          illum reiciendis. Expedita eius culpa ab quia repudiandae aliquid
          iusto tempora hic rem! Sit itaque praesentium quod sed dolorum
          dolores, reprehenderit, tempora ipsum inventore aliquid consequuntur
          accusantium in excepturi cum veniam vel adipisci! Accusamus ex velit
          deleniti quidem rerum a. Commodi consectetur eaque dolorum maxime
          error velit, provident inventore nobis nam iste similique blanditiis
          fuga, quis suscipit voluptas tempora numquam. Accusantium nulla non
          officiis laudantium odit iure deleniti saepe cum ad reprehenderit eum
          dignissimos reiciendis, quod culpa vitae iusto porro optio. Laboriosam
          neque repellat deleniti, ipsum ab iusto assumenda vel illo hic,
          officiis temporibus voluptas repellendus dolores.
        </p>
      }
    />
  );
}

export default SectionFuncionalidades;

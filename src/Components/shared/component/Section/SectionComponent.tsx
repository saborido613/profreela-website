import { ReactElement } from "react";
import useSectionRefs from "../../../../hooks/useSectionRefs";

interface SectionComponentProps {
  children: ReactElement;
  id: string;
  title: string;
}

function SectionComponent({ children, id, title }: SectionComponentProps) {
  const { sectionRefs } = useSectionRefs();

  return (
    <section className="flex flex-col" id={id} ref={sectionRefs.current[id]}>
      <div className="flex justify-center w-full pt-8">
        <h1 className="text-5xl text-red-800 font-extrabold">{title}</h1>
      </div>
      {children}
    </section>
  );
}

export default SectionComponent;

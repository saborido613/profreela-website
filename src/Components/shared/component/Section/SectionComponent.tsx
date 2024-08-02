import { ReactElement } from "react";
import useSectionRefs from "../../../../hooks/useSectionRefs";

interface SectionComponentProps {
  children: ReactElement;
  id: string;
  title: string;
  titleJustify?: string;
  
}

function SectionComponent({ children, id, title, titleJustify = "justify-center" }: SectionComponentProps) {
  const { sectionRefs } = useSectionRefs();

  return (
    <section className="flex flex-col max-w-[90vw] mx-auto" id={id} ref={sectionRefs.current[id]}>
      <div className={`flex w-full pt-8 ${titleJustify}`}>
        <h1 className={`text-3xl font-extrabold md:text-4xl lg:text-5xl pt-10`}>{title}</h1>
      </div>
      {children}
    </section>
  );
}

export default SectionComponent;

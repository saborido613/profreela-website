import React, { RefObject, useRef } from "react";
import { Path, PathItem } from "../Components/Nav/Menus/paths";

export interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

function useSectionRefs() {
  const sectionRefs = useRef<SectionRefs>(
    Path.reduce((acc: SectionRefs, value: PathItem) => {
      acc[value.section] = React.createRef();
      return acc;
    }, {})
  );

  return { sectionRefs };
}

export default useSectionRefs;

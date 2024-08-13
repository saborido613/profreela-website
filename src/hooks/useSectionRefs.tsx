import React, { RefObject, useRef } from "react";
import { MenuItem, MenuSection } from "../Components/Nav/Menus/menuSection";

export interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

function useSectionRefs() {
  const sectionRefs = useRef<SectionRefs>(
    MenuSection.reduce((acc: SectionRefs, value: MenuItem) => {
      acc[value.section] = React.createRef();
      return acc;
    }, {})
  );

  return { sectionRefs };
}

export default useSectionRefs;

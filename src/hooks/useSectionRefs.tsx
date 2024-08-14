import React, { RefObject, useRef } from "react";
import { MenuItem, MenuSource } from "../Components/Nav/Menus/menuSection";

export interface SectionRefs {
  [key: string]: RefObject<HTMLElement>;
}

function useSectionRefs() {
  const sectionRefs = useRef<SectionRefs>(
    MenuSource.reduce((acc: SectionRefs, value: MenuItem) => {
      acc[value.source] = React.createRef();
      return acc;
    }, {})
  );

  return { sectionRefs };
}

export default useSectionRefs;

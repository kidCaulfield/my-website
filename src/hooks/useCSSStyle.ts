import {camelCase} from "lodash";
import { useEffect, useState } from "react";

export function useStyleCss(css: string) {
  const [styles, setStyles] = useState({})

  useEffect(() => {
    if (css) {
      setStyles(css.split(";").reduce((acc: object, curr: string) => {
        const [key, val] = curr.trim().split(":");
    
        return !!key ? { ...acc, [camelCase(key)]: val } : acc;
      }, {}))
    }
  })

  return styles;
}

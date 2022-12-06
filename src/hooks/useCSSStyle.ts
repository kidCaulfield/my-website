export function useStyleCss(css): string {
  return css.split(";").reduce((acc, curr) => {
    const [key, val] = curr.trim().split(":");

    return !!key ? { ...acc, [key]: val } : acc;
  }, {});
}

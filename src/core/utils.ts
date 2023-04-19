export const genId = (() => {
  let count = 0;
  return () => {
    return (++count).toString();
  };
})();

export const prefersReducedMotion = (() => {
  // Cache result
  let shouldReduceMotion: boolean | undefined = undefined;

  return () => {
    if (shouldReduceMotion === undefined && typeof window !== "undefined") {
      const mediaQuery = matchMedia("(prefers-reduced-motion: reduce)");
      shouldReduceMotion = !mediaQuery || mediaQuery.matches;
    }
    return shouldReduceMotion;
  };
})();

export const getBackgroundColor = (type: string) => {
  switch (type) {
    case "info":
      return "rgb(2, 136, 209)";
    case "success":
      return "rgb(56, 142, 60)";
    case "error":
      return "rgb(211, 47, 47)";
    case "warning":
      return "rgb(245, 124, 0)";
    default:
      return "#262626";
  }
};

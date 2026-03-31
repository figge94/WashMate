export const useNavigation = () => {
  const links = [
    { to: "/", label: "Hem" },
    { to: "/tvatthjalp", label: "Tvätthjälp" },
    { to: "/program", label: "Program" },
    { to: "/skotsel", label: "Skötsel" },
    { to: "/produktinformation", label: "Produktinfo" },
    { to: "/felsokning", label: "Felsökning" }
  ] as const;

  return { links };
};

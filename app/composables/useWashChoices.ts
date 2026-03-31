export const useWashChoices = () => {
  const choices = [
    {
      id: "vardag",
      title: "Vardagstvätt",
      text: "Vanliga kläder i bomull eller blandmaterial.",
      program: "Express Care",
      reason:
        "Bra val för daglig tvätt när du vill ha något enkelt och ganska snabbt.",
      tips: [
        "Bra för blandad vardagstvätt.",
        "Passar när kläderna inte är kraftigt smutsiga.",
        "Fyll inte maskinen för mycket."
      ]
    },
    {
      id: "bomull",
      title: "Handdukar och bomull",
      text: "T-shirts, handdukar, sängkläder och kraftigare plagg.",
      program: "Cotton",
      reason: "Passar bomullstvätt och lite tåligare textilier.",
      tips: [
        "Bra för handdukar och sängkläder.",
        "Välj rätt temperatur efter plaggen.",
        "Överfyll inte trumman."
      ]
    },
    {
      id: "eco",
      title: "Energisnålt",
      text: "När du vill spara energi vid normal bomullstvätt.",
      program: "Eco 40–60",
      reason: "Bra standardval för bomull med fokus på låg energiförbrukning.",
      tips: [
        "Kan ta längre tid.",
        "Bra för normal vardagstvätt i bomull.",
        "Passar när du inte har bråttom."
      ]
    },
    {
      id: "fint",
      title: "Ömtåliga kläder",
      text: "Tunnare plagg och känsligare material.",
      program: "Delicates",
      reason: "Skonsammare program för ömtåliga textilier.",
      tips: [
        "Tvätta gärna i tvättpåse.",
        "Undvik hög centrifugering om plaggen är känsliga.",
        "Kontrollera tvättråden."
      ]
    },
    {
      id: "ylle",
      title: "Ylle",
      text: "Ylleplagg eller plagg märkta med handtvätt.",
      program: "Wool/Silk",
      reason: "Skonsamt program anpassat för ylle och liknande plagg.",
      tips: [
        "Använd tvättmedel för ylle om du har det.",
        "Tvätta små mängder försiktigt.",
        "Låt gärna plagget plantorka."
      ]
    },
    {
      id: "snabb",
      title: "Snabb tvätt",
      text: "Lätt smutsade plagg som bara behöver fräschas upp.",
      program: "Rapid 30 min",
      reason: "Bra när du vill tvätta snabbt och mängden tvätt är liten.",
      tips: [
        "Passar bäst för lätt smutsad tvätt.",
        "Bra när du vill bli klar snabbt.",
        "Inte bästa valet för kraftigt smutsad tvätt."
      ]
    }
  ] as const;

  return {
    choices
  };
};

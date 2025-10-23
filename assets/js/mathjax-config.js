window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    packages: {'[+]': ['noerrors']},
    macros: {
      inf: "(\\infty,1)",
      C: "\\mathcal{C}",
      Hom: "\\mathrm{Hom}",
      Fun: "\\mathrm{Fun}",
      Mod: "\\mathrm{Mod}",
      Catinf: "\\mathrm{Cat}_{(\\infty,1)}",
      Spc: "Spc",
      Sp: "Sp",
      PSh: "PSh"
      Ind: "Ind",
    }
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};

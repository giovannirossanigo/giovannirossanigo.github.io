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
      Spc: "\\mathcal{S}",
      Catinf: "\\mathrm{Cat}_{(\\infty,1)}"
    }
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};

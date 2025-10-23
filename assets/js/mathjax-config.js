window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    packages: {'[+]': ['noerrors']},
    macros: {
      mc: ["\\mathscr", 1],
      mb: ["\\mathfrak", 1],
        
      inf: "(\\infty,1)",
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

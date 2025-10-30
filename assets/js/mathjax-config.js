window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    packages: {'[+]': ['base','ams', 'bbm', 'noerrors', 'noundefined']},
    macros: {
      mc: ["\\mathscr{#1}", 1],
      mb: ["\\mathbb{#1}", 1],
      inf: "(\\infty,1)",
      op: "op",
      Hom: "\\mathrm{Hom}",
      Fun: "\\mathrm{Fun}",
      Mod: "\\mathrm{Mod}",
      Catinf: "\\mathrm{Cat}_{(\\infty,1)}",
      Spc: "Spc",
      Sp: "Sp",
      PSh: "PSh",
      Shv: "Shv",
      Ind: "Ind",
      Li: "\\mathfrak{L}",
      CS: "\\mathfrak{C}",
      S: "\\mathfrak{S}",
      susp: "\\Sigma",

      yo: "\\text{よ}", 
    },
  },
  svg: { fontCache: 'global' },
  startup: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
};


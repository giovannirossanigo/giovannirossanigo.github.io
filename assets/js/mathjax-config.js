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
      susp: "\\Sigma",

      yo: "\\mathrel{\\text{\\usefont{U}{min}{m}{n}\\symbol{'207}}}", 
      y: "\\yo"
    },
  },
  svg: { fontCache: 'global' },
  startup: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  },
};


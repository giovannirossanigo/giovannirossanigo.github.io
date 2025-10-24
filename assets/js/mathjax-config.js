window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true, 
    packages: {'[+]': ['base','ams', 'noerrors', 'noundefined']},
    macros: {
      mc: ["\\mathscr{#1}", 1],
      mb: ["\\mathbbm{#1}", 1],
      inf: "(\\infty,1)",
      Hom: "\\mathrm{Hom}",
      Fun: "\\mathrm{Fun}",
      Mod: "\\mathrm{Mod}",
      Catinf: "\\mathrm{Cat}_{(\\infty,1)}",
      Spc: "Spc",
      Sp: "Sp",
      PSh: "PSh",
      Ind: "Ind",
      susp: "\\Sigma"
    },
    environments: {
      definition: ['\\textbf{Definition. }\\;\\text{', '}'],
      theorem:    ['\\textbf{Theorem. }\\;\\text{', '}'],
      lemma:      ['\\textbf{Lemma. }\\;\\text{', '}'],
      proof:      ['\\textit{Proof. }\\;\\text{', '}']
    }
  },
  svg: { fontCache: 'global' },

  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};


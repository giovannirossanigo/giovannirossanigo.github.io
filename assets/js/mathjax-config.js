window.MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true, 
    packages: {'[+]': ['base','ams']},
    macros: {
      mc: ["\\mathscr{#1}", 1],
      mb: ["\\mathfrak{#1}", 1],
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
      definition: ['\\begin{array}{l}\\textbf{Definition.}\\;', '\\end{array}'],
      theorem:    ['\\begin{array}{l}\\textbf{Theorem.}\\;', '\\end{array}'],
      lemma:      ['\\begin{array}{l}\\textbf{Lemma.}\\;', '\\end{array}'],
      proof:      ['\\begin{array}{l}\\textit{Proof.}\\;', '\\end{array}']
    }
  },
  svg: { fontCache: 'global' },

  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
  }
};


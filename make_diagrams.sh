#!/bin/bash
# Cartella dei diagrammi TeX
DIAG_DIR="diagrams"
# Cartella di destinazione SVG
OUT_DIR="assets/img/diagrams"

mkdir -p $OUT_DIR

for texfile in $DIAG_DIR/*.tex; do
  base=$(basename "$texfile" .tex)
  echo "Processing $base.tex ..."
  # Compila PDF
  pdflatex -interaction=nonstopmode -output-directory=$DIAG_DIR "$texfile"
  # Converti PDF in SVG
  pdf2svg "$DIAG_DIR/$base.pdf" "$OUT_DIR/$base.svg"
  # Pulisci file temporanei
  rm "$DIAG_DIR/$base.aux" "$DIAG_DIR/$base.log" "$DIAG_DIR/$base.pdf"
done

echo "All diagrams processed and saved in $OUT_DIR"

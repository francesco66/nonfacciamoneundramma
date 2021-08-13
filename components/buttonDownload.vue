<template>
  <div class="dropdown">
    <a class="dropbtn link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white dib" v-on:click="myFunction()">
      <svg class="bg-white-80" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
    </a>
    <div id="myDropdown" class="dropdown-content">
      <a :article="article" v-on:click="onDownloadAsText()">Scarica Txt</a>
      <a v-on:click="onDownloadAsPDF()">Scarica Pdf</a>
    </div>
  </div> 
</template>

<script>
import { saveAs } from "file-saver";
import { jsPDF } from "jspdf";

export default {

  props: {
    article: Object
  },

  methods: {
    /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
    myFunction() {
      document.getElementById("myDropdown").classList.toggle("show");
    },

    onDownloadAsText() {
      document.getElementById("myDropdown").classList.toggle("show");
      //console.log("scarica il file in formato testo");
      var blob = new Blob(["\n" + this.article.autore + "\n\n" + this.article.titolo + "\n\n" + this.article.text], {type: "text/plain;charset=utf-8"});
      saveAs(blob, this.article.path + ".txt");
      //window.print()
    },

    onDownloadAsPDF() {
      document.getElementById("myDropdown").classList.toggle("show");
      //console.log("scarica il file in formato PDF")


      // Creazione del testo (titolo, autore, testo)
      const titolo = this.article.titolo + "\n\n";
      const autore = this.article.autore + "\n\n";
      // ATTENZIONE: non mantiene la formattazione originale!
      // testo con gli a capo sostituiti da spazi
      const testo = this.article.text.replace(/(\r\n|\n|\r)/gm, " ");

      // Il Formato A4 ha le seguenti dimensioni: Millimetri: 210 x 297 mm
      var pageWidth = 210,
        lineHeight = 1.0,
        margin = 20,
        maxLineWidth = pageWidth - margin * 2,
        // fontSize = 22,
        ptsPerInch = 72
        // oneLineHeight = (fontSize * lineHeight * 25.4) / ptsPerInch,
        // text = testo,
        // doc = new jsPDF({
        //   lineHeight: lineHeight
        // })

      var doc = new jsPDF({
          lineHeight: lineHeight
        })

      doc.setLanguage("it-IT")

      // titolo
      var fontSize = 28
      doc.setFont("helvetica", "normal", "normal")
      doc.setFontSize(fontSize)
      var oneLineHeight1 = (fontSize * lineHeight * 25.4) / ptsPerInch
      doc.text(titolo, margin, margin + oneLineHeight1); //, {align: "justify"});

      // autore
      fontSize = 22
      doc.setFont("helvetica", "normal", "normal")
      doc.setFontSize(fontSize)
      var oneLineHeight2 = (fontSize * lineHeight * 25.4) / ptsPerInch
      doc.text(autore, margin, margin + 2 * (oneLineHeight2 + oneLineHeight1)); //, {align: "justify"});


      var altezzaIntestazione = margin + 2 * (oneLineHeight2 + oneLineHeight1);
      console.log("altezza ora a", altezzaIntestazione);

      // Questo solo per il testo
      fontSize = 16
      var oneLineHeight3 = (fontSize * lineHeight * 25.4) / ptsPerInch
      var textLines = doc
        .setFont("helvetica")
        .setFontSize(fontSize)
        .splitTextToSize(testo, maxLineWidth);

      // circa 282 max altezza del testo per pagina
      // considero solo il margine superiore e non quello inferiore
      var maxHeight = 297 - margin;

      // altezza totale del testo (altezza dell'intestazione + array di testo)
      // in mm quindi devo moltiplicare per 25.4
      var textHeight = altezzaIntestazione + (textLines.length * fontSize * lineHeight * 25.4) / ptsPerInch;
      console.log("altezza totale", textHeight);
      console.log("max totale", maxHeight);

      if (textHeight>maxHeight) {
        console.log("il testo supera l'altezza della pagina!")
        var lineH = 1
        for (var i=0; i<textLines.length; i++) {
          var height = margin + altezzaIntestazione + 2 * oneLineHeight3 * lineH;
          if (height>=maxHeight) {
            doc.addPage();
            lineH = 1;
            altezzaIntestazione = 0;
            height = margin + altezzaIntestazione + 2 * oneLineHeight3 * lineH;
          }
          console.log(i, lineH)
          doc.text(textLines[i], margin, height);
          lineH += 1
        }
      } else {
        doc.text(textLines, margin, margin + altezzaIntestazione + 2 * oneLineHeight3); //, {align: "justify"});
      }

      doc.save(this.article.slug + ".pdf");

      /*
      getStringUnitWidth(text, options) → {number}

      Returns a widths of string in a given font, if the font size is set as 1 point.
      In other words, this is "proportional" value. For 1 unit of font size, the length of the string will be that much.
      Multiply by font size to get actual width in points Then divide by 72 to get inches or divide by (72/25.6) to get 'mm' etc.
      */

    }

  }
}

</script>

<style scoped>
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}

</style>
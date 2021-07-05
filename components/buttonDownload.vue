<template>
  <div class="dropdown link grow br3 ba bw1 pa2 mb3 ml3 bg-animate hover-bg-light-purple bg-black-50 white dib">
    <a v-on:click="myFunction()" class="dropbtn">
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

      /*
      var array = this.article.text.split(/\r?\n/);
      for(var i = 0; i < array.length; i++) {
        console.log(array[i].length, array[i]);
      }
      name.replace(/\s/g, '')
      */

      const doc = new jsPDF();
      doc.setFont("Georgia", "normal", 200)

      doc.text(this.article.text, 10, 10);
      doc.save(this.article.slug + ".pdf");
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
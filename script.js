// script.js

document.getElementById("bouton-upload").addEventListener("click", function() {
  document.getElementById("input-fichier").click();
});

document.getElementById("input-fichier").addEventListener("change", function(event) {
  var fichier = event.target.files[0];
  
  if (fichier && fichier.type === "application/pdf") {
    var lecteurPDF = new FileReader();
    
    lecteurPDF.onload = function(e) {
      var pdfURL = e.target.result;
      var pdfHTML = '<embed src="' + pdfURL + '" type="application/pdf" width="100%" height="600px">';
      
      document.getElementById("pdf-container").innerHTML = pdfHTML;
    }
    
    lecteurPDF.readAsDataURL(fichier);
  }
});

function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    var parser, xmlDoc;
    var z;
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        parser = new DOMParser();
        xmlDoc = parser.parseFromString(xhttp.responseText,"text/xml");
        document.getElementById("buscado2").innerHTML = xmlDoc.getElementsByTagName("Query")[0].childNodes[0].nodeValue;
        document.getElementById("title").innerHTML = xmlDoc.getElementsByTagName("Text")[0].childNodes[0].nodeValue;
        document.getElementById("content").innerHTML = xmlDoc.getElementsByTagName("Description")[0].childNodes[0].nodeValue;
        document.getElementById("imagem").innerHTML = xmlDoc.getElementsByTagName("Image")[0].getAttributeNode('source').value;
      }

    };
    xhttp.open("GET", "https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&limit=1&search="+document.getElementById("search").value+"&format=xml", true);
    xhttp.send();
  }
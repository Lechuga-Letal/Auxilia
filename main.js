
function incluirParcial(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

incluirParcial("header-placeholder", "header.html");
incluirParcial("footer-placeholder", "footer.html");


function incluirParcial(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    });
}

incluirParcial("header-placeholder", "Vistas/header.html");
incluirParcial("footer-placeholder", "Vistas/footer.html");

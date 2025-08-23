document.addEventListener('DOMContentLoaded', function () {
    const categorias = document.querySelectorAll('.imagenJuego');
    categorias.forEach(img => {
        img.addEventListener('click', function () {
            // Oculta todas las listas
            document.querySelectorAll('.categoriaJuego').forEach(div => {
                div.classList.remove('active');
            });
            // Muestra solo la lista de la categoría clickeada
            this.parentElement.classList.add('active');
        });
    });
});

(function () {
    var visible = false;
    function iniciar() {
        var icono = document.getElementById("menuicono");
        var menu = document.getElementById("menuprincipal");
        if (icono && menu) {
            icono.addEventListener("click", function () {
                if (!visible) {
                    menu.style.display = "flex";
                    visible = true;
                } else {
                    menu.style.display = "none";
                    visible = false;
                }
            });
        }

        if (window.innerWidth <= 480) {
            if (menu) menu.style.display = "none";
        }
    }
    window.addEventListener("load", iniciar);
})();

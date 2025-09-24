document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.querySelector("header");

    // ===== Scroll suave con offset del header =====
    document.querySelectorAll("header nav a").forEach(link => {
        link.addEventListener("click", e => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = headerEl ? headerEl.offsetHeight : 80;
                    const offset = target.offsetTop - headerHeight - 12;
                    window.scrollTo({ top: offset, behavior: "smooth" });
                    const nav = document.querySelector("header nav ul");
                    if (nav && nav.classList.contains("activo")) nav.classList.remove("activo");
                }
            }
        });
    });

    // ===== Botón "ir arriba" =====
    const btnArriba = document.createElement("button");
    btnArriba.innerText = "↑";
    btnArriba.id = "btn-arriba";
    document.body.appendChild(btnArriba);
    btnArriba.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1C9AEA;
        color: black;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 22px;
        cursor: pointer;
        display: none;
        z-index: 1000;
    `;
    window.addEventListener("scroll", () => {
        btnArriba.style.display = window.scrollY > 200 ? "block" : "none";
    });
    btnArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // ===== Menú hamburguesa =====
    const menuToggle = document.getElementById("menuHamburguesa");
    const nav = document.querySelector("header nav ul");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", e => {
            e.stopPropagation();
            nav.classList.toggle("activo");
        });
        document.addEventListener("click", e => {
            if (window.innerWidth <= 768 && nav.classList.contains("activo")) {
                if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                    nav.classList.remove("activo");
                }
            }
        });
    }

    // ===== Efecto máquina de escribir en eslogan =====
    const heroTitle = document.querySelector("#eslogan h1");
    if (heroTitle) {
        const texto = heroTitle.innerText;
        heroTitle.innerText = "";
        let i = 0;
        function escribir() {
            if (i < texto.length) {
                heroTitle.innerHTML += texto[i] === " " ? "&nbsp;" : texto[i];
                i++;
                setTimeout(escribir, 80);
            }
        }
        escribir();
    }

    // ===== Efecto 3D en tarjetas =====
    document.querySelectorAll(".card, .noticia-principal").forEach(item => {
        item.addEventListener("mousemove", e => {
            const rect = item.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateY = ((x / rect.width) - 0.5) * 10;
            const rotateX = ((y / rect.height) - 0.5) * -10;
            item.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            item.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "rotateX(0) rotateY(0) scale(1)";
            item.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        });
    });

    // ===== Noticias: botón "Leer más" =====
    const noticias = document.querySelectorAll("#noticias .noticia-principal, #noticias .card");
    noticias.forEach(noticia => {
        const texto = noticia.querySelector(".texto-extra");
        const boton = noticia.querySelector(".leer-texto");
        if (!texto || !boton) return;

        boton.addEventListener("click", () => {
            texto.classList.toggle("activo");
            boton.innerText = texto.classList.contains("activo") ? "Leer menos" : "Leer más";
        });
    });

    // ===== Categorías: imagen controla texto + lista de juegos =====
    const categorias = document.querySelectorAll("#categorias .card.categoria, #categorias .categoria");
    categorias.forEach(cat => {
        const img = cat.querySelector("img");
        const texto = cat.querySelector(".texto-categoria");
        const lista = cat.querySelector(".lista-juegos");
        if (!img || !texto) return;

        img.style.cursor = "pointer";
        img.tabIndex = 0;
        img.setAttribute("role", "button");
        img.setAttribute("aria-expanded", "false");

        function toggleCategoria() {
            texto.classList.toggle("activo");
            if (lista) lista.classList.toggle("activo");
            img.setAttribute("aria-expanded", texto.classList.contains("activo") ? "true" : "false");
        }

        img.addEventListener("click", toggleCategoria);
        img.addEventListener("keydown", e => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCategoria();
            }
        });
    });

    // ===== Año dinámico en el footer =====
    const footerYear = document.getElementById("year");
    if (footerYear) footerYear.innerText = new Date().getFullYear();
});

document.addEventListener("DOMContentLoaded", () => {
    const headerEl = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            headerEl.classList.add("scrolled");
        } else {
            headerEl.classList.remove("scrolled");
        }
    });

    const secciones = document.querySelectorAll(".section");
    function fadeInOnScroll() {
        const triggerBottom = window.innerHeight / 1.15;
        secciones.forEach(sec => {
            const secTop = sec.getBoundingClientRect().top;
            if (secTop < triggerBottom) sec.classList.add("visible");
        });
    }
    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();

    document.querySelectorAll("header nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (href && href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = headerEl ? headerEl.offsetHeight : 80;
                    window.scrollTo({
                        top: target.offsetTop - headerHeight - 12,
                        behavior: "smooth"
                    });
                    const nav = document.querySelector("header nav ul");
                    if (nav && nav.classList.contains("activo")) {
                        nav.classList.remove("activo");
                    }
                }
            }
        });
    });

    const btnArriba = document.getElementById("btn-arriba");
    window.addEventListener("scroll", () => {
        btnArriba.style.display = window.scrollY > 300 ? "block" : "none";
    });
    btnArriba.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    const menuToggle = document.getElementById("menuHamburguesa");
    const nav = document.querySelector("header nav ul");
    if (menuToggle && nav) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            nav.classList.toggle("activo");
        });

        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 768 && nav.classList.contains("activo")) {
                if (!menuToggle.contains(e.target) && !nav.contains(e.target)) {
                    nav.classList.remove("activo");
                }
            }
        });
    }

    const noticias = document.querySelectorAll("#noticias .noticia-principal, #noticias .card");
    noticias.forEach(n => {
        const texto = n.querySelector(".texto-extra");
        const boton = n.querySelector(".leer-texto");
        if (!texto || !boton) return;

        boton.addEventListener("click", () => {
            texto.classList.toggle("activo");
            boton.innerText = texto.classList.contains("activo") ? "Leer menos" : "Leer más";
        });
    });

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
        img.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleCategoria();
            }
        });
    });

    const eslogan = document.querySelector(".eslogan");
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        if (eslogan) {
            eslogan.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    const footerYear = document.getElementById("year");
    if (footerYear) footerYear.innerText = new Date().getFullYear();

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll(".card, .noticia-principal, .comunidad-card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });

    const form = document.querySelector(".formulario");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const button = form.querySelector("button");
            const originalText = button.innerText;
            button.innerText = "✓ Enviado";
            button.style.background = "linear-gradient(135deg, #00d4ff, #1c9aea)";

            setTimeout(() => {
                button.innerText = originalText;
                button.style.background = "";
                form.reset();
            }, 2000);
        });
    }
});
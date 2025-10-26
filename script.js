// ============================================
// SISTEMA DE AUTENTICACIÓN Y GESTIÓN DE USUARIOS
// ============================================

function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = "slideInRight 0.4s ease reverse";
    setTimeout(() => notification.remove(), 400);
  }, 3000);
}

function closeModalWithAnimation(modal) {
  modal.classList.add("closing");
  setTimeout(() => {
    modal.style.display = "none";
    modal.classList.remove("closing");
  }, 300);
}

const loginModal = document.getElementById("loginModal");
const registerModal = document.getElementById("registerModal");
const btnLogin = document.getElementById("btnLogin");
const closeLogin = document.getElementById("closeLogin");
const closeRegister = document.getElementById("closeRegister");
const linkRegister = document.getElementById("linkRegister");
const linkLogin = document.getElementById("linkLogin");

btnLogin.addEventListener("click", () => {
  loginModal.style.display = "block";
});

closeLogin.addEventListener("click", () => {
  closeModalWithAnimation(loginModal);
});

closeRegister.addEventListener("click", () => {
  closeModalWithAnimation(registerModal);
});

linkRegister.addEventListener("click", () => {
  closeModalWithAnimation(loginModal);
  setTimeout(() => {
    registerModal.style.display = "block";
  }, 300);
});

linkLogin.addEventListener("click", () => {
  closeModalWithAnimation(registerModal);
  setTimeout(() => {
    loginModal.style.display = "block";
  }, 300);
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) closeModalWithAnimation(loginModal);
  if (e.target === registerModal) closeModalWithAnimation(registerModal);
});

function saveUser(userData) {
  const users = JSON.parse(localStorage.getItem("kgame_users") || "[]");
  users.push(userData);
  localStorage.setItem("kgame_users", JSON.stringify(users));
}

function getUser(email) {
  const users = JSON.parse(localStorage.getItem("kgame_users") || "[]");
  return users.find((user) => user.email === email);
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("kgame_current_user"));
}

function setCurrentUser(userData) {
  localStorage.setItem("kgame_current_user", JSON.stringify(userData));
}

function logout() {
  localStorage.removeItem("kgame_current_user");
  updateUIForAuth(false);
  showNotification("✅ Has cerrado sesión correctamente");
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  if (getUser(email)) {
    showNotification("⚠️ Este email ya está registrado");
    return;
  }

  const newUser = {
    name,
    email,
    password,
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
    color: "#1c9aea",
    createdAt: new Date().toISOString(),
  };

  saveUser(newUser);
  setCurrentUser(newUser);
  closeModalWithAnimation(registerModal);
  updateUIForAuth(true, newUser);
  showNotification("✅ ¡Cuenta creada exitosamente! Bienvenido a K-Game");

  document.getElementById("registerForm").reset();
});

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = getUser(email);

  if (!user) {
    showNotification("⚠️ Usuario no encontrado");
    return;
  }

  if (user.password !== password) {
    showNotification("⚠️ Contraseña incorrecta");
    return;
  }

  setCurrentUser(user);
  closeModalWithAnimation(loginModal);
  updateUIForAuth(true, user);
  showNotification("✅ ¡Bienvenido de nuevo, " + user.name + "!");

  document.getElementById("loginForm").reset();
});

document.getElementById("btnLogout").addEventListener("click", logout);

function updateUIForAuth(isLoggedIn, userData = null) {
  const btnLogin = document.getElementById("btnLogin");
  const userProfile = document.getElementById("userProfile");
  const avatarCreator = document.getElementById("avatar-creator");

  if (isLoggedIn && userData) {
    btnLogin.style.display = "none";
    userProfile.style.display = "flex";
    avatarCreator.classList.add("active");

    document.getElementById("userName").textContent = userData.name;
    document.getElementById("miniAvatar").src = userData.avatar;
    document.getElementById("avatarPreview").src = userData.avatar;
    document.getElementById("avatarName").value = userData.name;
    document.getElementById("avatarDisplayName").textContent = userData.name;

    if (userData.color) {
      document.querySelectorAll(".color-choice").forEach((c) => {
        c.classList.remove("selected");
        if (c.dataset.color === userData.color) {
          c.classList.add("selected");
        }
      });
    }
  } else {
    btnLogin.style.display = "block";
    userProfile.style.display = "none";
    avatarCreator.classList.remove("active");
  }
}

// ============================================
// SISTEMA DE CREACIÓN DE AVATAR
// ============================================

let selectedAvatar = "default";
let selectedColor = "#1c9aea";

document.querySelectorAll(".avatar-choice").forEach((choice) => {
  choice.addEventListener("click", function () {
    document
      .querySelectorAll(".avatar-choice")
      .forEach((c) => c.classList.remove("selected"));
    this.classList.add("selected");
    selectedAvatar = this.dataset.avatar;
    document.getElementById("avatarPreview").src = this.src;
  });
});

document.querySelectorAll(".color-choice").forEach((choice) => {
  choice.addEventListener("click", function () {
    document
      .querySelectorAll(".color-choice")
      .forEach((c) => c.classList.remove("selected"));
    this.classList.add("selected");
    selectedColor = this.dataset.color;
  });
});

document.getElementById("avatarName").addEventListener("input", function () {
  document.getElementById("avatarDisplayName").textContent =
    this.value || "Nombre de Gamer";
});

document.getElementById("saveAvatar").addEventListener("click", () => {
  const currentUser = getCurrentUser();
  if (!currentUser) {
    showNotification("⚠️ Debes iniciar sesión primero");
    return;
  }

  const newName =
    document.getElementById("avatarName").value || currentUser.name;
  const avatarSrc = document.getElementById("avatarPreview").src;

  currentUser.name = newName;
  currentUser.avatar = avatarSrc;
  currentUser.color = selectedColor;

  setCurrentUser(currentUser);

  const users = JSON.parse(localStorage.getItem("kgame_users") || "[]");
  const userIndex = users.findIndex((u) => u.email === currentUser.email);
  if (userIndex !== -1) {
    users[userIndex] = currentUser;
    localStorage.setItem("kgame_users", JSON.stringify(users));
  }

  document.getElementById("userName").textContent = newName;
  document.getElementById("miniAvatar").src = avatarSrc;

  showNotification("✅ ¡Avatar guardado exitosamente!");

  // Cerrar editor de avatar con animación suave
  const avatarSection = document.getElementById("avatar-creator");
  avatarSection.style.opacity = "0";
  avatarSection.style.transform = "translateY(30px)";

  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, 300);
});

// ============================================
// FUNCIONALIDADES ORIGINALES DEL SITIO
// ============================================

document.addEventListener("DOMContentLoaded", () => {
  const headerEl = document.querySelector("header");

  const currentUser = getCurrentUser();
  if (currentUser) {
    updateUIForAuth(true, currentUser);
  }

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
    secciones.forEach((sec) => {
      const secTop = sec.getBoundingClientRect().top;
      if (secTop < triggerBottom) sec.classList.add("visible");
    });
  }
  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll();

  document.querySelectorAll("header nav a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerHeight = headerEl ? headerEl.offsetHeight : 80;
          window.scrollTo({
            top: target.offsetTop - headerHeight - 12,
            behavior: "smooth",
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

  const noticias = document.querySelectorAll(
    "#noticias .noticia-principal, #noticias .card"
  );
  noticias.forEach((n) => {
    const texto = n.querySelector(".texto-extra");
    const boton = n.querySelector(".leer-texto");
    if (!texto || !boton) return;

    boton.addEventListener("click", () => {
      texto.classList.toggle("activo");
      boton.innerText = texto.classList.contains("activo")
        ? "Leer menos"
        : "Leer más";
    });
  });

  const categorias = document.querySelectorAll(
    "#categorias .card.categoria, #categorias .categoria"
  );
  categorias.forEach((cat) => {
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
      img.setAttribute(
        "aria-expanded",
        texto.classList.contains("activo") ? "true" : "false"
      );
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
    rootMargin: "0px 0px -50px 0px",
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

  document
    .querySelectorAll(".card, .noticia-principal, .comunidad-card")
    .forEach((card) => {
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
        showNotification("✅ Mensaje enviado correctamente");
      }, 2000);
    });
  }
});

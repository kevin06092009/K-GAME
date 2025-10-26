// ============================================
// FUNCIONALIDAD PARA LA PÁGINA DE DETALLES DEL JUEGO
// ============================================

let currentGame = null;
let currentImageIndex = 0;

// Función para cargar los detalles del juego
function loadGameDetails() {
  // Obtener ID del juego desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("id");

  if (!gameId) {
    // Si no hay ID, redirigir a la tienda
    window.location.href = "tienda.html";
    return;
  }

  // Obtener datos del juego
  currentGame = getGameById(gameId);

  if (!currentGame) {
    // Si no se encuentra el juego, mostrar mensaje de error
    document.getElementById("gameHero").innerHTML = `
      <div class="container" style="text-align: center; padding: 60px 20px;">
        <h1 style="color: #ff4757; margin-bottom: 20px;">Juego no encontrado</h1>
        <p style="color: #ccc; margin-bottom: 30px;">El juego que buscas no existe o ha sido eliminado.</p>
        <a href="tienda.html" class="btn-add-to-cart" style="display: inline-flex;">
          Volver a la Tienda
        </a>
      </div>
    `;
    return;
  }

  // Renderizar detalles del juego
  renderGameHero();
  renderGameTabs();
  renderRelatedGames();

  // Configurar eventos
  setupGalleryEvents();
  setupTabEvents();

  // Actualizar título de la página
  document.title = `K-Game | ${currentGame.title}`;
}

// Función para renderizar la sección hero del juego
function renderGameHero() {
  const gameHero = document.getElementById("gameHero");

  if (!gameHero || !currentGame) return;

  // Crear estrellas de calificación
  const stars = Array(5)
    .fill(0)
    .map((_, i) => {
      const filled = i < Math.floor(currentGame.rating);
      return `<span class="star ${filled ? "" : "empty"}">★</span>`;
    })
    .join("");

  // Crear badges de plataformas
  const platforms = currentGame.platforms
    .map((platform) => `<span class="platform-badge">${platform}</span>`)
    .join("");

  // Crear miniaturas de la galería
  const thumbnails = currentGame.gallery
    .map(
      (img, index) =>
        `<img src="${img}" alt="${currentGame.title} - Imagen ${index + 1}" 
          class="gallery-thumbnail ${index === 0 ? "active" : ""}" 
          data-index="${index}">`
    )
    .join("");

  gameHero.innerHTML = `
    <div class="game-hero-content">
      <div class="game-hero-gallery">
        <img src="${currentGame.gallery[0]}" alt="${currentGame.title}" 
             class="game-main-image" id="mainImage">
        <div class="game-gallery-thumbnails">
          ${thumbnails}
        </div>
      </div>
      <div class="game-hero-info">
        <h1 class="game-title">${currentGame.title}</h1>
        <div class="game-meta">
          <div class="game-meta-item">
            <strong>Desarrollador:</strong> ${currentGame.developer}
          </div>
          <div class="game-meta-item">
            <strong>Lanzamiento:</strong> ${formatDate(currentGame.releaseDate)}
          </div>
          <div class="game-meta-item">
            <strong>Categoría:</strong> ${getCategoryLabel(
              currentGame.category
            )}
          </div>
        </div>
        <div class="game-rating">
          <div class="stars">${stars}</div>
          <span class="rating-value">${currentGame.rating}/5</span>
        </div>
        <p class="game-description">${currentGame.description}</p>
        <div class="game-platforms">
          ${platforms}
        </div>
        <div class="game-price-section">
          <div class="game-price">
            ${
              currentGame.price === 0
                ? "GRATIS"
                : "$" + currentGame.price.toFixed(2)
            }
          </div>
        </div>
        <div class="game-actions">
          <button class="btn-add-to-cart" onclick="addToCart('${
            currentGame.id
          }')">
            🛒 Agregar al Carrito
          </button>
          <button class="btn-wishlist">
            ❤️ Añadir a la Lista de Deseos
          </button>
        </div>
      </div>
    </div>
  `;
}

// Función para renderizar las pestañas de información
function renderGameTabs() {
  if (!currentGame) return;

  // Pestaña Descripción
  const descriptionTab = document.getElementById("description");
  if (descriptionTab) {
    descriptionTab.innerHTML = `
      <h3>Descripción del Juego</h3>
      <p>${currentGame.description}</p>
      <p>Sumérgete en la experiencia de ${
        currentGame.title
      }, un juego impresionante 
      desarrollado por ${currentGame.developer}. Lanzado el ${formatDate(
      currentGame.releaseDate
    )}, 
      este título ha capturado la atención de los jugadores gracias a su jugabilidad innovadora 
      y su mundo inmersivo.</p>
      <p>Con una calificación de ${currentGame.rating}/5 estrellas, ${
      currentGame.title
    } 
      ofrece horas de entretenimiento para los fanáticos del género ${getCategoryLabel(
        currentGame.category
      )}. 
      Disponible para ${currentGame.platforms.join(
        ", "
      )}, este juego es una adición 
      imprescindible para cualquier colección.</p>
    `;
  }

  // Pestaña Requisitos
  const requirementsTab = document.getElementById("requirements");
  if (requirementsTab) {
    const requirementsHTML = Object.keys(currentGame.requirements)
      .map((level) => {
        const requirements = currentGame.requirements[level];
        const levelLabel = level === "minimum" ? "Mínimos" : "Recomendados";
        const levelIcon = level === "minimum" ? "⚠️" : "✅";

        const requirementsList = Object.keys(requirements)
          .map(
            (req) =>
              `<li>
          <strong>${capitalizeFirst(req)}:</strong>
          <span>${requirements[req]}</span>
        </li>`
          )
          .join("");

        return `
        <div class="requirement-card">
          <h4>${levelIcon} Requisitos ${levelLabel}</h4>
          <ul class="requirement-list">
            ${requirementsList}
          </ul>
        </div>
      `;
      })
      .join("");

    requirementsTab.innerHTML = `
      <h3>Requisitos del Sistema</h3>
      <div class="requirements-container">
        ${requirementsHTML}
      </div>
    `;
  }

  // Pestaña Características
  const featuresTab = document.getElementById("features");
  if (featuresTab) {
    const featuresHTML = currentGame.features
      .map((feature, index) => {
        const icons = ["🎮", "🌍", "⚔️", "🎯", "🏆", "🎨", "🔊", "👥"];
        const icon = icons[index % icons.length];

        return `
        <div class="feature-item">
          <div class="feature-icon">${icon}</div>
          <div class="feature-text">${feature}</div>
        </div>
      `;
      })
      .join("");

    featuresTab.innerHTML = `
      <h3>Características Principales</h3>
      <div class="features-list">
        ${featuresHTML}
      </div>
    `;
  }

  // Pestaña Reseñas
  const reviewsTab = document.getElementById("reviews");
  if (reviewsTab) {
    // Generar reseñas de ejemplo
    const reviews = generateSampleReviews();

    const reviewsHTML = reviews
      .map((review) => {
        const stars = Array(5)
          .fill(0)
          .map(
            (_, i) =>
              `<span class="star ${i < review.rating ? "" : "empty"}">★</span>`
          )
          .join("");

        return `
        <div class="review-card">
          <div class="review-header">
            <div class="review-author">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${review.author}" 
                   alt="${review.author}" class="review-avatar">
              <div>
                <div class="review-name">${review.author}</div>
                <div class="review-date">${review.date}</div>
              </div>
            </div>
            <div class="review-rating">${stars}</div>
          </div>
          <p class="review-text">${review.text}</p>
          <div class="review-helpful">
            <span>¿Te resultó útil esta reseña?</span>
            <button class="helpful-btn">Sí (${review.helpful})</button>
            <button class="helpful-btn">No (${review.notHelpful})</button>
          </div>
        </div>
      `;
      })
      .join("");

    // Calcular distribución de calificaciones
    const ratingDistribution = calculateRatingDistribution(reviews);

    const distributionHTML = [5, 4, 3, 2, 1]
      .map((rating) => {
        const percentage = ratingDistribution[rating] || 0;
        const count = Math.round((reviews.length * percentage) / 100);

        return `
        <div class="rating-bar">
          <div class="rating-bar-label">${rating} ★</div>
          <div class="rating-bar-track">
            <div class="rating-bar-fill" style="width: ${percentage}%"></div>
          </div>
          <div class="rating-bar-count">${count}</div>
        </div>
      `;
      })
      .join("");

    reviewsTab.innerHTML = `
      <h3>Reseñas de Jugadores</h3>
      <div class="reviews-container">
        <div class="review-summary">
          <div class="review-rating">
            <div class="rating-number">${currentGame.rating}</div>
            <div class="rating-stars">
              ${Array(5)
                .fill(0)
                .map(
                  (_, i) =>
                    `<span class="star ${
                      i < Math.floor(currentGame.rating) ? "" : "empty"
                    }">★</span>`
                )
                .join("")}
            </div>
            <div class="review-count">${reviews.length} reseñas</div>
          </div>
          <div class="review-distribution">
            ${distributionHTML}
          </div>
        </div>
        <div class="reviews-list">
          ${reviewsHTML}
        </div>
        <button class="btn-write-review">Escribir una Reseña</button>
      </div>
    `;
  }
}

// Función para renderizar juegos relacionados
function renderRelatedGames() {
  const relatedGamesGrid = document.getElementById("relatedGamesGrid");

  if (!relatedGamesGrid || !currentGame) return;

  const relatedGames = getRelatedGames(currentGame.id);

  if (relatedGames.length === 0) {
    relatedGamesGrid.innerHTML =
      '<p style="color: #ccc; text-align: center;">No hay juegos relacionados.</p>';
    return;
  }

  const gamesHTML = relatedGames
    .map(
      (game) => `
    <div class="related-game-card" onclick="window.location.href='game.html?id=${
      game.id
    }'">
      <img src="${game.image}" alt="${game.title}" class="related-game-image">
      <div class="related-game-content">
        <h3 class="related-game-title">${game.title}</h3>
        <div class="related-game-price">
          ${game.price === 0 ? "GRATIS" : "$" + game.price.toFixed(2)}
        </div>
      </div>
    </div>
  `
    )
    .join("");

  relatedGamesGrid.innerHTML = gamesHTML;
}

// Función para configurar eventos de la galería
function setupGalleryEvents() {
  const thumbnails = document.querySelectorAll(".gallery-thumbnail");
  const mainImage = document.getElementById("mainImage");

  if (!thumbnails.length || !mainImage) return;

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      // Actualizar imagen principal
      const index = parseInt(this.dataset.index);
      mainImage.src = currentGame.gallery[index];

      // Actualizar miniatura activa
      thumbnails.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      // Actualizar índice actual
      currentImageIndex = index;
    });
  });
}

// Función para configurar eventos de las pestañas
function setupTabEvents() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  if (!tabButtons.length || !tabPanes.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.dataset.tab;

      // Actualizar botones activos
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Actualizar paneles activos
      tabPanes.forEach((pane) => {
        if (pane.id === targetTab) {
          pane.classList.add("active");
        } else {
          pane.classList.remove("active");
        }
      });
    });
  });
}

// Función para formatear fecha
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("es-ES", options);
}

// Función para capitalizar la primera letra
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Función para generar reseñas de ejemplo
function generateSampleReviews() {
  const sampleReviews = [
    {
      author: "GamerPro2024",
      rating: 5,
      date: "Hace 2 días",
      text: "¡Increíble juego! La jugabilidad es fluida y los gráficos son impresionantes. Definitivamente uno de los mejores juegos que he jugado este año. La historia es envolvente y los personajes están muy bien desarrollados.",
      helpful: 24,
      notHelpful: 2,
    },
    {
      author: "PlayerOne",
      rating: 4,
      date: "Hace 1 semana",
      text: "Muy buen juego con una jugabilidad sólida y gráficos impresionantes. La historia es interesante y los personajes son memorables. Mi única queja es que el final podría haber sido un poco más satisfactorio, pero en general es una excelente experiencia.",
      helpful: 18,
      notHelpful: 3,
    },
    {
      author: "NoobMaster",
      rating: 5,
      date: "Hace 2 semanas",
      text: "No puedo dejar de jugar este juego. La mecánica es adictiva y siempre hay algo nuevo que descubrir. Los desarrolladores realmente se esforzaron en crear un mundo vivo y lleno de detalles. ¡Recomendado 100%!",
      helpful: 15,
      notHelpful: 1,
    },
    {
      author: "CasualGamer",
      rating: 3,
      date: "Hace 3 semanas",
      text: "Es un juego decente con algunos momentos brillantes, pero también tiene sus frustraciones. La curva de dificultad puede ser un poco empinada para jugadores casuales, y algunos elementos del juego se sienten sin pulir. Sin embargo, si eres fan del género, aún puede valer la pena.",
      helpful: 8,
      notHelpful: 5,
    },
  ];

  return sampleReviews;
}

// Función para calcular distribución de calificaciones
function calculateRatingDistribution(reviews) {
  const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  reviews.forEach((review) => {
    distribution[review.rating]++;
  });

  // Convertir a porcentajes
  Object.keys(distribution).forEach((rating) => {
    distribution[rating] = Math.round(
      (distribution[rating] / reviews.length) * 100
    );
  });

  return distribution;
}

// Inicializar la página de detalles del juego
function initGameDetail() {
  // Verificar que estamos en la página de detalles del juego
  if (!document.getElementById("gameHero")) return;

  // Cargar detalles del juego
  loadGameDetails();

  // Actualizar año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log("🎮 Página de detalles del juego inicializada correctamente");
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGameDetail);
} else {
  initGameDetail();
}

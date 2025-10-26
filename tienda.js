// ============================================
// FUNCIONALIDAD DE LA TIENDA K-GAME
// ============================================

let currentCategory = "all";
let currentSearch = "";

// Obtener etiqueta de categoría con icono
function getCategoryLabel(category) {
  const labels = {
    accion: "⚔️ Acción",
    aventura: "🗺️ Aventura",
    rpg: "🧙‍♂️ RPG",
    shooter: "🔫 Shooter",
    deportes: "🏆 Deportes",
    terror: "🩸 Terror",
  };
  return labels[category] || category;
}

// Renderizar juegos en el grid
function renderGames(games) {
  const gamesGrid = document.getElementById("gamesGrid");

  if (!gamesGrid) return;

  if (!games || games.length === 0) {
    gamesGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #ccc;">
        <div style="font-size: 4rem; margin-bottom: 20px; opacity: 0.3;">🎮</div>
        <h3 style="color: #1c9aea; margin-bottom: 10px; font-size: 1.5rem;">No se encontraron juegos</h3>
        <p style="color: #999;">Intenta con otra búsqueda o categoría</p>
      </div>
    `;
    return;
  }

  gamesGrid.innerHTML = games
    .map(
      (game) => `
    <div class="game-card" data-game-id="${game.id}">
      <img src="${game.image}" alt="${
        game.title
      }" class="game-card-image" loading="lazy" />
      <div class="game-card-content">
        <h3 class="game-card-title">${game.title}</h3>
        <span class="game-card-category">${getCategoryLabel(
          game.category
        )}</span>
        <p class="game-card-description">${game.description}</p>
        <div class="game-card-footer">
          <span class="game-card-price">${
            game.price === 0 ? "GRATIS" : "$" + game.price.toFixed(2)
          }</span>
          <button class="btn-add-cart" onclick="event.stopPropagation(); handleAddToCart('${
            game.id
          }')">
            🛒 Agregar
          </button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Agregar evento de click para ir a la página del juego
  document.querySelectorAll(".game-card").forEach((card) => {
    card.addEventListener("click", function () {
      const gameId = this.dataset.gameId;
      window.location.href = `game.html?id=${gameId}`;
    });
  });

  // Animar entrada de las tarjetas
  animateCards();
}

// Animar tarjetas al entrar
function animateCards() {
  const cards = document.querySelectorAll(".game-card");
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 50);
  });
}

// Manejar agregar al carrito
function handleAddToCart(gameId) {
  const game = getGameById(gameId);
  if (game) {
    addToCart(game);
  }
}

// Filtrar y renderizar juegos
function filterAndRender() {
  let games = getGamesByCategory(currentCategory);

  if (currentSearch.trim()) {
    const searchLower = currentSearch.toLowerCase();
    games = games.filter(
      (game) =>
        game.title.toLowerCase().includes(searchLower) ||
        game.description.toLowerCase().includes(searchLower) ||
        game.category.toLowerCase().includes(searchLower)
    );
  }

  renderGames(games);
}

// Configurar botones de categoría
function setupCategoryButtons() {
  const categoryButtons = document.querySelectorAll(".category-btn");

  if (!categoryButtons.length) return;

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remover clase active de todos
      categoryButtons.forEach((b) => b.classList.remove("active"));

      // Agregar clase active al clickeado
      this.classList.add("active");

      // Actualizar categoría actual
      currentCategory = this.dataset.category;

      // Filtrar y renderizar
      filterAndRender();
    });
  });
}

// Configurar búsqueda en tiempo real
function setupSearch() {
  const searchInput = document.getElementById("searchInput");

  if (!searchInput) return;

  searchInput.addEventListener("input", function () {
    currentSearch = this.value;
    filterAndRender();
  });

  // Permitir búsqueda con Enter
  searchInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      filterAndRender();
    }
  });
}

// Inicializar la tienda
function initTienda() {
  // Verificar que estamos en la página de tienda
  if (!document.getElementById("gamesGrid")) return;

  // Renderizar todos los juegos al inicio
  if (typeof gamesDatabase !== "undefined") {
    renderGames(gamesDatabase);
  } else {
    console.error(
      "gamesDatabase no está definido. Verifica que games-data.js esté cargado."
    );
  }

  // Configurar filtros
  setupCategoryButtons();
  setupSearch();

  // Actualizar año en footer
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  console.log("🎮 Tienda K-Game inicializada correctamente");
}

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTienda);
} else {
  initTienda();
}

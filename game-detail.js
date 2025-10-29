/* ============================================================
   GAME DETAIL SCRIPT – Muestra la información completa del juego
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  // Obtiene el ID del juego desde la URL (por ejemplo: game.html?id=game_gta5)
  const urlParams = new URLSearchParams(window.location.search);
  const gameId = urlParams.get("id");

  // Si no hay ID, muestra un mensaje de error
  if (!gameId) {
    document.querySelector("#game-detail").innerHTML = `
      <p class="text-center text-red-500 text-xl mt-10">
        ⚠️ No se encontró información del juego.
      </p>`;
    return;
  }

  // Busca el juego correspondiente en la base de datos
  const currentGame = getGameById(gameId);

  if (!currentGame) {
    document.querySelector("#game-detail").innerHTML = `
      <p class="text-center text-red-500 text-xl mt-10">
        ❌ No se encontró el juego solicitado.
      </p>`;
    return;
  }

  // Renderiza toda la información del juego
  renderGameDetail(currentGame);

  // Muestra los juegos relacionados
  renderRelatedGames(currentGame.id);
});

/* ============================================================
   FUNCIONES PRINCIPALES
   ============================================================ */

function renderGameDetail(game) {
  const container = document.querySelector("#game-detail");

  container.innerHTML = `
    <section class="game-header flex flex-col md:flex-row items-center gap-6 p-6">
      <img src="${game.image}" alt="${
    game.title
  }" class="w-80 rounded-2xl shadow-lg" />
      <div>
        <h1 class="text-4xl font-bold mb-3">${game.title}</h1>
        <p class="text-gray-400 mb-2">Desarrollado por <span class="text-white font-semibold">${
          game.developer
        }</span></p>
        <p class="text-gray-400 mb-2">Lanzamiento: ${formatDate(
          game.releaseDate
        )}</p>
        <p class="text-gray-400 mb-2">Categoría: ${capitalizeFirst(
          game.category
        )}</p>
        <p class="text-yellow-400 mb-4">⭐ ${game.rating.toFixed(1)} / 5</p>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Comprar por $${game.price.toLocaleString("es-CO")}
        </button>
      </div>
    </section>

    <section class="game-description p-6">
      <h2 class="text-2xl font-semibold mb-3">Descripción</h2>
      <p class="text-gray-300 leading-relaxed">${game.description}</p>
    </section>

    <section class="game-gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      ${game.gallery
        .map(
          (img) =>
            `<img src="${img}" alt="${game.title}" class="rounded-xl shadow-md hover:scale-105 transition-transform" />`
        )
        .join("")}
    </section>

    <section class="game-features p-6">
      <h2 class="text-2xl font-semibold mb-3">Características principales</h2>
      <ul class="list-disc ml-6 text-gray-300">
        ${game.features.map((f) => `<li>${f}</li>`).join("")}
      </ul>
    </section>

    <section class="game-requirements grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <div>
        <h3 class="text-xl font-semibold mb-2 text-blue-400">Requisitos mínimos</h3>
        <ul class="text-gray-300">
          <li>🧠 SO: ${game.requirements.minimum.os}</li>
          <li>⚙️ Procesador: ${game.requirements.minimum.processor}</li>
          <li>💾 Memoria: ${game.requirements.minimum.memory}</li>
          <li>🎮 Gráficos: ${game.requirements.minimum.graphics}</li>
          <li>📦 Almacenamiento: ${game.requirements.minimum.storage}</li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2 text-green-400">Requisitos recomendados</h3>
        <ul class="text-gray-300">
          <li>🧠 SO: ${game.requirements.recommended.os}</li>
          <li>⚙️ Procesador: ${game.requirements.recommended.processor}</li>
          <li>💾 Memoria: ${game.requirements.recommended.memory}</li>
          <li>🎮 Gráficos: ${game.requirements.recommended.graphics}</li>
          <li>📦 Almacenamiento: ${game.requirements.recommended.storage}</li>
        </ul>
      </div>
    </section>
  `;
}

function renderRelatedGames(currentId) {
  const relatedContainer = document.querySelector("#related-games");
  const relatedGames = getRelatedGames(currentId);

  if (relatedGames.length === 0) {
    relatedContainer.innerHTML = `
      <p class="text-gray-400 text-center mt-4">No hay juegos relacionados disponibles.</p>`;
    return;
  }

  relatedContainer.innerHTML = `
    <h2 class="text-2xl font-semibold mb-4 text-center">Juegos Relacionados</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      ${relatedGames
        .map(
          (g) => `
        <a href="game.html?id=${
          g.id
        }" class="block bg-gray-800 rounded-xl hover:bg-gray-700 transition p-4">
          <img src="${g.image}" alt="${
            g.title
          }" class="rounded-lg mb-3 h-40 w-full object-cover" />
          <h3 class="text-lg font-semibold text-white">${g.title}</h3>
          <p class="text-sm text-gray-400">${capitalizeFirst(g.category)}</p>
        </a>`
        )
        .join("")}
    </div>
  `;
}

/* ============================================================
   FUNCIONES AUXILIARES
   ============================================================ */

function getGameById(id) {
  if (!window.gamesData) {
    console.error("❌ No se encontró el objeto gamesData.");
    return null;
  }
  return window.gamesData.find((game) => game.id === id);
}

function getRelatedGames(currentId) {
  if (!window.gamesData) return [];
  const current = getGameById(currentId);
  if (!current) return [];

  return window.gamesData
    .filter((g) => g.category === current.category && g.id !== currentId)
    .slice(0, 4); // máximo 4 relacionados
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

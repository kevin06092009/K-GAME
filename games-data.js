// ============================================
// BASE DE DATOS DE JUEGOS K-GAME (SIMPLIFICADA)
// Solo datos necesarios para el catálogo
// ============================================

const gamesDatabase = [
  {
    id: "game_gta5",
    title: "Grand Theft Auto V",
    category: "accion",
    price: 189.900,
    image: "./IMAGENES/GTA5.webp",
    description:
      "Vive la experiencia definitiva de mundo abierto con Grand Theft Auto V. Explora Los Santos y el condado de Blaine en una aventura llena de acción, crimen y libertad total.",
    rating: 4.8,
  },
  {
    id: "game_minecraft",
    title: "Minecraft",
    category: "aventura",
    price: 129.900,
    image: "./IMAGENES/Minecraft.webp",
    description:
      "Explora, construye y sobrevive en un mundo abierto generado aleatoriamente. Crea todo lo que imagines, desde simples casas hasta ciudades enteras.",
    rating: 4.9,
  },
  {
    id: "game_fortnite",
    title: "Fortnite",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/Fortnite.webp",
    description:
      "Salta del autobús de batalla y enfréntate a jugadores de todo el mundo en el icónico modo Battle Royale. Construye, dispara y sobrevive.",
    rating: 4.7,
  },
  {
    id: "game_cod_mw3",
    title: "Call of Duty: Modern Warfare III",
    category: "shooter",
    price: 349.900,
    image: "./IMAGENES/Call-of-Duty-Modern-Warfare-III.webp",
    description:
      "Combates intensos, un modo multijugador rediseñado y una campaña cinematográfica llena de acción. Enfréntate a Makarov y vive la guerra moderna.",
    rating: 4.4,
  },
  {
    id: "game_fc26",
    title: "EA Sports FC 26",
    category: "deportes",
    price: 319.900,
    image: "./IMAGENES/FC26.webp",
    description:
      "EA Sports FC 26 redefine el realismo futbolístico con IA predictiva, animaciones HyperMotionV+ y un rediseño completo de Ultimate Team.",
    rating: 4.7,
  },
  {
    id: "game_zelda_botw",
    title: "The Legend of Zelda: Breath of the Wild",
    category: "aventura",
    price: 299.900,
    image: "./IMAGENES/The-Legend-of-Zelda-Breath-of-the-Wild.webp",
    description:
      "Explora un vasto mundo abierto lleno de misterios, templos antiguos y enemigos formidables. Una aventura épica como Link.",
    rating: 4.9,
  },
  {
    id: "game_rdr2",
    title: "Red Dead Redemption 2",
    category: "aventura",
    price: 289.900,
    image: "./IMAGENES/Red-Dead-Redemption-2.webp",
    description:
      "Vive la épica historia del forajido Arthur Morgan y la banda Van der Linde en el ocaso del Viejo Oeste. Mundo abierto lleno de vida.",
    rating: 4.9,
  },
  {
    id: "game_cyberpunk2077",
    title: "Cyberpunk 2077",
    category: "rpg",
    price: 249.900,
    image: "./IMAGENES/Cyberpunk-2077.webp",
    description:
      "Explora Night City, una metrópoli obsesionada con el poder, el lujo y la modificación corporal. Juega como V en este mundo abierto futurista.",
    rating: 4.3,
  },
  {
    id: "game_eldenring",
    title: "Elden Ring",
    category: "rpg",
    price: 349.900,
    image: "./IMAGENES/Elden Ring.webp",
    description:
      "Embárcate en una aventura épica en las Tierras Intermedias, un vasto mundo lleno de misterios, enemigos formidables y una historia de George R. R. Martin.",
    rating: 4.9,
  },
  {
    id: "game_gowragnarok",
    title: "God of War: Ragnarök",
    category: "aventura",
    price: 339.900,
    image: "./IMAGENES/God of War-Ragnarök.webp",
    description:
      "Acompaña a Kratos y Atreus en una travesía épica por los Nueve Reinos mientras enfrentan el Ragnarök. Historia sobre el destino y la familia.",
    rating: 4.9,
  },
  {
    id: "game_witcher3",
    title: "The Witcher 3: Wild Hunt",
    category: "rpg",
    price: 169.900,
    image: "./IMAGENES/The-Witcher-3-Wild-Hunt.webp",
    description:
      "Juega como Geralt de Rivia, un cazador de monstruos en busca de su hija adoptiva. Una historia rica, decisiones morales y un mundo abierto increíble.",
    rating: 4.8,
  },
  {
    id: "game_amongus",
    title: "Among Us",
    category: "estrategia",
    price: 15.900,
    image: "./IMAGENES/Among Us.webp",
    description:
      "Un juego de engaño y deducción donde los tripulantes deben descubrir quién es el impostor antes de que sea demasiado tarde.",
    rating: 4.4,
  },
  {
    id: "game_apex",
    title: "Apex Legends",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/Apex-Legends.webp",
    description:
      "Un shooter gratuito por equipos ambientado en el universo de Titanfall. Elige entre leyendas únicas y domina combates tácticos.",
    rating: 4.6,
  },
  {
    id: "game_lol",
    title: "League of Legends",
    category: "moba",
    price: 0,
    image: "./IMAGENES/League-of-Legends.webp",
    description:
      "Uno de los MOBA más populares del mundo. Elige entre más de 160 campeones y compite en intensas batallas 5v5.",
    rating: 4.7,
  },
  {
    id: "game_valorant",
    title: "Valorant",
    category: "shooter",
    price: 0,
    image: "./IMAGENES/Valorant.webp",
    description:
      "Shooter táctico 5v5 donde la precisión y las habilidades únicas de los agentes definen la victoria. Estrategia, reflejos y trabajo en equipo.",
    rating: 4.6,
  },
  {
    id: "game_cs2",
    title: "Counter-Strike 2",
    category: "shooter",
    price: 0,
    image: "./IMAGENES/Counter-Strike 2.webp",
    description:
      "La evolución del legendario CS:GO. Experiencia táctica mejorada con el motor Source 2, gráficos renovados y jugabilidad precisa.",
    rating: 4.8,
  },
  {
    id: "game_overwatch2",
    title: "Overwatch 2",
    category: "shooter",
    price: 0,
    image: "./IMAGENES/Overwatch 2.webp",
    description:
      "Shooter 5v5 con héroes únicos, habilidades espectaculares y acción en equipo. Domina la estrategia, la coordinación y la creatividad.",
    rating: 4.3,
  },
  {
    id: "game_re4remake",
    title: "Resident Evil 4 Remake",
    category: "terror",
    price: 259.900,
    image: "./IMAGENES/Resident-Evil.webp",
    description:
      "Reimagina el clásico de survival horror con gráficos renovados, jugabilidad moderna y una historia intensa protagonizada por Leon S. Kennedy.",
    rating: 4.9,
  },
  {
    id: "game_acmirage",
    title: "Assassin's Creed Mirage",
    category: "aventura",
    price: 269.900,
    image: "./IMAGENES/Assassin's Creed Mirage.webp",
    description:
      "Vuelve a los orígenes de la saga con Basim en Bagdad. Un juego de sigilo, parkour y asesinatos ambientado en una era dorada.",
    rating: 4.4,
  },
  {
    id: "game_hogwartslegacy",
    title: "Hogwarts Legacy",
    category: "aventura",
    price: 319.900,
    image: "./IMAGENES/Hogwarts Legacy.webp",
    description:
      "Vive tu propia historia en el mundo mágico del siglo XIX. Explora Hogwarts, aprende hechizos y enfréntate a criaturas legendarias.",
    rating: 4.8,
  },
  {
    id: "game_spiderman2",
    title: "Marvel's Spider-Man 2",
    category: "accion",
    price: 369.900,
    image: "./IMAGENES/Spider-Man 2.webp",
    description:
      "Peter Parker y Miles Morales unen fuerzas en una historia épica exclusiva para PS5, enfrentándose a Venom y Kraven.",
    rating: 4.9,
  },
  {
    id: "game_battlefield2042",
    title: "Battlefield 2042",
    category: "shooter",
    price: 249.900,
    image: "./IMAGENES/Battlefield 2042.webp",
    description:
      "Guerras modernas a gran escala con hasta 128 jugadores. Destruye entornos, usa vehículos futuristas y domina el campo de batalla.",
    rating: 4.0,
  },
  {
    id: "game_pubg",
    title: "PUBG: Battlegrounds",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/PUBG-Battlegrounds.webp",
    description:
      "El pionero del género battle royale. Sobrevive, busca armas y sé el último en pie en intensos combates realistas.",
    rating: 4.5,
  },
  {
    id: "game_roblox",
    title: "Roblox",
    category: "aventura",
    price: 0,
    image: "./IMAGENES/Roblox.webp",
    description:
      "Plataforma en línea que permite a los jugadores crear, compartir y jugar millones de experiencias creadas por la comunidad.",
    rating: 4.4,
  },
  {
    id: "game_supermarioodyssey",
    title: "Super Mario Odyssey",
    category: "aventura",
    price: 289.900,
    image: "./IMAGENES/Super Mario Odyssey.webp",
    description:
      "Acompaña a Mario y Cappy en una aventura por el mundo para rescatar a Peach. Innovador, colorido y lleno de creatividad.",
    rating: 4.9,
  },
  {
    id: "game_genshinimpact",
    title: "Genshin Impact",
    category: "rpg",
    price: 0,
    image: "./IMAGENES/Genshin Impact.webp",
    description:
      "Explora el mundo de Teyvat, domina los elementos y lucha con un grupo de personajes únicos en este RPG de acción gratuito.",
    rating: 4.8,
  },
  {
    id: "game_tlou2",
    title: "The Last of Us Part II",
    category: "aventura",
    price: 269.900,
    image: "./IMAGENES/The last of us.webp",
    description:
      "Una historia emocional sobre venganza y redención. Ellie lucha por sobrevivir en un mundo devastado mientras enfrenta dilemas morales.",
    rating: 4.9,
  },
  {
    id: "game_mk1",
    title: "Mortal Kombat 1",
    category: "accion",
    price: 339.900,
    image: "./IMAGENES/Mortal Kombat 1.webp",
    description:
      "Reinicio completo de la saga. Nuevas mecánicas, combates más sangrientos y un universo reimaginado por Liu Kang.",
    rating: 4.7,
  },
  {
    id: "game_forzahorizon5",
    title: "Forza Horizon 5",
    category: "deportes",
    price: 279.900,
    image: "./IMAGENES/Forza horizon.webp",
    description:
      "Explora México en el festival automovilístico más grande del mundo. Conduce cientos de autos en un entorno abierto y realista.",
    rating: 4.9,
  },
  {
    id: "game_dbd",
    title: "Dead by Daylight",
    category: "terror",
    price: 84.900,
    image: "./IMAGENES/Dead by daylight.webp",
    description:
      "Juego asimétrico de 4 contra 1: sobrevive como víctima o caza como asesino en un mundo lleno de horror.",
    rating: 4.6,
  },
];

// Función para obtener todos los juegos
function getAllGames() {
  return gamesDatabase;
}

// Función para obtener un juego por su ID
function getGameById(id) {
  return gamesDatabase.find((game) => game.id === id);
}

// Función para obtener juegos por categoría
function getGamesByCategory(category) {
  if (category === "all") {
    return gamesDatabase;
  }
  return gamesDatabase.filter((game) => game.category === category);
}

// Función para buscar juegos
function searchGames(query) {
  const queryLower = query.toLowerCase();
  return gamesDatabase.filter(
    (game) =>
      game.title.toLowerCase().includes(queryLower) ||
      game.description.toLowerCase().includes(queryLower) ||
      game.category.toLowerCase().includes(queryLower)
  );
}

// Función para obtener juegos destacados (los mejor valorados)
function getFeaturedGames(limit = 6) {
  return [...gamesDatabase].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

// Asignar a window para que esté disponible globalmente
if (typeof window !== "undefined") {
  window.gamesData = gamesDatabase;
}

// ============================================
// BASE DE DATOS DE JUEGOS K-GAME
// ============================================

const gamesDatabase = [
  {
    id: "game1",
    title: "Cyberpunk 2077",
    category: "rpg",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1606096529274-76ce464f1e38?w=500",
    description:
      "Explora la ciudad de Night City, un megalópolis obsesionado con el poder, el glamour y la modificación corporal.",
    developer: "CD Projekt Red",
    releaseDate: "2020-12-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.2,
    gallery: [
      "https://images.unsplash.com/photo-1606096529274-76ce464f1e38?w=500",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K o AMD FX-8310",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 970 o AMD Radeon R9 290",
        storage: "70 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790 o AMD Ryzen 3 3200G",
        memory: "12 GB",
        graphics: "NVIDIA GeForce GTX 1060 6GB o AMD Radeon RX 580 8GB",
        storage: "70 GB SSD",
      },
    },
    features: [
      "Mundo abierto inmersivo",
      "Narrativa ramificada",
      "Personalización de personaje",
      "Múltiples finales",
    ],
  },
  {
    id: "game2",
    title: "FIFA 24",
    category: "deportes",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500",
    description:
      "La experiencia de fútbol más realista con gráficos mejorados y controles más precisos.",
    developer: "EA Sports",
    releaseDate: "2023-09-29",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K o AMD Ryzen 5 1600",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 660 o AMD Radeon R9 270",
        storage: "100 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-6700 o AMD Ryzen 7 2700X",
        memory: "12 GB",
        graphics: "NVIDIA GeForce GTX 1660 o AMD Radeon RX 5600 XT",
        storage: "100 GB SSD",
      },
    },
    features: [
      "HyperMotion2 Technology",
      "Modo Carrera mejorado",
      "Ultimate Team con nuevas funcionalidades",
      "Volta Football",
    ],
  },
  {
    id: "game3",
    title: "Resident Evil 4 Remake",
    category: "terror",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1592155945905-7a4b23e9c9c5?w=500",
    description:
      "La reinvención del clásico de terror con gráficos de nueva generación y jugabilidad modernizada.",
    developer: "Capcom",
    releaseDate: "2023-03-24",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.8,
    gallery: [
      "https://images.unsplash.com/photo-1592155945905-7a4b23e9c9c5?w=500",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 3 1200 o Intel Core i5-7500",
        memory: "8 GB",
        graphics:
          "AMD Radeon RX 560 con 4GB VRAM o NVIDIA GeForce GTX 1050 Ti con 4GB VRAM",
        storage: "60 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 5 3600 o Intel Core i7 8700",
        memory: "16 GB",
        graphics:
          "AMD Radeon RX 6700 XT con 12GB VRAM o NVIDIA GeForce RTX 2070 con 8GB VRAM",
        storage: "60 GB SSD",
      },
    },
    features: [
      "Terror de supervivencia renovado",
      "Combate mejorado",
      "Gráficos de nueva generación",
      "Historia reimaginada",
    ],
  },
  {
    id: "game4",
    title: "Call of Duty: Modern Warfare II",
    category: "shooter",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500",
    description:
      "Regresa la acción intensa con una nueva campaña global y multijugador mejorado.",
    developer: "Infinity Ward",
    releaseDate: "2022-10-28",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?w=500",
      "https://images.unsplash.com/photo-1542751110-97427bb1f711?w=500",
      "https://images.unsplash.com/photo-1604906590733-9e6249de168d?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-6100 o AMD Ryzen 3 1200",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 960 o AMD Radeon RX 470",
        storage: "125 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K o AMD Ryzen 5 1400",
        memory: "12 GB",
        graphics: "NVIDIA GeForce GTX 1060 o AMD Radeon RX 580",
        storage: "125 GB SSD",
      },
    },
    features: [
      "Campaña cinematográfica",
      "Multijugador competitivo",
      "Especial Ops cooperativo",
      "Warzone 2.0 integrado",
    ],
  },
  {
    id: "game5",
    title: "The Legend of Zelda: Tears of the Kingdom",
    category: "aventura",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
    description:
      "Continúa la aventura de Link en un mundo expandido con nuevas habilidades y misterios por descubrir.",
    developer: "Nintendo",
    releaseDate: "2023-05-12",
    platforms: ["Nintendo Switch"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500",
    ],
    requirements: {
      minimum: {
        os: "Nintendo Switch System",
        processor: "NVIDIA Custom Tegra",
        memory: "4 GB",
        graphics: "NVIDIA Custom Tegra",
        storage: "14 GB",
      },
      recommended: {
        os: "Nintendo Switch System",
        processor: "NVIDIA Custom Tegra",
        memory: "4 GB",
        graphics: "NVIDIA Custom Tegra",
        storage: "14 GB",
      },
    },
    features: [
      "Mundo abierto expansivo",
      "Mecánicas de construcción",
      "Puzles innovadores",
      "Narrativa épica",
    ],
  },
  {
    id: "game6",
    title: "God of War Ragnarök",
    category: "accion",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
    description:
      "Kratos y Atreus deben enfrentarse al Ragnarök mientras exploran los Nueve Reinos.",
    developer: "Santa Monica Studio",
    releaseDate: "2022-11-09",
    platforms: ["PlayStation 5", "PlayStation 4"],
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500",
      "https://images.unsplash.com/photo-1542751110-97427bb1f711?w=500",
    ],
    requirements: {
      minimum: {
        os: "PlayStation 4",
        processor: "Custom AMD Jaguar 8-core",
        memory: "8 GB",
        graphics: "Custom AMD Radeon GPU",
        storage: "84 GB",
      },
      recommended: {
        os: "PlayStation 5",
        processor: "Custom AMD Zen 2 8-core",
        memory: "16 GB",
        graphics: "Custom AMD RDNA 2 GPU",
        storage: "84 GB SSD",
      },
    },
    features: [
      "Combate visceral",
      "Mundos mitológicos",
      "Narrativa emocionante",
      "Gráficos impresionantes",
    ],
  },
  {
    id: "game7",
    title: "Elden Ring",
    category: "rpg",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1604906590733-9e6249de168d?w=500",
    description:
      "Explora el Mundo Intermedio, un mundo de fantasía creado por Hidetaka Miyazaki y George R.R. Martin.",
    developer: "FromSoftware",
    releaseDate: "2022-02-25",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.6,
    gallery: [
      "https://images.unsplash.com/photo-1604906590733-9e6249de168d?w=500",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
      "https://images.unsplash.com/photo-1592155945905-7a4b23e9c9c5?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10",
        processor: "Intel Core i5-8400 o AMD Ryzen 3 3300X",
        memory: "12 GB",
        graphics: "NVIDIA GeForce GTX 1060 3GB o AMD Radeon RX 580 4GB",
        storage: "60 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700K o AMD Ryzen 5 3600X",
        memory: "16 GB",
        graphics: "NVIDIA GeForce GTX 1070 8GB o AMD Radeon RX Vega 56 8GB",
        storage: "60 GB SSD",
      },
    },
    features: [
      "Mundo abierto vasto",
      "Combate desafiante",
      "Historia profunda",
      "Personalización de personaje",
    ],
  },
  {
    id: "game8",
    title: "Hogwarts Legacy",
    category: "aventura",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
    description:
      "Explora el mundo mágico de Hogwarts en el siglo XIX antes de los eventos de Harry Potter.",
    developer: "Avalanche Software",
    releaseDate: "2023-02-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500",
      "https://images.unsplash.com/photo-1542751110-97427bb1f711?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600U o AMD Ryzen 5 1400",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 960 4GB o AMD Radeon RX 470 4GB",
        storage: "85 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700 o AMD Ryzen 5 3600",
        memory: "16 GB",
        graphics: "NVIDIA GeForce GTX 1080 Ti o AMD Radeon RX 5700 XT",
        storage: "85 GB SSD",
      },
    },
    features: [
      "Mundo abierto mágico",
      "Sistema de hechizos",
      "Personalización de personaje",
      "Criaturas mágicas",
    ],
  },
  {
    id: "game9",
    title: "Diablo IV",
    category: "rpg",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
    description:
      "Regresa a la oscuridad de Santuario en la última entrega de la aclamada saga de acción y rol.",
    developer: "Blizzard Entertainment",
    releaseDate: "2023-06-06",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500",
      "https://images.unsplash.com/photo-1604906590733-9e6249de168d?w=500",
      "https://images.unsplash.com/photo-1592155945905-7a4b23e9c9c5?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4670K o AMD Ryzen 3 1300X",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 970 o AMD Radeon RX 470",
        storage: "90 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-9600K o AMD Ryzen 5 2600",
        memory: "16 GB",
        graphics: "NVIDIA GeForce GTX 1080 o AMD Radeon RX 5700",
        storage: "90 GB SSD",
      },
    },
    features: [
      "Mundo abierto compartido",
      "Clases de personajes únicas",
      "Combate visceral",
      "Historia oscura",
    ],
  },
  {
    id: "game10",
    title: "Starfield",
    category: "rpg",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500",
    description:
      "Explora el espacio exterior en este nuevo RPG de los creadores de The Elder Scrolls.",
    developer: "Bethesda Game Studios",
    releaseDate: "2023-09-06",
    platforms: ["PC", "Xbox Series X/S"],
    rating: 4.1,
    gallery: [
      "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=500",
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4e73?w=500",
      "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 5 2600X o Intel Core i7-6800K",
        memory: "16 GB",
        graphics: "AMD Radeon RX 5700 o NVIDIA GeForce 1070 Ti",
        storage: "125 GB SSD",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 5 3600X o Intel i5-10600K",
        memory: "16 GB",
        graphics: "AMD Radeon RX 6800 XT o NVIDIA GeForce RTX 2080",
        storage: "125 GB SSD",
      },
    },
    features: [
      "Exploración espacial",
      "Más de 1000 planetas",
      "Personalización de nave",
      "Múltiples facciones",
    ],
  },
  {
    id: "game11",
    title: "Street Fighter 6",
    category: "deportes",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
    description:
      "La legendaria saga de lucha regresa con un nuevo motor gráfico y mecánicas mejoradas.",
    developer: "Capcom",
    releaseDate: "2023-06-02",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.6,
    gallery: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6500 o AMD Ryzen 3 1200",
        memory: "8 GB",
        graphics: "NVIDIA GeForce GTX 1060 o AMD Radeon RX 580",
        storage: "60 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-9700K o AMD Ryzen 5 3600",
        memory: "16 GB",
        graphics: "NVIDIA GeForce RTX 2070 o AMD Radeon RX 5700 XT",
        storage: "60 GB SSD",
      },
    },
    features: [
      "Sistema de combate modernizado",
      "Modo historia inmersivo",
      "Creador de personajes",
      "Modos en línea mejorados",
    ],
  },
  {
    id: "game12",
    title: "Horizon Forbidden West",
    category: "accion",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500",
    description:
      "Acompaña a Aloy en un viaje a las misteriosas tierras prohibidas del oeste americano post-apocalíptico.",
    developer: "Guerrilla Games",
    releaseDate: "2022-02-18",
    platforms: ["PlayStation 5", "PlayStation 4"],
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500",
      "https://images.unsplash.com/photo-1542751110-97427bb1f711?w=500",
      "https://images.unsplash.com/photo-1604906590733-9e6249de168d?w=500",
    ],
    requirements: {
      minimum: {
        os: "PlayStation 4",
        processor: "Custom AMD Jaguar 8-core",
        memory: "8 GB",
        graphics: "Custom AMD Radeon GPU",
        storage: "90 GB",
      },
      recommended: {
        os: "PlayStation 5",
        processor: "Custom AMD Zen 2 8-core",
        memory: "16 GB",
        graphics: "Custom AMD RDNA 2 GPU",
        storage: "90 GB SSD",
      },
    },
    features: [
      "Mundo abierto impresionante",
      "Mecánicas de combate mejoradas",
      "Máquinas gigantes",
      "Narrativa emocionante",
    ],
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

// Función para obtener juegos relacionados (misma categoría, excluyendo el actual)
function getRelatedGames(currentGameId, limit = 4) {
  const currentGame = getGameById(currentGameId);
  if (!currentGame) return [];

  return gamesDatabase
    .filter(
      (game) =>
        game.category === currentGame.category && game.id !== currentGameId
    )
    .slice(0, limit);
}

// Función para buscar juegos
function searchGames(query) {
  const queryLower = query.toLowerCase();
  return gamesDatabase.filter(
    (game) =>
      game.title.toLowerCase().includes(queryLower) ||
      game.description.toLowerCase().includes(queryLower) ||
      game.developer.toLowerCase().includes(queryLower) ||
      game.category.toLowerCase().includes(queryLower)
  );
}

// Función para obtener juegos destacados (los mejor valorados)
function getFeaturedGames(limit = 6) {
  return [...gamesDatabase].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

// Función para obtener juegos en oferta (simulación)
function getGamesOnSale(limit = 6) {
  // Simulación de juegos en oferta
  const gamesOnSale = gamesDatabase.map((game) => ({
    ...game,
    originalPrice: game.price,
    price: game.price * 0.75, // 25% de descuento
    discount: 25,
  }));

  return gamesOnSale.slice(0, limit);
}

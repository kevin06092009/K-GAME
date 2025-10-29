// ============================================
// BASE DE DATOS DE JUEGOS K-GAME
// ============================================

const gamesDatabase = [
  {
    id: "game_gta5",
    title: "Grand Theft Auto V",
    category: "accion",
    price: 189.9,
    image: "./IMAGENES/GTA5.webp",
    description:
      "Vive la experiencia definitiva de mundo abierto con Grand Theft Auto V. Explora Los Santos y el condado de Blaine en una aventura llena de acción, crimen y libertad total.",
    developer: "Rockstar Games",
    releaseDate: "2013-09-17",
    platforms: [
      "PC",
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X/S",
      "Xbox One",
    ],
    rating: 4.8,
    gallery: [
      "https://images.unsplash.com/photo-1618941418683-d7b3b9648d1a?w=500",
      "https://images.unsplash.com/photo-1617745279631-7402f7c6a37e?w=500",
      "https://images.unsplash.com/photo-1615906654272-05b9b401e3b2?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3470 o AMD FX-8350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 660 2GB o AMD HD 7870 2GB",
        storage: "110 GB",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4770K o AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB o AMD Radeon RX 580",
        storage: "110 GB SSD",
      },
    },
    features: [
      "Mundo abierto enorme y detallado",
      "Tres personajes jugables con historias entrelazadas",
      "Misiones dinámicas y libertad total",
      "Modo multijugador GTA Online",
      "Actualizaciones y eventos constantes",
    ],
  },

  {
    id: "game_minecraft",
    title: "Minecraft",
    category: "aventura",
    price: 129.9,
    image: "./IMAGENES/Minecraft.webp",
    description:
      "Explora, construye y sobrevive en un mundo abierto generado aleatoriamente. Crea todo lo que imagines, desde simples casas hasta ciudades enteras, y juega solo o con amigos en servidores multijugador.",
    developer: "Mojang Studios",
    releaseDate: "2011-11-18",
    platforms: [
      "PC",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch",
      "Mobile",
    ],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1611791203804-3b1a0a05da8f?w=500",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500",
      "https://images.unsplash.com/photo-1610465299996-36e4e9b06358?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-3210 o AMD A8-7600 APU",
        memory: "4 GB RAM",
        graphics: "Intel HD Graphics 4000 o AMD Radeon R5",
        storage: "2 GB disponibles",
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i5-4690 o AMD A10-7800",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce 700 Series o AMD Radeon Rx 200 Series",
        storage: "4 GB SSD",
      },
    },
    features: [
      "Modo supervivencia, creativo y aventura",
      "Generación infinita de mundos aleatorios",
      "Multijugador con servidores y realms",
      "Sistema de crafteo avanzado y encantamientos",
      "Soporte completo para mods y texturas personalizadas",
    ],
  },

  {
    id: "game_fortnite",
    title: "Fortnite",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/Fortnite.webp",
    description:
      "Salta del autobús de batalla y enfréntate a jugadores de todo el mundo en el icónico modo Battle Royale. Construye, dispara y sobrevive para ser el último en pie. Disfruta también de los modos Creativo y Salvar el Mundo.",
    developer: "Epic Games",
    releaseDate: "2017-07-21",
    platforms: [
      "PC",
      "PlayStation 5",
      "Xbox Series X/S",
      "Nintendo Switch",
      "Mobile",
    ],
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1613085806820-724a83b7ed9c?w=500",
      "https://images.unsplash.com/photo-1593113598332-cd3b50a51c2d?w=500",
      "https://images.unsplash.com/photo-1600962815726-457c58d1a09a?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-3225 o AMD Ryzen 3 3300U",
        memory: "8 GB RAM",
        graphics: "Intel HD 4000 o AMD Radeon Vega 8",
        storage: "30 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i5-7300U o AMD Ryzen 5 6600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 o AMD Radeon R9 280",
        storage: "30 GB SSD",
      },
    },
    features: [
      "Modo Battle Royale con hasta 100 jugadores",
      "Construcción rápida y destrucción estratégica",
      "Eventos en vivo y colaboraciones con franquicias famosas",
      "Modo Creativo con herramientas para construir tus propios mundos",
      "Actualizaciones y temporadas con contenido nuevo constantemente",
    ],
  },
  // … y así sigue con el resto de los juegos (Modern Warfare III, FC 26, Zelda, RDR2, etc.)
  {
    id: "game_cod_mw3",
    title: "Call of Duty: Modern Warfare III",
    category: "shooter",
    price: 299.9,
    image: "./IMAGENES/Call-of-Duty-Modern-Warfare-III.webp",
    description:
      "Call of Duty: Modern Warfare III continúa la épica saga con combates intensos, un modo multijugador rediseñado y una campaña cinematográfica llena de acción. Enfréntate a Makarov y vive la guerra moderna como nunca antes.",
    developer: "Infinity Ward / Sledgehammer Games",
    releaseDate: "2023-11-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1619681221044-3e9c49e90a38?w=500",
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=500",
      "https://images.unsplash.com/photo-1603791452906-bc3ba3d0d0d3?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600 o AMD Ryzen 5 1400",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 960 o AMD Radeon RX 470",
        storage: "150 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-8700K o AMD Ryzen 7 2700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 3060 o AMD Radeon RX 6700 XT",
        storage: "150 GB SSD",
      },
    },
    features: [
      "Campaña cinematográfica con misiones abiertas y estratégicas",
      "Multijugador con mapas clásicos remasterizados",
      "Modo Zombis cooperativo de mundo abierto",
      "Personalización avanzada de armas y equipamiento",
      "Cross-play completo entre plataformas",
    ],
  },
  {
    id: "game_fc26",
    title: "EA Sports FC 26",
    category: "deportes",
    price: 249.9,
    image: "./IMAGENES/FC26.webp",
    description:
      "EA Sports FC 26 redefine el realismo futbolístico con IA predictiva, animaciones HyperMotionV+ y un rediseño completo de Ultimate Team. Cada partido es una experiencia auténtica, intensa y estratégica.",
    developer: "EA Sports",
    releaseDate: "2025-09-27",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K o AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 Ti o AMD Radeon RX 570",
        storage: "100 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-9700 o AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2060 o AMD Radeon RX 6600 XT",
        storage: "100 GB SSD",
      },
    },
    features: [
      "Tecnología HyperMotionV+ de nueva generación",
      "Ultimate Team con evoluciones permanentes",
      "Modo Carrera con entrenadores tácticos en tiempo real",
      "Volta Football completamente renovado",
      "Cross-play total entre consolas y PC",
    ],
  },
  {
    id: "game_zelda_botw",
    title: "The Legend of Zelda: Breath of the Wild",
    category: "aventura",
    price: 219.9,
    image: "./IMAGENES/The-Legend-of-Zelda-Breath-of-the-Wild.webp",
    description:
      "Explora un vasto mundo abierto lleno de misterios, templos antiguos y enemigos formidables. Vive una aventura épica como Link para derrotar a Ganon y salvar el reino de Hyrule.",
    developer: "Nintendo",
    releaseDate: "2017-03-03",
    platforms: ["Nintendo Switch", "Wii U"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1521199438053-7c54b2100644?w=500",
      "https://images.unsplash.com/photo-1628260412298-6e4a8a33c32b?w=500",
      "https://images.unsplash.com/photo-1587399863367-6dc6d8d8f89a?w=500",
    ],
    requirements: {
      minimum: {
        os: "Nintendo Switch OS / Wii U System",
        processor: "Custom NVIDIA Tegra / IBM PowerPC",
        memory: "4 GB RAM",
        graphics: "NVIDIA Maxwell GPU / AMD Radeon HD 7800 equivalente",
        storage: "13.4 GB disponibles",
      },
      recommended: {
        os: "Nintendo Switch OS",
        processor: "Custom NVIDIA Tegra X1+",
        memory: "4 GB RAM",
        graphics: "NVIDIA Maxwell optimizado",
        storage: "32 GB internos o tarjeta microSD",
      },
    },
    features: [
      "Mundo abierto inmenso y dinámico",
      "Sistema de clima y física realista",
      "Cocina, caza y escalada libre",
      "Más de 120 santuarios y desafíos ocultos",
      "Combate con armas, arcos y poderes elementales",
    ],
  },
  {
    id: "game_rdr2",
    title: "Red Dead Redemption 2",
    category: "aventura",
    price: 239.9,
    image: "./IMAGENES/Red-Dead-Redemption-2.webp",
    description:
      "Vive la épica historia del forajido Arthur Morgan y la banda Van der Linde en el ocaso del Viejo Oeste. Explora un mundo abierto lleno de vida, peligros y decisiones que marcarán tu destino.",
    developer: "Rockstar Games",
    releaseDate: "2018-10-26",
    platforms: ["PC", "PlayStation 4", "Xbox One"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1581091215367-59ab6c5b3c34?w=500",
      "https://images.unsplash.com/photo-1618085221360-46cfea1c8c49?w=500",
      "https://images.unsplash.com/photo-1593612487848-2f57e0dc0cb5?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 770 / AMD Radeon R9 280",
        storage: "150 GB disponibles",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4770K / AMD Ryzen 5 1500X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
        storage: "150 GB SSD",
      },
    },
    features: [
      "Mundo abierto vivo y realista",
      "Narrativa cinematográfica con decisiones morales",
      "Sistema de honor dinámico",
      "Caza, pesca y supervivencia en entornos naturales",
      "Modo multijugador Red Dead Online incluido",
    ],
  },
  {
    id: "game_cyberpunk2077",
    title: "Cyberpunk 2077",
    category: "rpg",
    price: 199.9,
    image: "./IMAGENES/Cyberpunk-2077.webp",
    description:
      "Explora Night City, una metrópoli obsesionada con el poder, el lujo y la modificación corporal. Juega como V y define tu camino en este mundo abierto futurista.",
    developer: "CD Projekt Red",
    releaseDate: "2020-12-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1606096529274-76ce464f1e38?w=500",
      "https://images.unsplash.com/photo-1607282403333-9f74c672ba61?w=500",
      "https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K / AMD FX-8310",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
        storage: "70 GB disponibles",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790 / AMD Ryzen 3 3200G",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580 8GB",
        storage: "70 GB SSD",
      },
    },
    features: [
      "Mundo abierto futurista",
      "Narrativa ramificada",
      "Personalización total del personaje",
      "Misiones secundarias profundas y variadas",
    ],
  },

  {
    id: "game_eldenring",
    title: "Elden Ring",
    category: "rpg",
    price: 259.9,
    image: "./IMAGENES/Elden Ring.webp",
    description:
      "Embárcate en una aventura épica en las Tierras Intermedias, un vasto mundo lleno de misterios, enemigos formidables y una historia escrita por George R. R. Martin.",
    developer: "FromSoftware",
    releaseDate: "2022-02-25",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1645785348992-aaa934f0bcfa?w=500",
      "https://images.unsplash.com/photo-1645200665377-b9a1c68a8f54?w=500",
      "https://images.unsplash.com/photo-1645732214850-8c4c69c38d23?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
        memory: "12 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "60 GB disponibles",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX Vega 56",
        storage: "60 GB SSD",
      },
    },
    features: [
      "Mundo abierto interconectado",
      "Combate desafiante y profundo",
      "Exploración sin límites",
      "Diseño artístico excepcional",
    ],
  },

  {
    id: "game_gowragnarok",
    title: "God of War: Ragnarök",
    category: "aventura",
    price: 289.9,
    image: "./IMAGENES/God of War-Ragnarök.webp",
    description:
      "Acompaña a Kratos y Atreus en una travesía épica por los Nueve Reinos mientras enfrentan el Ragnarök. Una historia sobre el destino, la familia y el poder.",
    developer: "Santa Monica Studio",
    releaseDate: "2022-11-09",
    platforms: ["PlayStation 5", "PlayStation 4"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1670879732968-3ed99f5b2fcf?w=500",
      "https://images.unsplash.com/photo-1670880039392-67fdc74e07df?w=500",
      "https://images.unsplash.com/photo-1670879771169-23dbf9302a6c?w=500",
    ],
    requirements: {
      minimum: {
        os: "PlayStation 4 o superior",
        processor: "CPU AMD Jaguar 8 núcleos",
        memory: "8 GB RAM",
        graphics: "GPU GCN Radeon",
        storage: "90 GB disponibles",
      },
      recommended: {
        os: "PlayStation 5",
        processor: "Custom AMD Zen 2",
        memory: "16 GB RAM",
        graphics: "GPU RDNA 2",
        storage: "90 GB SSD",
      },
    },
    features: [
      "Historia cinematográfica",
      "Combate brutal y fluido",
      "Múltiples reinos por explorar",
      "Gráficos de nueva generación",
    ],
  },

  {
    id: "game_witcher3",
    title: "The Witcher 3: Wild Hunt",
    category: "rpg",
    price: 189.9,
    image: "./IMAGENES/The-Witcher-3-Wild-Hunt.webp",
    description:
      "Juega como Geralt de Rivia, un cazador de monstruos en busca de su hija adoptiva. Una historia rica, decisiones morales y un mundo abierto increíblemente detallado.",
    developer: "CD Projekt Red",
    releaseDate: "2015-05-19",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.8,
    gallery: [
      "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500",
      "https://images.unsplash.com/photo-1601580008092-6f5fdbef7f6d?w=500",
      "https://images.unsplash.com/photo-1603531390854-40d0c389f89b?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K / AMD Phenom II X4 940",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 660 / AMD Radeon HD 7870",
        storage: "50 GB disponibles",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-3770 / AMD FX-8350",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD Radeon RX 580",
        storage: "50 GB SSD",
      },
    },
    features: [
      "Mundo abierto inmenso",
      "Misiones ricas en narrativa",
      "Sistema de alquimia y combate táctico",
      "Expansiones premiadas incluidas",
    ],
  },

  {
    id: "game_amongus",
    title: "Among Us",
    category: "estrategia",
    price: 19.9,
    image: "./IMAGENES/Among Us.webp",
    description:
      "Un juego de engaño y deducción donde los tripulantes deben descubrir quién es el impostor antes de que sea demasiado tarde.",
    developer: "Innersloth",
    releaseDate: "2018-06-15",
    platforms: [
      "PC",
      "Android",
      "iOS",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox One",
    ],
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1614366143406-64f7c81ad5d4?w=500",
      "https://images.unsplash.com/photo-1614366144042-1c807e2a17d1?w=500",
      "https://images.unsplash.com/photo-1614366143923-83b85bbff1ce?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 7 32-bit",
        processor: "Intel Pentium 4",
        memory: "1 GB RAM",
        graphics: "Integrada",
        storage: "250 MB disponibles",
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel i3 o superior",
        memory: "4 GB RAM",
        graphics: "Integrada",
        storage: "500 MB disponibles",
      },
    },
    features: [
      "Modo multijugador online o local",
      "Partidas rápidas y divertidas",
      "Personalización de personajes",
      "Sistema de chat y votación",
    ],
  },
  {
    id: "game_apex",
    title: "Apex Legends",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/Apex-Legends.webp",
    description:
      "Un shooter gratuito por equipos ambientado en el universo de Titanfall. Elige entre leyendas únicas y domina combates tácticos con habilidades especiales en un campo de batalla dinámico.",
    developer: "Respawn Entertainment",
    releaseDate: "2019-02-04",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.6,
    gallery: [
      "https://images.unsplash.com/photo-1613771404721-1a77b33a1dff?w=500",
      "https://images.unsplash.com/photo-1606813902914-c3dfd3c9e79e?w=500",
      "https://images.unsplash.com/photo-1609845768475-5b9a4ff8a2b8?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-3570K / AMD FX-6350",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 970 / AMD Radeon R9 290",
        storage: "75 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel i7-4790 / AMD Ryzen 5 1500X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce GTX 1070 / AMD Radeon RX 580",
        storage: "75 GB SSD",
      },
    },
    features: [
      "Combate por equipos de tres jugadores",
      "Leyendas con habilidades únicas",
      "Sistema de ping avanzado",
      "Cross-play entre plataformas",
      "Actualizaciones y temporadas regulares",
    ],
  },
  {
    id: "game_lol",
    title: "League of Legends",
    category: "moba",
    price: 0,
    image: "./IMAGENES/League-of-Legends.webp",
    description:
      "Uno de los MOBA más populares del mundo. Elige entre más de 160 campeones y compite en intensas batallas 5v5 para destruir el nexo enemigo.",
    developer: "Riot Games",
    releaseDate: "2009-10-27",
    platforms: ["PC"],
    rating: 4.7,
    gallery: [
      "https://images.unsplash.com/photo-1603697820312-fda4e67f3bfb?w=500",
      "https://images.unsplash.com/photo-1626785774564-2c2b6c676c54?w=500",
      "https://images.unsplash.com/photo-1610384578213-14a82a35bb3c?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-530 / AMD A6-3650",
        memory: "4 GB RAM",
        graphics: "NVIDIA GeForce 9600GT / AMD HD 6570",
        storage: "16 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i5-3300 / AMD Ryzen 3 1200",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 / AMD RX 560",
        storage: "20 GB SSD",
      },
    },
    features: [
      "Más de 160 campeones jugables",
      "Partidas clasificatorias y casuales",
      "Eventos temáticos y skins exclusivas",
      "Modo ARAM y Clash competitivo",
      "Ecosistema de eSports global",
    ],
  },
  {
    id: "game_valorant",
    title: "Valorant",
    category: "shooter táctico",
    price: 0,
    image: "./IMAGENES/Valorant.webp",
    description:
      "Shooter táctico 5v5 donde la precisión y las habilidades únicas de los agentes definen la victoria. Estrategia, reflejos y trabajo en equipo son la clave.",
    developer: "Riot Games",
    releaseDate: "2020-06-02",
    platforms: ["PC"],
    rating: 4.6,
    gallery: [
      "https://images.unsplash.com/photo-1598124146163-9f2916a3b9d1?w=500",
      "https://images.unsplash.com/photo-1621887859862-18b5b60a5e76?w=500",
      "https://images.unsplash.com/photo-1604671801907-982e8a8b87df?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3-4150",
        memory: "4 GB RAM",
        graphics: "Intel HD 3000",
        storage: "30 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i5-9400F / AMD Ryzen 5 2600X",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1050 Ti",
        storage: "30 GB SSD",
      },
    },
    features: [
      "Combate táctico 5v5",
      "Agentes con habilidades únicas",
      "Mapas estratégicos y balanceados",
      "Antitrampas Vanguard",
      "Eventos y actualizaciones constantes",
    ],
  },
  {
    id: "game_cs2",
    title: "Counter-Strike 2",
    category: "shooter táctico",
    price: 0,
    image: "./IMAGENES/Counter-Strike 2.webp",
    description:
      "La evolución del legendario CS:GO. Experiencia táctica mejorada con el motor Source 2, gráficos renovados y jugabilidad precisa que define el género.",
    developer: "Valve",
    releaseDate: "2023-09-27",
    platforms: ["PC"],
    rating: 4.8,
    gallery: [
      "https://images.unsplash.com/photo-1629841372880-fc07f7e19d8b?w=500",
      "https://images.unsplash.com/photo-1629714832798-7cbf60d7a8c3?w=500",
      "https://images.unsplash.com/photo-1633002346928-cbda1a64e3a7?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-2500K",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD RX 580",
        storage: "85 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 7 2700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 2060 / AMD RX 6600 XT",
        storage: "85 GB SSD",
      },
    },
    features: [
      "Motor Source 2 con mejoras visuales",
      "Mapas rediseñados con iluminación realista",
      "Granadas dinámicas y físicas avanzadas",
      "Matchmaking por habilidad y Premier Mode",
      "Soporte completo para skins y talleres",
    ],
  },
  {
    id: "game_overwatch2",
    title: "Overwatch 2",
    category: "shooter por equipos",
    price: 0,
    image: "./IMAGENES/Overwatch 2.webp",
    description:
      "Shooter 5v5 con héroes únicos, habilidades espectaculares y acción en equipo. Domina la estrategia, la coordinación y la creatividad en cada partida.",
    developer: "Blizzard Entertainment",
    releaseDate: "2022-10-04",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.3,
    gallery: [
      "https://images.unsplash.com/photo-1612725187877-f1b9c934da38?w=500",
      "https://images.unsplash.com/photo-1628674724652-5f4b2c3c5bbd?w=500",
      "https://images.unsplash.com/photo-1626271874925-68f6a7c3f187?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i3 / AMD Phenom X3 8650",
        memory: "6 GB RAM",
        graphics: "NVIDIA GeForce GTX 600 / AMD Radeon HD 7000",
        storage: "50 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7 / AMD Ryzen 5",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 / AMD RX 580",
        storage: "50 GB SSD",
      },
    },
    features: [
      "Héroes únicos con habilidades especiales",
      "Modo PvP 5v5 competitivo",
      "Eventos y temporadas temáticas",
      "Progresión y personalización de héroes",
      "Cross-play entre plataformas",
    ],
  },
  {
    id: "game_re4remake",
    title: "Resident Evil 4 Remake",
    category: "acción y terror",
    price: 59.99,
    image: "./IMAGENES/Resident-Evil.webp",
    description:
      "Reimagina el clásico de survival horror con gráficos renovados, jugabilidad moderna y una historia intensa protagonizada por Leon S. Kennedy.",
    developer: "Capcom",
    releaseDate: "2023-03-24",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1679415204712-36e5d69a1f79?w=500",
      "https://images.unsplash.com/photo-1679415204769-38c86e2e2b20?w=500",
      "https://images.unsplash.com/photo-1679415204800-8b212dd7fa67?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
        memory: "8 GB RAM",
        graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
        storage: "60 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "AMD Ryzen 5 3600 / Intel Core i7-8700",
        memory: "16 GB RAM",
        graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070",
        storage: "60 GB SSD",
      },
    },
    features: [
      "Gráficos completamente renovados en RE Engine",
      "Combate modernizado y cámaras dinámicas",
      "Sistema de sigilo mejorado",
      "Contenido adicional y modo mercenarios",
    ],
  },
  {
    id: "game_acmirage",
    title: "Assassin’s Creed Mirage",
    category: "aventura y sigilo",
    price: 49.99,
    image: "./IMAGENES/Assassin’s Creed Mirage.webp",
    description:
      "Vuelve a los orígenes de la saga con Basim en Bagdad. Un juego de sigilo, parkour y asesinatos ambientado en una era dorada del mundo islámico.",
    developer: "Ubisoft",
    releaseDate: "2023-10-05",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.4,
    gallery: [
      "https://images.unsplash.com/photo-1680270009354-904c3cb49c3e?w=500",
      "https://images.unsplash.com/photo-1680270009368-ecf2efb3f2b3?w=500",
      "https://images.unsplash.com/photo-1680270009399-bdf94ff81a3e?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-4790K / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 580",
        storage: "40 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-8700K / AMD Ryzen 5 3600",
        memory: "16 GB RAM",
        graphics: "NVIDIA RTX 2070 / AMD RX 5700 XT",
        storage: "40 GB SSD",
      },
    },
    features: [
      "Enfoque en el sigilo clásico",
      "Ambientación en Bagdad del siglo IX",
      "Narrativa centrada en los orígenes de los Asesinos",
      "Exploración, parkour y asesinatos fluidos",
    ],
  },
  {
    id: "game_hogwartslegacy",
    title: "Hogwarts Legacy",
    category: "aventura y fantasía",
    price: 59.99,
    image: "./IMAGENES/Hogwarts Legacy.webp",
    description:
      "Vive tu propia historia en el mundo mágico del siglo XIX. Explora Hogwarts, aprende hechizos y enfréntate a criaturas legendarias.",
    developer: "Avalanche Software",
    releaseDate: "2023-02-10",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.8,
    gallery: [
      "https://images.unsplash.com/photo-1680270109492-86c2926d829a?w=500",
      "https://images.unsplash.com/photo-1680270109545-8e0e3e3e0a8f?w=500",
      "https://images.unsplash.com/photo-1680270109574-7e08e06a9c88?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1070 / AMD RX Vega 56",
        storage: "85 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-8700 / AMD Ryzen 5 3600",
        memory: "32 GB RAM",
        graphics: "NVIDIA RTX 2080 Ti / AMD RX 6800 XT",
        storage: "85 GB SSD",
      },
    },
    features: [
      "Exploración libre en Hogwarts y Hogsmeade",
      "Sistema de combate mágico dinámico",
      "Personalización del personaje y casa",
      "Criaturas mágicas y secretos ocultos",
    ],
  },
  {
    id: "game_spiderman2",
    title: "Marvel’s Spider-Man 2",
    category: "acción y aventura",
    price: 69.99,
    image: "./IMAGENES/Spider-Man 2.webp",
    description:
      "Peter Parker y Miles Morales unen fuerzas en una historia épica exclusiva para PS5, enfrentándose a Venom y Kraven en una ciudad viva y detallada.",
    developer: "Insomniac Games",
    releaseDate: "2023-10-20",
    platforms: ["PlayStation 5"],
    rating: 4.9,
    gallery: [
      "https://images.unsplash.com/photo-1680270309573-932d8b8e3e2f?w=500",
      "https://images.unsplash.com/photo-1680270309601-3a4b53d3b92d?w=500",
      "https://images.unsplash.com/photo-1680270309630-9b3b0b1b3e7f?w=500",
    ],
    requirements: {
      minimum: { os: "PS5 exclusivo" },
      recommended: { os: "PS5 con SSD" },
    },
    features: [
      "Dos Spider-Man jugables: Peter y Miles",
      "Combate mejorado y fluido",
      "Gráficos de última generación en PS5",
      "Historia cinematográfica con decisiones morales",
    ],
  },
  {
    id: "game_battlefield2042",
    title: "Battlefield 2042",
    category: "shooter multijugador",
    price: 59.99,
    image: "./IMAGENES/Battlefield 2042.webp",
    description:
      "Guerras modernas a gran escala con hasta 128 jugadores. Destruye entornos, usa vehículos futuristas y domina el campo de batalla.",
    developer: "DICE / Electronic Arts",
    releaseDate: "2021-11-19",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
    rating: 4.0,
    gallery: [
      "https://images.unsplash.com/photo-1629726266585-2b28e8da22b5?w=500",
      "https://images.unsplash.com/photo-1629726266561-987c2f5a0b4b?w=500",
      "https://images.unsplash.com/photo-1629726266628-4e62a5192cf7?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "AMD Ryzen 5 1600 / Intel Core i5-6600K",
        memory: "8 GB RAM",
        graphics: "AMD RX 560 / NVIDIA GTX 1050 Ti",
        storage: "100 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "AMD Ryzen 7 2700X / Intel i7-4790",
        memory: "16 GB RAM",
        graphics: "AMD RX 6600 XT / NVIDIA RTX 3060",
        storage: "100 GB SSD",
      },
    },
    features: [
      "Mapas enormes con clima dinámico",
      "128 jugadores simultáneos",
      "Modos Portal y Hazard Zone",
      "Vehículos y armamento moderno",
    ],
  },
  {
    id: "game_pubg",
    title: "PUBG: Battlegrounds",
    category: "battle royale",
    price: 0,
    image: "./IMAGENES/PUBG-Battlegrounds.webp",
    description:
      "El pionero del género battle royale. Sobrevive, busca armas y sé el último en pie en intensos combates realistas.",
    developer: "KRAFTON",
    releaseDate: "2017-12-20",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Mobile", "Stadia"],
    rating: 4.5,
    gallery: [
      "https://images.unsplash.com/photo-1611606063088-7d04b2b9b39a?w=500",
      "https://images.unsplash.com/photo-1611606063121-1ef43a5e292d?w=500",
      "https://images.unsplash.com/photo-1611606063067-9f9e4a3a4d36?w=500",
    ],
    requirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel i5-4430 / AMD FX-6300",
        memory: "8 GB RAM",
        graphics: "NVIDIA GTX 960 / AMD R7 370",
        storage: "40 GB disponibles",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel i5-6600K / AMD Ryzen 5 1600",
        memory: "16 GB RAM",
        graphics: "NVIDIA GTX 1060 / AMD RX 580",
        storage: "40 GB SSD",
      },
    },
    features: [
      "Combate realista y estratégico",
      "Mapas variados y detallados",
      "Múltiples modos de juego",
      "Cross-play y sistema de rangos",
    ],
  },
  {
    id: "game_roblox",
    title: "Roblox",
    category: "sandbox / creatividad",
    price: 0,
    image: "./IMAGENES/Roblox.webp",
    description:
      "Plataforma en línea que permite a los jugadores crear, compartir y jugar millones de experiencias creadas por la comunidad.",
    developer: "Roblox Corporation",
    releaseDate: "2006-09-01",
    platforms: ["PC", "Xbox", "Mobile"],
    rating: 4.4,
    features: [
      "Millones de juegos creados por usuarios",
      "Herramientas de desarrollo integradas",
      "Sistema económico con Robux",
      "Multiplataforma y social",
    ],
  },
  {
    id: "game_supermarioodyssey",
    title: "Super Mario Odyssey",
    category: "plataformas y aventura",
    price: 59.99,
    image: "./IMAGENES/Super Mario Odyssey.webp",
    description:
      "Acompaña a Mario y Cappy en una aventura por el mundo para rescatar a Peach. Innovador, colorido y lleno de creatividad.",
    developer: "Nintendo",
    releaseDate: "2017-10-27",
    platforms: ["Nintendo Switch"],
    rating: 4.9,
    features: [
      "Exploración libre en reinos diversos",
      "Transformaciones con Cappy",
      "Modo cooperativo local",
      "Mundos coloridos y secretos ocultos",
    ],
  },
  {
    id: "game_genshinimpact",
    title: "Genshin Impact",
    category: "acción y aventura RPG",
    price: 0,
    image: "./IMAGENES/Genshin Impact.webp",
    description:
      "Explora el mundo de Teyvat, domina los elementos y lucha con un grupo de personajes únicos en este RPG de acción gratuito.",
    developer: "HoYoverse",
    releaseDate: "2020-09-28",
    platforms: [
      "PC",
      "PlayStation 5",
      "PlayStation 4",
      "Mobile",
      "Switch (próximamente)",
    ],
    rating: 4.8,
    features: [
      "Sistema de combate elemental dinámico",
      "Exploración libre y mundo abierto",
      "Eventos frecuentes y misiones cooperativas",
      "Estilo anime con música orquestal",
    ],
  },
  {
    id: "game_tlou2",
    title: "The Last of Us Part II",
    category: "aventura y drama",
    price: 49.99,
    image: "./IMAGENES/The last of us.webp",
    description:
      "Una historia emocional sobre venganza y redención. Ellie lucha por sobrevivir en un mundo devastado mientras enfrenta dilemas morales.",
    developer: "Naughty Dog",
    releaseDate: "2020-06-19",
    platforms: ["PlayStation 4", "PlayStation 5", "PC"],
    rating: 4.9,
    features: [
      "Narrativa cinematográfica de alto impacto",
      "Gráficos realistas y actuación facial avanzada",
      "Sigilo y combate visceral",
      "Banda sonora inmersiva y profunda",
    ],
  },
  {
    id: "game_mk1",
    title: "Mortal Kombat 1",
    category: "lucha",
    price: 69.99,
    image: "./IMAGENES/Mortal Kombat 1.webp",
    description:
      "Reinicio completo de la saga. Nuevas mecánicas, combates más sangrientos y un universo reimaginado por Liu Kang.",
    developer: "NetherRealm Studios",
    releaseDate: "2023-09-14",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Nintendo Switch"],
    rating: 4.7,
    features: [
      "Nuevas alianzas y universo reiniciado",
      "Modo historia cinematográfico",
      "Sistema de luchadores Kameo",
      "Fatalities espectaculares en nueva generación",
    ],
  },
  {
    id: "game_forzahorizon5",
    title: "Forza Horizon 5",
    category: "carreras y mundo abierto",
    price: 59.99,
    image: "./IMAGENES/Forza horizon.webp",
    description:
      "Explora México en el festival automovilístico más grande del mundo. Conduce cientos de autos en un entorno abierto y realista.",
    developer: "Playground Games",
    releaseDate: "2021-11-09",
    platforms: ["PC", "Xbox Series X/S"],
    rating: 4.9,
    features: [
      "Mapa de México inmenso y detallado",
      "Más de 500 autos disponibles",
      "Eventos dinámicos y temporadas",
      "Modo foto y exploración libre",
    ],
  },
  {
    id: "game_dbd",
    title: "Dead by Daylight",
    category: "terror multijugador",
    price: 19.99,
    image: "./IMAGENES/Dead by daylight.webp",
    description:
      "Juego asimétrico de 4 contra 1: sobrevive como víctima o caza como asesino en un mundo lleno de horror.",
    developer: "Behaviour Interactive",
    releaseDate: "2016-06-14",
    platforms: ["PC", "PlayStation 5", "Xbox Series X/S", "Switch", "Mobile"],
    rating: 4.6,
    features: [
      "Modo 4v1 asimétrico",
      "Asesinos icónicos del cine de terror",
      "Eventos y capítulos constantes",
      "Cross-play y progresión compartida",
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

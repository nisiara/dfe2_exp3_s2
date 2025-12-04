import { http, HttpResponse, delay, graphql} from "msw";

const eventos = [
  {
    id: "PT-001",
    nombre_evento: "Soda Stereo - Ecos",
    tipo_evento: "concierto",
    fecha: "2026-03-26",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "Espectáculo audiovisual y musical en homenaje a la legendaria banda Soda Stereo.",
    auspiciadores: ["Banco de Chile", "Movistar", "Cerveza Kross"],
    precios: {
      platea_alta: 40000,
      platea_baja: 60000,
      cancha: 85000,
      vip: 120000
    },
    detalles_artista: {
      nombre: "Soda Stereo (Homenaje)",
      pais_origen: "Argentina",
      generos: ["Rock Latino", "Pop"],
      tour: "Ecos"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/lot210_calugalistado.jpg"
  },
  {
    id: "PT-002",
    nombre_evento: "Festival del Huaso de Olmué",
    tipo_evento: "festival",
    fecha: "2026-01-15",
    locacion: "Anfiteatro Parque El Patagual",
    ciudad: "Olmué",
    hora: "21:30",
    descripcion: "Tradicional festival de folclore y música popular chilena.",
    auspiciadores: ["Municipalidad de Olmué", "TVN", "Entel"],
    precios: {
      general: 20000,
      palco: 45000
    },
    detalles_artista: {
      nombre: "Varios Artistas",
      pais_origen: "Chile/Internacional",
      generos: ["Folclore", "Música Popular"],
      duracion_dias: 4
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/olm034_calugalistado.jpg"
  },
  {
    id: "PT-004",
    nombre_evento: "Jurassic World The Experience",
    tipo_evento: "entretencion",
    fecha: "2025-11-25",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "10:00",
    descripcion: "Una experiencia inmersiva con dinosaurios a tamaño real.",
    auspiciadores: ["Universal Studios", "Banco Bci", "Ticketmaster"],
    precios: {
      general: 12000,
      vip_family: 30000
    },
    detalles_artista: {
      nombre: "Jurassic World",
      tipo: "Exhibición",
      franquicia: "Universal"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/wal251_calugalistado.jpg"
  },
  {
    id: "PT-008",
    nombre_evento: "31 Minutos - Radio Guaripolo 2",
    tipo_evento: "teatro",
    fecha: "2026-01-31",
    locacion: "Teatro Caupolicán",
    ciudad: "Santiago",
    hora: "17:00",
    descripcion: "El show infantil/familiar con los personajes de la famosa serie de televisión.",
    auspiciadores: ["Municipalidad de Santiago", "Canal 13", "Soprole"],
    precios: {
      galeria: 18000,
      cancha: 28000,
      palco: 45000
    },
    detalles_artista: {
      nombre: "31 Minutos",
      tipo: "Infantil/Familiar",
      personaje_principal: "Tulio Triviño"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/wal259_calugalistado.jpg"
  },
  {
    id: "PT-009",
    nombre_evento: "Megadeth - This was our life 2026",
    tipo_evento: "concierto",
    fecha: "2026-05-04",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "La banda de thrash metal de Dave Mustaine en su gira mundial.",
    auspiciadores: ["Hellfest", "Cerveza Kross", "Ticketmaster"],
    precios: {
      cancha: 55000,
      platea_baja: 80000
    },
    detalles_artista: {
      nombre: "Megadeth",
      pais_origen: "Estados Unidos",
      generos: ["Heavy Metal", "Thrash Metal"],
      lider: "Dave Mustaine"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/rec103_calugalistado.jpg"
  },
  {
    id: "PT-010",
    nombre_evento: "Bad Bunny - DeBÍ TiRAR MáS FOToS World Tour",
    tipo_evento: "concierto",
    fecha: "2026-01-09",
    locacion: "Quinta Vergara",
    ciudad: "Viña del Mar",
    hora: "22:00",
    descripcion: "El artista puertorriqueño más influyente del género urbano.",
    auspiciadores: ["Coca-Cola", "Spotify", "Municipalidad de Viña del Mar"],
    precios: {
      galeria: 50000,
      platea_vip: 150000,
      palco: 250000
    },
    detalles_artista: {
      nombre: "Bad Bunny",
      pais_origen: "Puerto Rico",
      generos: ["Reggaetón", "Trap"],
      album_promocion: "Un Verano Sin Ti"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/biz322_calugalistado.jpg"
  },
  {
    id: "PT-011",
    nombre_evento: "Doja Cat - Tour Ma Vie World Tour",
    tipo_evento: "concierto",
    fecha: "2026-02-10",
    locacion: "Parque Padre Hurtado",
    ciudad: "La Reina",
    hora: "20:00",
    descripcion: "Concierto al aire libre de la estrella pop y rapera estadounidense.",
    auspiciadores: ["Pepsi", "Fashion Nova"],
    precios: {
      general: 60000,
      vip_zona: 120000
    },
    detalles_artista: {
      nombre: "Doja Cat",
      pais_origen: "Estados Unidos",
      generos: ["Pop", "Hip Hop", "R&B"],
      tour: "Ma Vie"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/dgm158_calugalistado.jpg"
  },
  {
    id: "PT-012",
    nombre_evento: "Red Bull Batalla - Final Internacional 2026",
    tipo_evento: "concierto",
    fecha: "2026-04-11",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "19:00",
    descripcion: "La final mundial de la competencia de *freestyle* rap.",
    auspiciadores: ["Red Bull", "Movistar", "Adidas"],
    precios: {
      galeria: 25000,
      cancha: 40000
    },
    detalles_artista: {
      nombre: "MC's Internacionales",
      disciplina: "Freestyle Rap",
      organizacion: "Red Bull"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/rdb003v2_calugalistado.jpg"
  },
  {
    id: "PT-015",
    nombre_evento: "Chico Trujillo + Los Mirlos",
    tipo_evento: "concierto",
    fecha: "2025-11-28",
    locacion: "Factoría Italia",
    ciudad: "Providencia",
    hora: "20:00",
    descripcion: "Una noche de cumbia chilena y peruana con dos grandes de la música tropical.",
    auspiciadores: ["Cerveza Kross", "Municipalidad de Providencia"],
    precios: {
      general: 15000,
      palco: 25000
    },
    detalles_artista: {
      nombre: "Chico Trujillo / Los Mirlos",
      pais_origen: "Chile/Perú",
      generos: ["Cumbia", "Música Tropical"],
      formato: "Doble Show"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/cco054_calugalistado.jpg"
  },
  {
    id: "PT-016",
    nombre_evento: "Glenn Hughes - Tour De Despedida",
    tipo_evento: "concierto",
    fecha: "2025-11-27",
    locacion: "Teatro Coliseo",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "El ex bajista y vocalista de Deep Purple se despide de los escenarios chilenos.",
    auspiciadores: ["Rock & Pop", "Banco de Chile"],
    precios: {
      galeria: 30000,
      cancha: 45000
    },
    detalles_artista: {
      nombre: "Glenn Hughes",
      pais_origen: "Reino Unido",
      generos: ["Hard Rock", "Blues Rock"],
      banda_original: "Deep Purple"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/tsr092_calugalistado.jpg"
  },
  {
    id: "PT-N01",
    nombre_evento: "Festival de Guitarra Chile",
    tipo_evento: "festival",
    fecha: "2026-03-10",
    locacion: "Teatro Oriente",
    ciudad: "Providencia",
    hora: "20:00",
    descripcion: "El festival más grande de guitarra, con clínicas y conciertos de virtuosos nacionales e internacionales.",
    auspiciadores: ["Gibson", "Fender"],
    precios: {
      general: 30000
    },
    detalles_artista: {
      nombre: "Varios Guitarristas",
      generos: ["Instrumental", "Rock", "Jazz"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/zoc057v2_calugalistado.jpg"
  },
  {
    id: "PT-N02",
    nombre_evento: "Gira Concierto Acústico Los Jaivas",
    tipo_evento: "concierto",
    fecha: "2025-11-29",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "La banda chilena en un formato íntimo, repasando sus grandes clásicos.",
    auspiciadores: ["Banco de Chile", "Radio Futuro"],
    precios: {
      platea: 50000
    },
    detalles_artista: {
      nombre: "Los Jaivas",
      generos: ["Rock Progresivo", "Folclore Chileno"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/ppr026_calugalistado.jpg"
  },
  {
    id: "PT-N03",
    nombre_evento: "Monster Jam",
    tipo_evento: "deporte",
    fecha: "2025-12-05",
    locacion: "Estadio Nacional Julio Martínez",
    ciudad: "Santiago",
    hora: "15:00",
    descripcion: "El show de camionetas monstruo más famoso del mundo, con acrobacias extremas.",
    auspiciadores: ["Ford", "Movistar", "Gatorade"],
    precios: {
      galeria: 15000,
      campo: 40000
    },
    detalles_artista: {
      nombre: "Monster Trucks",
      disciplina: "Motorsport",
      show: "Freestyle"
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/wal248_calugalistado.jpg"
  },
  {
    id: "PT-N04",
    nombre_evento: "Inti Illimani Histórico - Reencuentro",
    tipo_evento: "concierto",
    fecha: "2025-12-26",
    locacion: "Teatro Caupolicán",
    ciudad: "Santiago",
    hora: "20:30",
    descripcion: "Concierto que celebra la trayectoria del grupo emblema de la Nueva Canción Chilena.",
    auspiciadores: ["Municipalidad de Santiago", "Canal 13"],
    precios: {
      galeria: 18000,
      platea: 35000
    },
    detalles_artista: {
      nombre: "Inti Illimani Histórico",
      pais_origen: "Chile",
      generos: ["Folclore", "Nueva Canción Chilena"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/emk131_calugalistado.jpg"
  },
  {
    id: "PT-N05",
    nombre_evento: "Pierce The Veil - I Can't Hear You World Tour",
    tipo_evento: "concierto",
    fecha: "2025-12-10",
    locacion: "Teatro Coliseo",
    ciudad: "Santiago",
    hora: "20:00",
    descripcion: "La banda estadounidense de post-hardcore en su regreso a Chile.",
    auspiciadores: ["Rockaxis", "Converse"],
    precios: {
      general: 35000,
      early_entry: 50000
    },
    detalles_artista: {
      nombre: "Pierce The Veil",
      pais_origen: "Estados Unidos",
      generos: ["Post-Hardcore", "Emo"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/dgm143_calugalistado.jpg"
  },
  {
    id: "PT-N06",
    nombre_evento: "Perversión Fest",
    tipo_evento: "festival",
    fecha: "2025-12-13",
    locacion: "Teatro Caupolicán",
    ciudad: "Santiago",
    hora: "18:00",
    descripcion: "Festival de música alternativa y underground con bandas nacionales e internacionales.",
    auspiciadores: ["Cerveza Kross"],
    precios: {
      general: 25000
    },
    detalles_artista: {
      nombre: "Varios Artistas",
      generos: ["Rock", "Underground"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/cco055_calugalistado.jpg"
  },
  {
    id: "PT-N07",
    nombre_evento: "Ritual of the Damned",
    tipo_evento: "concierto",
    fecha: "2026-01-20",
    locacion: "Blondie",
    ciudad: "Santiago",
    hora: "22:00",
    descripcion: "Noche de Metal Extremo y música oscura en el corazón de Santiago.",
    auspiciadores: ["Nescafé", "Red Bull"],
    precios: {
      general: 15000
    },
    detalles_artista: {
      nombre: "Bandas de Metal",
      generos: ["Black Metal", "Death Metal"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/cco059_calugalistado.jpg"
  },
  {
    id: "PT-N08",
    nombre_evento: "Claudio Narea - Sudamerican Rocker",
    tipo_evento: "concierto",
    fecha: "2025-12-27",
    locacion: "Teatro Nescafé de las Artes",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "El ex guitarrista de Los Prisioneros interpretando sus éxitos y material propio.",
    auspiciadores: ["BancoEstado", "Radio Sonar"],
    precios: {
      platea_baja: 25000,
      platea_alta: 18000
    },
    detalles_artista: {
      nombre: "Claudio Narea",
      pais_origen: "Chile",
      generos: ["Rock", "Pop"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/cco057_calugalistado.jpg"
  },
  {
    id: "PT-N09",
    nombre_evento: "La Brígida Orquesta + Ana Tijoux",
    tipo_evento: "concierto",
    fecha: "2026-01-17",
    locacion: "Anfiteatro Parque El Patagual",
    ciudad: "Olmué",
    hora: "20:00",
    descripcion: "Combinación de jazz, hip-hop y líricas sociales con dos exponentes chilenos.",
    auspiciadores: ["Fondart", "Pisco Mistral"],
    precios: {
      general: 20000
    },
    detalles_artista: {
      nombre: "La Brígida Orquesta / Ana Tijoux",
      pais_origen: "Chile",
      generos: ["Hip Hop", "Jazz"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/cco074_calugalistado.jpg"
  },
  {
    id: "PT-N10",
    nombre_evento: "Love the 90's Chile",
    tipo_evento: "festival",
    fecha: "2026-03-20",
    locacion: "Movistar Arena",
    ciudad: "Santiago",
    hora: "21:00",
    descripcion: "El festival que trae de vuelta a las estrellas pop y dance más grandes de los años 90.",
    auspiciadores: ["Coca-Cola", "Entel"],
    precios: {
      cancha: 45000,
      platea: 65000,
      vip: 80000
    },
    detalles_artista: {
      nombre: "Artistas de los 90's",
      generos: ["Pop", "Dance", "Eurodance"]
    },
    imagen_url: "https://static.ptocdn.net/images/eventos/wal257_calugalistado.jpg"
  }
]

export const handlers = [
  

  /* 
  graphql.query('ObtenerEventos', async () => {
    await delay(5000)
    return HttpResponse.json({data: {eventos}})
  }), 
  */

  http.get("/api/eventos", async (req) => {
    await delay(3000) 
    console.log('req', req)
    return HttpResponse.json(eventos)

  }),

  graphql.query('ObtenerEventoPorID', async ({ variables }) => {
    await delay(3000);
    const rawId = variables?.id
    if (!rawId) {
      return HttpResponse.json({
        errors: [{ 
          message: 'Falta variable id', 
          extensions: { code: 'BAD_USER_INPUT' } 
        }]
      });
    }

    const eventoId = rawId.toLowerCase()

    const evento = eventos.find(e => e.id.toLowerCase() === eventoId);
    
    if (!evento) {
      return HttpResponse.json({
        errors: [
          {
            message: `Evento id: ${eventoId}`,
            extensions: { code: 'EVENTO NO ENCONTRADO' }
          }
        ]
      });
    }

    return HttpResponse.json({ data: { evento } });
  }),

 
]
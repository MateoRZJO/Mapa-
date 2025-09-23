var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // deja comentado para usar el estilo estándar de Mapbox
    tokenDeAcceso: `mapbox://styles/mrzj/cmfvnmw39004j01qm76ul8q0e`, // Reemplaza con tu propio token de acceso
    mostrarMarcadores: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Lee más acerca de las proyecciones disponibles en:
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    tema: 'dark',
    usarTerreno3d: false, //true para mapas en 3d
    auto: false,
    titulo: 'AMÉRICA',
    subtitulo: 'RECORRIDO CULTURAL',
    autor: 'Por: Mateo Rodríguez Jaramillo',
    footer: 'Fuente: citación de fuentes, etc. <br> Creado usando la plantilla de <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>.',
    capitulos: [
        {
            id: 'slug-style-id',
            alineacion: 'right',
            oculto: false,
            titulo: 'Canada',
            imagen: './assets/The Weeknd.jpg', // Enlace a primera imagen
            descripcion: 'Abel Makkonen Tesfaye es un cantante canadiense de orígenes etíopes el cual comenzó su carrera musical en 2009 a loos 19 años de forma anonima en YouTube. Su música explora el escapismo, así como el romance o la melancolia, inspirado usualmente de sus propias experiencias personales. Su estilo es variado, caracterizandose por hacer una fusión de generos como el Disco, R&B, Pop, New waveo el Rhythm.',
            ubicacion: {
                center: [63.222,-72.944], // Coordenadas del primer lugar
                zoom: 3.42, // Nivel de zoom
                inclinacion: 60, // Inclinación de la cámara
                bearing: 0 // Rotación de la cámara
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'segundo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Estados Unidos', // Título del segundo lugar
            imagen: './assets/Pulp Fiction .webp',
            descripcion: 'Pulp Fiction es una pelicula de culto de 1994, ademas de ser la primer pelicula postmoderna de gran exito. Conocida por su estilo unico, narrativa no lineal, calidad tecnoica, memorabilidad y sus ingeniosos dialogos, los cuales sumados nos han dado una obra que ha trasendido las generaciones y se ha vuelto parte escencial de la cultura popular moderna',
            ubicacion: {
                center: [38.503,-86.113], // Coordenadas del segundo lugar
                zoom: 4.18,
                inclinacion: 60,
                bearing: -43.2,
                // Controles adicionales del flyTo:
                // Estas opciones controlan la curva de vuelo, haciendo que se mueva
                // lentamente y se aleje casi totalmente antes
                // de hacer un paneo.
                //speed: 2, // hace el vuelo lento
                //curve: 3, // cambia qué tanto se aleja al hacer zoom out
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tercer-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Mexico',
            imagen: './assets/Los supergenios.webp',
            descripcion: 'Los supergenios de la Mesa Cudrada fue una serie de comedia situacional, en la cual los 5 personaje principales leían las cartas de los televidentes y las contestaban de forma humorística, llevando usualmente a mostarar algun sketch.Esta obra fue de las primeras del futuramente famoso Roberto Gómez Bolaños, la cual le dejo empezar a hacerse un lugar en la televisión',
            ubicacion: {
                center: [23.450,-103.755],
                zoom: 4.94,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'segundo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Centro América', // Título del segundo lugar
            imagen: './assets/Pulp Fiction .webp',
            descripcion: 'El Popol Vuh es una recopilación de narraciones míticas, legendarias e históricas de el pueblo K’iche’, siendo así un libro sagrado en la cultura maya. El libro conserva gran parte de la sabiduría y de las tradiciones mayas en aspectos tales como religión, astrología, o mitología, lo cual le ha otorgado gran valor, tanto en un punto de vista histórico como espiritual. La versión bilingüe actual es un trabajo que conserva los escritos originales de un autor indigena anonimo.',
            ubicacion: {
                center: [12.911,-82.304], // Coordenadas del segundo lugar
                zoom: 5.68,
                inclinacion: 60,
                bearing: -43.2,
                // Controles adicionales del flyTo:
                // Estas opciones controlan la curva de vuelo, haciendo que se mueva
                // lentamente y se aleje casi totalmente antes
                // de hacer un paneo.
                //speed: 2, // hace el vuelo lento
                //curve: 3, // cambia qué tanto se aleja al hacer zoom out
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            alineacion: 'right',
            oculto: false,
            titulo: 'Caribe',
            imagen: './assets/Bob Marley.webp', // Enlace a primera imagen
            descripcion: 'Bob Marley fue un musico y exponente mas conocido, así como representante del reggae. Su carrera musical se divide en 2, la primer etapa con The Wailers y la segunda en Bob Marley & The Wailers. Su aporte a esparcir la musica jamaiquina, asi como el movimiento rastafari fue de tal nivel que ahora son conocidas a nivel mundial',
            ubicacion: {
                center: [18.159,-65.095], // Coordenadas del primer lugar
                zoom: 5.09, // Nivel de zoom
                inclinacion: 60, // Inclinación de la cámara
                bearing: 0 // Rotación de la cámara
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            alineacion: 'left',
            oculto: false,
            titulo: 'Colombia',
            imagen: './assets/Bob Marley.webp', // Enlace a primera imagen
            descripcion: 'El man es Germán es una serie humorística que sigue las situaciones de vida diarias de su protagonista Germán Quintero junto a su familia y amigos, ofreciendo a los espectadores un vistazo de aspectos estereotípicos de los colombianos promedio como el rebusque o la solidaridad.',
            ubicacion: {
                center: [4.391,-80.401], // Coordenadas del primer lugar
                zoom: 4.24, // Nivel de zoom
                inclinacion: 60, // Inclinación de la cámara
                bearing: 0 // Rotación de la cámara
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            alineacion: 'left', 
            oculto: false,
            titulo: 'Venezuela',
            imagen: './assets/Bob Marley.webp', // Enlace a primera imagen
            descripcion: 'Canaima.',
            ubicacion: {
                center: [6.692,-68.465], // Coordenadas del primer lugar
                zoom: 5.68, // Nivel de zoom
                inclinacion: 60, // Inclinación de la cámara
                bearing: 0 // Rotación de la cámara
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'tercer-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Brasil',
            imagen: './assets/31 Minutos.jpg',
            descripcion: 'Cidade de Deus',
            ubicacion: {
                center: [-14.220,-63.868],
                zoom: 3.76,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'segundo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Perú', // Título del segundo lugar
            imagen: './assets/Despelote.jpg',
            descripcion: 'Wyñaypacha.',
            ubicacion: {
                center: [-9.786,-62.629], // Coordenadas del segundo lugar
                zoom: 5.09,
                inclinacion: 60,
                bearing: -43.2,
                // Controles adicionales del flyTo:
                // Estas opciones controlan la curva de vuelo, haciendo que se mueva
                // lentamente y se aleje casi totalmente antes
                // de hacer un paneo.
                //speed: 2, // hace el vuelo lento
                //curve: 3, // cambia qué tanto se aleja al hacer zoom out
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'segundo-identificador',
            titulo: 'Ecuador', // Título del segundo lugar
            imagen: './assets/Despelote.jpg',
            descripcion: 'Despelote.',
            ubicacion: {
                center: [-1.533,-83.382], // Coordenadas del segundo lugar
                zoom: 6.11,
                inclinacion: 60,
                bearing: -43.2,
                // Controles adicionales del flyTo:
                // Estas opciones controlan la curva de vuelo, haciendo que se mueva
                // lentamente y se aleje casi totalmente antes
                // de hacer un paneo.
                //speed: 2, // hace el vuelo lento
                //curve: 3, // cambia qué tanto se aleja al hacer zoom out
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tercer-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Chile',
            imagen: './assets/31 Minutos.jpg',
            descripcion: '31 minutos es una serie de televisión chilena, la cual parodia a los noticieros, especialmente a 60 minutos. La serie posee soterradas referencias a la realidad social de Chile.',
            ubicacion: {
                center: [-38.659,-50.733],
                zoom: 3.73,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tercer-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Bolivia',
            imagen: './assets/31 Minutos.jpg',
            descripcion: 'Los deshabitados es una novela escrita y publicada por Marcelo Quiroga Santa Cruz, de hecho fue la única novela que fue publicada cuando todavía estaba vivo así como su única novela terminada. Fue galardonada por la Fundación William Faulkner como la mejor novela iberoamericana, siendo así la única obra boliviana poseedora de tal premio. Adicionalmente dicha fundación la describe como “la mejor obra hispanoamericana desde la segunda guerra mundial”.',
            ubicacion: {
                center: [-16.374,-62.256],
                zoom: 5.51,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tercer-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Paraguay',
            imagen: './assets/31 Minutos.jpg',
            descripcion: 'Hamaca paraguaya es una película ambientada en el 14 de julio de 1935, al final de la guerra del chaco.',
            ubicacion: {
                center: [-23.491,-56.412],
                zoom: 6.10,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'segundo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Uruguay', // Título del segundo lugar
            imagen: './assets/Whisky.jpg',
            descripcion: 'Whisky.',
            ubicacion: {
                center: [-32.585,-54.736], // Coordenadas del segundo lugar
                zoom: 6.70,
                inclinacion: 60,
                bearing: -43.2,
                // Controles adicionales del flyTo:
                // Estas opciones controlan la curva de vuelo, haciendo que se mueva
                // lentamente y se aleje casi totalmente antes
                // de hacer un paneo.
                //speed: 2, // hace el vuelo lento
                //curve: 3, // cambia qué tanto se aleja al hacer zoom out
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tercer-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Argentina',
            imagen: './assets/Mafalda.webp',
            descripcion: 'Mafalda fue creada por Quino (Joaquín Salvador Lavada Tejón) en 1962 como método de publicidad para la compañía de electrodomésticos Siam Di Tella, al final las las historietas de Quino no fueron aprobadas y publicadas, por lo cual la primera aparición de Mafalda sería hasta 1964 en el semanario Primera Plana. Mafalda habla sobre temas sociales de varias índoles, todo desde la perspectiva de una niña muy inteligente y con un perspicaz sentido del humor que genera de forma rápida y directa una crítica a lo sociedad y una reflexión al espectador. Mafalda es no solo la historieta más exitosa y famosa de Argentina, sino de cualquier país hispano, siendo todo un icono y referente en su país de origen, así como famosa en todo el mundo, ya que Mafalda no depende de ser una niña clase media de Argentina de los años 60 para poder conectar con ella, sino que por el contrario todos podemos comprender de lo que habla, su postura y disfrutar de leerla.',
            ubicacion: {
                center: [-38.821,-52.926],
                zoom: 3.88,
                inclinacion: 8.01,
                bearing: 0.00
            },
            animacionMapa: 'flyTo',
            rotarAnimacion: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
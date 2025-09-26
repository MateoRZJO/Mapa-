var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // deja comentado para usar el estilo estándar de Mapbox
    tokenDeAcceso: `pk.eyJ1IjoibXJ6aiIsImEiOiJjbWZ2bjcydXYwOWYzMnFvdzhpdDM0N283In0.9qqIKuL670OIyMRzo3_1_Q`, // Reemplaza con tu propio token de acceso
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
            titulo: 'Canadá',
            imagen: './assets/The Weeknd.jpg', // Enlace a primera imagen
            descripcion: 'Abel Makkonen Tesfaye es un cantante canadiense de orígenes etíopes el cual comenzó su carrera musical en 2009 a los 19 años de forma anónima en YouTube. Su música explora el escapismo, así como el romance o la melancolía, inspirado usualmente de sus propias experiencias personales. Su estilo es variado, caracterizándose por hacer una fusión de géneros como el Disco, R&B, Pop, New waveo el Rhythm.',
            ubicacion: {
                center: [-68.944,63.222], // Coordenadas del primer lugar
                zoom: 3.40, // Nivel de zoom
                inclinacion: 10, // Inclinación de la cámara
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
            descripcion: 'Pulp Fiction es una película de culto de 1994, además de ser la primer película postmoderna de gran éxito. Conocida por su estilo único, narrativa no lineal, calidad técnica, escenas memorables y sus ingeniosos diálogos, todos estos aspectos sumados nos han dado una obra que ha trascendido las generaciones y se ha vuelto parte escencial de la cultura popular moderna.',
            ubicacion: {
                center: [-76.113,38.503], // Coordenadas del segundo lugar
                zoom: 4.50,
                inclinacion: 10,
                bearing: 0.00,
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
            titulo: 'México',
            imagen: './assets/Los supergenios.webp',
            descripcion: 'Los supergenios de la Mesa Cudrada fue una serie de comedia situacional, en la cual los protagonistas leían las cartas de los televidentes y las contestaban de forma humorística, llevando usualmente a mostrar algún sketch. Esta obra fue de las primeras del futuramente famoso Roberto Gómez Bolaños, la cual le dejó empezar a hacerse un lugar en la televisión.',
            ubicacion: {
                center: [-110.755,23.450],
                zoom: 5.11,
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
            id: 'cuarto-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Centro América', 
            imagen: './assets/Popol vuh.jpg',
            descripcion: 'El Popol Vuh es una recopilación de narraciones míticas, legendarias e históricas de el pueblo K’iche’, siendo así un libro sagrado en la cultura maya. El libro conserva gran parte de la sabiduría y de las tradiciones mayas en aspectos tales como religión, astrología, o mitología, lo cual le ha otorgado gran valor, tanto en un punto de vista histórico como espiritual. La versión bilingüe actual es un trabajo que conserva los escritos originales de un autor indígena anónimo.',
            ubicacion: {
                center: [-79.7,12.868], 
                zoom: 6.13,
                inclinacion: 90,
                bearing: -0.2,
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
            id: 'quinto-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Caribe',
            imagen: './assets/Bob Marley.webp', // Enlace a primera imagen
            descripcion: 'Bob Marley fue un músico y exponente más conocido, así como representante del reggae. Su carrera musical se divide en 2, la primer etapa con The Wailers y la segunda en Bob Marley & The Wailers. Su aporte a esparcir la musica jamaiquina, asi como el movimiento rastafari fue de tal nivel, que ahora son conocidas a nivel mundial.',
            ubicacion: {
                center: [-63.095,18.159], // Coordenadas del primer lugar
                zoom: 5.49, // Nivel de zoom
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
            id: 'sexto-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Colombia',
            imagen: './assets/El man es German.jpg', // Enlace a primera imagen
            descripcion: 'El man es Germán es una serie humorística que sigue las situaciones de vida diarias de su protagonista Germán Quintero junto a su familia y amigos, ofreciendo a los espectadores un vistazo de aspectos estereotípicos de los colombianos promedio como el rebusque o la solidaridad.',
            ubicacion: {
                center: [-80.401,4.391], // Coordenadas del primer lugar
                zoom: 5.60, // Nivel de zoom
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
            id: 'septimo-identificador',
            alineacion: 'left', 
            oculto: false,
            titulo: 'Venezuela',
            imagen: './assets/Canaima.jpg', // Enlace a primera imagen
            descripcion: 'Canaima es una novela ambientada en la zona homónima de Venezuela, principalmente en las minas de El Callao. La obra es una queja en contra del caudillismo, mostrándonos la lucha en la selva debido a las ansias de riqueza, dominio y poder.',
            ubicacion: {
                center: [-69.995,6.692], // Coordenadas del primer lugar
                zoom: 5.98, // Nivel de zoom
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
            id: 'octavo-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Brasil',
            imagen: './assets/Ciudad de dios.jpg',
            descripcion: 'Cidade de Deus es la adaptacion en formato cinematografico del año 2002 de la novela homonima escrita por Paulo Lins en 1997. La historia se citua en la favela Ciudad de Deus en rio de Janeiro, siguiendo la vida de varias personas locales y su relacion con las pandillas y violencia, asi como intento de escapar de dicho entorno. Es una obra basada ligeramente en hechos reales que retrata de manera acertada la vida completamente rodeada de violencia que se presenta en la vida de los habitantes de esta favela, asi como los de muchas otras.',
            ubicacion: {
                center: [-63.968,-14.220],
                zoom: 4.23,
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
            id: 'noveno-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Perú', // Título del segundo lugar
            imagen: './assets/Eternidad.png',
            descripcion: 'Wiñaypacha es no solo una película peruana, sino que es la primer película completamente hablada en aymara. La película sigue a Willka y Phaxsi, una pareja de ancianos los cuales mantienen vivas sus costumbres y que después de la migración de su único hijo quedan completamente solos, con la esperanza de que este último algún día regrese.',
            ubicacion: {
                center: [-70.98,-9.890], // Coordenadas del segundo lugar
                zoom: 5.55,
                inclinacion: 60,
                bearing: 0.00,
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
            id: 'decimo-identificador',
            titulo: 'Ecuador', // Título del segundo lugar
            imagen: './assets/Despelote.jpg',
            descripcion: 'Despelote es un videojuego en el cual el jugador se pone en el papel de un niño de 8 años en las calles de Quito en la epoca de clasificaciones para el mundial de Corea/Japón, el jugador, literalmente, a través de jugar con un balón de football explora la ciudad y descubre la gran cantidad de historias que viven en ésta.',
            ubicacion: {
                center: [-84.122,-1.533], // Coordenadas del segundo lugar
                zoom: 6.61,
                inclinacion: 60,
                bearing: 0.00,
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
            id: 'onceavo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Chile',
            imagen: './assets/31 Minutos.jpg',
            descripcion: '31 minutos es una serie de televisión, la cual parodia a los noticieros, especialmente a 60 minutos. La serie posee soterradas referencias a la realidad social de Chile, estando enfocada principalmente a simple vsita hacia los niños, pero siendo disfrutable por personas de todas las edades.',
            ubicacion: {
                center: [-74.733,-38.659],
                zoom: 4.1,
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
            id: 'doceavo-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Bolivia',
            imagen: './assets/Los deshabitados.webp',
            descripcion: 'Los deshabitados es una novela escrita y publicada por Marcelo Quiroga Santa Cruz, de hecho fue la única novela que fue publicada cuando todavía estaba vivo, así como su única novela terminada. Fue galardonada por la Fundación William Faulkner como la mejor novela iberoamericana, siendo así la única obra boliviana poseedora de tal premio. Adicionalmente, dicha fundación la describe como “la mejor obra hispanoamericana desde la segunda guerra mundial”.',
            ubicacion: {
                center: [-67.256,-16.374],
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
            id: 'terceavo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Paraguay',
            imagen: './assets/Hamaca paraguaya movie.jpg',
            descripcion: 'Hamaca paraguaya es una película ambientada en el 14 de julio de 1935, al final de la guerra del Chaco. Después de la partida de Maximiliano, quien se fue a la guerra, sus padres ancianos Cándida y Ramón esperan con ansias su regreso, la madre con pensamientos funestos y el padre con optimismo.',
            ubicacion: {
                center: [-56.412,-23.491],
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
            id: 'catorceavo-identificador',
            alineacion: 'right',
            oculto: false,
            titulo: 'Uruguay', // Título del segundo lugar
            imagen: './assets/Whisky.jpg',
            descripcion: 'Whisky es una pelicula la cual mezcla drama con comedia, mostrandonos así, desde un código entre lo absurdo y la melancolía, entre lo cotidiano y lo fabulesco, un retrato sutil del cómo la torpeza y las pequeñas miserias de los 3 personajes prinncipales, tan distintos entre sí, se van evidenciando mientras intentan disimular resentimientos y asperezas. Una historia contada a través de detalles pequeños y trivialidades.',
            ubicacion: {
                center: [-54.736,-32.585], // Coordenadas del segundo lugar de la pagina
                zoom: 6.70,
                inclinacion: 60,
                bearing: 0.00,
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
            id: 'quinceavo-identificador',
            alineacion: 'left',
            oculto: false,
            titulo: 'Argentina',
            imagen: './assets/Mafalda.webp',
            descripcion: 'Mafalda fue creada por Quino (Joaquín Salvador Lavada Tejón) en 1962 como publicidad para la compañía de electrodomésticos Siam Di Tella, al final estas historietas no fueron aprobadas ni publicadas, por lo cual la primera aparición de Mafalda sería hasta 1964. Mafalda habla sobre temas sociales de varias índoles, todo desde la perspectiva de una niña muy inteligente y con un perspicaz sentido del humor que genera de forma rápida y directa una crítica a lo sociedad y una reflexión al espectador. Mafalda es no solo un ícono y referente en su país de origen, sino que es famosa en todo el mundo, ya que Mafalda no depende de ser una niña de clase media de Argentina de los años 60 para poder conectar con ella, sino que por el contrario, todos podemos comprender de lo que habla, su postura y disfrutar de leerla.',
            ubicacion: {
                center: [-61.682,-39.670],
                zoom: 4.28,
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
// Ayudita tomada de: https://github.com/russellsamora/scrollama/blob/main/src/scroll.js
const imagenes = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9yYc1wAzVEshfuJYkjOkNoI6seoZOEpzrw&s",
  "https://m.media-amazon.com/images/I/91Zi3y-GRDL.jpg",
  "https://static.wikia.nocookie.net/teniaqueserlawikidelchavo/images/3/3b/Intro_Los_Supergenios_de_la_Mesa_Cuadrada_%281970%29.png/revision/latest/scale-to-width-down/1200?cb=20241212032407&path-prefix=es",
  "https://www.libreriacasatomada.com/imagenes/9788416/978841677543.GIF",
  "https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/media/articles/81838/bob-marley-pelicula-animada_0.jpg?h=10d202d3&itok=qb26ZpsU",
  "https://unity-img.tbxapis.com/v0/images/801ca66694329da3ba697f38c94bf0a1/content/6790412273fec95dc8e6dbb1/b40592ab49026d0b8d83cb7e261238bd/img.jpg",
  "https://libreriatemis.com/wp-content/uploads/2020/09/18-044-0023.jpg",
  "https://play-lh.googleusercontent.com/hzB49wRFYtA-T5EvxgtrOLMp5SILwl49nyiOLEpNVtH6plGWK4TUGeDrkqs4wpPGPS3dhf0FKKHtAlKKPYwu",
  "https://www.lavanguardia.com/peliculas-series/images/movie/poster/2018/4/w1280/pENZra8G99ifTCjxXzWAOExzY43.jpg",
  "https://i0.wp.com/lavidaesunvideojuego.com/wp-content/uploads/2023/10/despelote-entrevista.jpg?resize=1400%2C788&ssl=1",
  "https://static.wikia.nocookie.net/doblajesperdidos/images/7/70/31Minutos_Poster.jpg/revision/latest?cb=20210122011607&path-prefix=es",
  "https://pictures.abebooks.com/inventory/30981602534.jpg", 
  "https://pics.filmaffinity.com/La_hamaca_paraguaya-154213852-mmed.jpg",
  "https://www.premiosgoya.com/wp-content/uploads/2016/01/Whisky.jpg",
  "https://i.pinimg.com/736x/aa/4b/b2/aa4bb272ea5fb3cda6bba4ffe7a68b49.jpg",
  ];
        let initLoad = true;
        let tiposDeCapa = {
            'fill': ['fill-opacity'],
            'line': ['line-opacity'],
            'circle': ['circle-opacity', 'circle-stroke-opacity'],
            'symbol': ['icon-opacity', 'text-opacity'],
            'raster': ['raster-opacity'],
            'fill-extrusion': ['fill-extrusion-opacity'],
            'heatmap': ['heatmap-opacity']
        }

        let alineaciones = {
            'left': 'lefty',
            'center': 'centered',
            'right': 'righty',
            'full': 'fully'
        }

        function obtenerTipoDePinturaDeCapa(capa) {
            let tipoDeCapa = map.getLayer(capa).type;
            return tiposDeCapa[tipoDeCapa];
        }

        function setLayerOpacity(capa) {
            let propiedadesDePintura = obtenerTipoDePinturaDeCapa(capa.layer);
            propiedadesDePintura.forEach(function (prop) {
                let opciones = {};
                if (capa.duration) {
                    let propiedadTransicion = prop + "-transition";
                    opciones = { "duration": capa.duration };
                    map.setPaintProperty(capa.layer, propiedadTransicion, opciones);
                }
                map.setPaintProperty(capa.layer, prop, capa.opacity, opciones);
            });
        }

        let historia = document.getElementById('historia');
        let caracteristicas = document.createElement('div');
        caracteristicas.setAttribute('id', 'features');

        let header = document.createElement('div');

        if (config.titulo) {
            let textoTitulo = document.createElement('h1');
            textoTitulo.innerText = config.titulo;
            header.appendChild(textoTitulo);
        }

        if (config.subtitulo) {
            let textoSubtitulo = document.createElement('h2');
            textoSubtitulo.innerText = config.subtitulo;
            header.appendChild(textoSubtitulo);
        }

        if (config.autor) {
            let textoAutor = document.createElement('p');
            textoAutor.innerText = config.autor;
            header.appendChild(textoAutor);
        }

        if (header.innerText.length > 0) {
            header.classList.add(config.tema);
            header.setAttribute('id', 'header');
            historia.appendChild(header);
        }

        // Configurar cada capítulo
        config.capitulos.forEach((record, idx) => {
            let contenedor = document.createElement('div');
            let capitulo = document.createElement('div');

            if (record.titulo) {
                let titulo = document.createElement('h3');
                titulo.innerText = record.titulo;
                capitulo.appendChild(titulo);
            }

            if (record.imagen) {
                let imagen = new Image();
                imagen.src = record.imagen;
                capitulo.appendChild(imagen);
            }

            if (record.descripcion) {
                let historia = document.createElement('p');
                historia.innerHTML = record.descripcion;
                capitulo.appendChild(historia);
            }

            contenedor.setAttribute('id', record.id);
            contenedor.classList.add('step');
            if (idx === 0) {
                contenedor.classList.add('active');
            }

            capitulo.classList.add(config.tema);
            contenedor.appendChild(capitulo);
            contenedor.classList.add(alineaciones[record.alineacion] || 'centered');
            if (record.oculto) {
                contenedor.classList.add('hidden');
            }
            caracteristicas.appendChild(contenedor);
        });

        historia.appendChild(caracteristicas);

        let footer = document.createElement('div');

        if (config.footer) {
            let textoFooter = document.createElement('p');
            textoFooter.innerHTML = config.footer;
            footer.appendChild(textoFooter);
        }

        if (footer.innerText.length > 0) {
            footer.classList.add(config.tema);
            footer.setAttribute('id', 'footer');
            historia.appendChild(footer);
        }

        mapboxgl.accessToken = config.tokenDeAcceso;

        let map = new mapboxgl.Map({
            container: 'map',
            style: config.style,
            center: config.capitulos[0].ubicacion.center,
            zoom: config.capitulos[0].ubicacion.zoom,
            bearing: config.capitulos[0].ubicacion.bearing,
            pitch: config.capitulos[0].ubicacion.inclinacion,
            interactive: false,
            projection: config.projection
        });

        // Crea un minimapa si la opción está habilitada en config.js
        if (config.inset) {
            map.addControl(
                new GlobeMinimap({ ...config.insetOptions }),
                config.insetPosition
            );
        }

        if (config.mostrarMarcadores) {
            let marker = new mapboxgl.Marker({ color: config.markerColor });
            marker.setLngLat(config.capitulos[0].ubicacion.center).addTo(map);
        }

        // instanciar el scrollama
        let scroller = scrollama();


        map.on("load", function () {
            if (config.usarTerreno3d) {
                map.addSource('mapbox-dem', {
                    'type': 'raster-dem',
                    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                    'tileSize': 512,
                    'maxzoom': 14
                });
                // add the DEM source as a terrain layer with exaggerated height
                map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

                // add a sky layer that will show when the map is highly pitched
                map.addLayer({
                    'id': 'sky',
                    'type': 'sky',
                    'paint': {
                        'sky-type': 'atmosphere',
                        'sky-atmosphere-sun': [0.0, 0.0],
                        'sky-atmosphere-sun-intensity': 15
                    }
                });
            };

            // setup the instance, pass callback functions
            scroller
                .setup({
                    step: '.step',
                    offset: 0.5,
                    progress: true
                })
                .onStepEnter(async response => {
                    let capituloActual = config.capitulos.findIndex(chap => chap.id === response.element.id);
                    let capitulo = config.capitulos[capituloActual];

                    response.element.classList.add('active');
                    map[capitulo.mapAnimation || 'flyTo'](capitulo.ubicacion);

                    if (config.mostrarMarcadores) {
                        marker.setLngLat(capitulo.ubicacion.center);
                    }
                    if (capitulo.onChapterEnter.length > 0) {
                        capitulo.onChapterEnter.forEach(setLayerOpacity);
                    }
                    if (capitulo.callback) {
                        window[capitulo.callback]();
                    }
                    if (capitulo.rotarAnimacion) {
                        map.once('moveend', () => {
                            const numeroRotacion = map.getBearing();
                            map.rotateTo(numeroRotacion + 180, {
                                duration: 30000, easing: function (t) {
                                    return t;
                                }
                            });
                        });
                    }
                    if (config.auto) {
                        let capituloSiguiente = (capituloActual + 1) % config.capitulos.length;
                        map.once('moveend', () => {
                            document.querySelectorAll('[data-scrollama-index="' + capituloSiguiente.toString() + '"]')[0].scrollIntoView();
                        });
                    }
                })
                .onStepExit(response => {
                    let capitulo = config.capitulos.find(chap => chap.id === response.element.id);
                    response.element.classList.remove('active');
                    if (capitulo.onChapterExit.length > 0) {
                        capitulo.onChapterExit.forEach(setLayerOpacity);
                    }
                });


            if (config.auto) {
                document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
            }
        });
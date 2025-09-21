// Ayudita tomada de: https://github.com/russellsamora/scrollama/blob/main/src/scroll.js
const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/600px-Americas_on_the_globe_%28red%29.svg.png",
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
const titulos = [
  "Canada",
  "Estados Unidos",
  "México",
  "Cento América",
  "Caribe",,
  "Colombia",
  "Venezuela",
  "Brasil",
  "Perú",
  "Ecuador",
  "Chile",
  "Bolivia",
  "Paragüay",
  "Urugüay",
  "Argentina",
];
const textos = [
	`Abel Makkonen Tesfaye es un cantante canadiense de orígenes etíopes el cual comenzó su carrera musical en 2009 a loos 19 años de forma anonima en YouTube. 
	Su músicaexplora es escapismo, así como el romance o la melancolia, inspirado usualmente de sus propias experiencias personales.`, 
	
	`Pulp Fiction`,

	`Los supergenios de la Mesa Cudrada fue una serie de comedia situacional, en la cual los 5 personaje principales leían las cartas de los televidentes y las contestaban de 
	forma humorística`, 
	
	`El Popol Vuh es una recopilación de narraciones míticas, legendarias e históricas de el pueblo K’iche’, siendo así un libro sagrado en la cultura maya. 
	El libro conserva gran parte de la sabiduría y de las tradiciones mayas en aspectos tales como religión, astrología, o mitología, lo cual le ha otorgado gran valor, tanto 
	histórico como espiritual.`, 

	`Bob Marley`, 

	`El man es Germán es una serie humorística que sigue las situaciones diarias de su protagonista punketo (aficionado al punk) Germán Quintero junto a su familia y amigos, 
	dando un vistazo de aspectos estereotípicos de los colombianos promedio como el rebusque o la solidaridad`,

	`Canaima`,

	`Cidade de Deus`,

	`Wyñaypacha`,

	`Despelote`,

	`31 minutos es una serie de televisión chilena, la cual parodia a los noticieros, especialmente a 60 minutos. La serie posee soterradas referencias a la realidad social de 
	Chile`,

	`Los deshabitados es una novela escrita y publicada por Marcelo Quiroga Santa Cruz, de hecho fue la única novela que fue publicada cuando todavía estaba vivo así como su 
	única novela terminada. Fue galardonada por la Fundación William Faulkner como la mejor novela iberoamericana, siendo así la única obra boliviana poseedora de tal premio. 
	Adicionalmente dicha fundación la describe como “la mejor obra hispanoamericana desde la segunda guerra mundial”.`,

	`Hamaca paraguaya es una película ambientada en el 14 de julio de 1935, al final de la guerra del chaco`,

	`Whisky`,

	`Mafalda fue creada por Quino (Joaquín Salvador Lavada Tejón) en 1962 como método de publicidad para la compañía de electrodomésticos Siam Di Tella, al final las las 
	historietas de Quino no fueron aprobadas y publicadas, por lo cual la primera aparición de Mafalda sería hasta 1964 en el semanario Primera Plana. 
	Mafalda habla sobre temas sociales de varias índoles, todo desde la perspectiva de una niña muy inteligente y con un perspicaz sentido del humor que genera de forma rápida 
	y directa una crítica a lo sociedad y una reflexión al espectador. 
	Mafalda es no solo la historieta más exitosa y famosa de Argentina, sino de cualquier país hispano, siendo todo un icono y referente en su país de origen, así como famosa 
	en todo el mundo, ya que Mafalda no depende de ser una niña clase media de Argentina de los años 60 para poder conectar con ella, sino que por el contrario todos podemos 
	comprender de lo que habla, su postura y disfrutar de leerla.`,
];
const música = [
	"https://www.youtube.com/watch?v=NZXb_N4mCL0",
	"https://www.youtube.com/watch?v=klbRQ4JbIzY",
	"https://www.youtube.com/watch?v=UlCd7ixbrSY",
	"https://www.youtube.com/watch?v=XdqwbgjI_nw",
	"https://www.youtube.com/watch?v=1ti2YCFgCoI",
	"https://www.youtube.com/watch?v=X5sdX-XEN-s",
	"https://www.youtube.com/watch?v=gxlB1B9emDc&list=PLDMAQIFJPbIvoKbH0-qpRoGRpMiRO2GQb&index=1",
	"https://www.youtube.com/watch?v=zjIauceG3gE&list=PLw8WPBct97eUQTxSMb9Rm6KB6Fy8ENTup&index=1",
	"https://www.youtube.com/watch?v=3gAqZjiAb3A",
	"https://www.youtube.com/watch?v=347npLytra4",
	"https://www.youtube.com/watch?v=qBLvwdf8uRw",
	"https://www.youtube.com/watch?v=4gp_e7Z-To4",
	"https://www.youtube.com/watch?v=Ic5NlxAvuSU",
	"https://www.youtube.com/watch?v=RlJAlla0y9E",
	"https://www.youtube.com/watch?v=puMt8BaH7d8",
];
let scrollYPrevio;
let scrollYActual;
let comparacionScrollY;
let direccion;

const texto = document.createElement('div');
texto.id = "texto";
texto.classList.add('textoDer');

const alturaVentana  = window.innerHeight;
const paso = alturaVentana / textos.length - 1;

function onScroll(container) {
const contenedor = document.getElementById("contenedor");
document.body.appendChild(texto);

	const scrollTop = container ? container.scrollTop : window.pageYOffset;

	if (scrollYActual === scrollTop) return;

	scrollYPrevio = scrollYActual;
	scrollYActual = scrollTop;
	if (scrollYActual > comparacionScrollY) direccion = "down";
	else if (scrollYActual < comparacionScrollY) direccion = "up";
	comparacionScrollY = scrollYActual;

 // console.log(scrollYActual);

  if(scrollYActual) {
    if(textos[Math.floor(scrollYActual/paso)]) {
  texto.innerText = textos[Math.floor(scrollYActual/paso)];
  }
 // console.log(alturaVentana-scrollYActual);
} 
}

function setupScroll(container) {
	scrollYPrevio = 0;
	scrollYActual = 0;
	comparacionScrollY = 0;
	document.addEventListener("scroll", () => onScroll(container));
}

// Agregar los textos al contenedor al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("contenedor");
  textos.forEach(textoItem => {
    const div = document.createElement("div");
    div.textContent = textoItem;
    contenedor.appendChild(div);
  });
  setupScroll(document.body);
});

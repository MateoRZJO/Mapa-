// Ayudita tomada de: https://github.com/russellsamora/scrollama/blob/main/src/scroll.js
const imagenes = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/600px-Americas_on_the_globe_%28red%29.svg.png",
];

const titulos = [
  "Canada",
  "Estados Unidos",
  "México",
  "Guatemala",
  "El Salvador",
  "Honduras",
  "Caribe",
  "Nicaragüa",
  "Costa Rica",
  "Panama",
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
	`Abel Makkonen Tesfaye es un cantante canadiense de orígenes etíopes el cual comenzó su carrera musical en 2009 a loos 19 años 
	de forma anonima en YouTube. 
	Su músicaexplora es escapismo, así como el romance o la melancolia, inspirado usualmente de sus propias experiencias personales.`, 
	`Estados Unidos`,
	`Los supergenios de la Mesa Cudrada fue una serie de comedia situacional, en la cual los 5 personaje principales leían las cartas 
	de los televidentes y las contestaban de forma humorística`, 
	`El Popol Vuh es una recopilación de narraciones míticas, legendarias e históricas de el pueblo K’iche’, siendo así un libro sagrado 
	en la cultura maya. El libro conserva gran parte de la sabiduría y de las tradiciones mayas en aspectos tales como religión, 
	astrología, o mitología, lo cual le ha otorgado gran valor, tanto histórico como espiritual.`, 
	`El Salvador`, 
	`Honduras`, 
	`Caribe`, 
	`Nicaragua`,
	`Mamita Yunai fue la primer novela publicada por Carlos Luis Fallas, la cual es parcialmente autobiográfica a la vez que una denuncia 
	socia`,
	`Panama`,
	`El man es Germán es una serie humorística que sigue las situaciones diarias de su protagonista punketo (aficionado al punk) Germán 
	Quintero junto a su familia y amigos, dando un vistazo de aspectos estereotípicos de los colombianos promedio como el rebusque y la 
	solidaridad`,
	`Venezuela`,
	`Brasil`,
	`Perú`,
	`Ecuador`,
	`31 minutos es una serie de televisión chilena, la cual parodia a los noticieros, especialmente a 60 minutos. La serie posee 
	soterradas referencias a la realidad social de Chile`,
	`Los deshabitados es una novela escrita y publicada por Marcelo Quiroga Santa Cruz, de hecho fue la única novela que fue publicada 
	cuando todavía estaba vivo así como su única novela terminada. Fue galardonada por la Fundación William Faulkner como la mejor novela 
	iberoamericana, siendo así la única obra boliviana poseedora de tal premio. Adicionalmente dicha fundación la describe como “la mejor 
	obra hispanoamericana desde la segunda guerra mundial”.`,
	`Hamaca paraguaya es una película ambientada en el 14 de julio de 1935, al final de la guerra del chaco`,
	`Uruguay`,
	`Mafalda fue creada por Quino (Joaquín Salvador Lavada Tejón) en 1962 como método de publicidad para la compañía de electrodomésticos 
	Siam Di Tella, al final las las historietas de Quino no fueron aprobadas y publicadas, por lo cual la primera aparición de Mafalda 
	sería hasta 1964 en el semanario Primera Plana. 
	Mafalda habla sobre temas sociales de varias índoles, todo desde la perspectiva de una niña muy inteligente y con un perspicaz 
	sentido del humor que genera de forma rápida y directa una crítica a lo sociedad y una reflexión al espectador. 
	Mafalda es no solo la historieta más exitosa y famosa de Argentina, sino de cualquier país hispano, siendo todo un icono y referente 
	en su país de origen, así como famosa en todo el mundo, ya que Mafalda no depende de ser una niña clase media de Argentina de los 
	años 60 para poder conectar con ella, sino que por el contrario todos podemos comprender de lo que habla, su postura y disfrutar de 
	leerla.`,

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

// ═══════════════════════════════════════════
// DATA - PRODUCT CATALOG
// ═══════════════════════════════════════════
const PRODUCTS = [
  { id:1,  name:"Brie de Meaux",           cat:"soft",         emoji:"🫶", img:"imagenes/brie-de-meaux.jpg",            origin:"Île-de-France, Francia",       tagline:"La reina de los quesos suaves",                  desc:"Queso de pasta blanda con corteza enmohecida blanca, textura cremosa y sabores suaves con notas de champiñón y tierra.",         price:8.50,  weight:"250g",   intensity:"Suave",       milk:"Vaca",   maturity:"4 semanas",   pairing:"Vino Champagne, Pinot Noir ligero o manzana verde.",           badge:"popular", popular:true },
  { id:2,  name:"Camembert de Normandie",  cat:"soft",         emoji:"🧀", img:"imagenes/camembert-de-normandie.jpg",       origin:"Normandía, Francia",            tagline:"Sabor profundo y carácter único",                desc:"Queso de leche cruda con corteza blanca, más intenso que el Brie. Suave y cremoso con aromas complejos de tierra y nata.",          price:7.20,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"3 semanas",   pairing:"Calvados, sidra normanda o vino blanco Burgundy." },
  { id:3,  name:"Burrata Italiana",        cat:"soft",         emoji:"🤍", img:"imagenes/burrata-italiana.jpg",          origin:"Puglia, Italia",                tagline:"Seda líquida envuelta en mozzarella",            desc:"El exterior es mozzarella fresca y el interior contiene stracciatella y nata, creando una explosión de cremosidad.",                price:9.80,  weight:"200g",   intensity:"Muy suave",   milk:"Vaca",   maturity:"Fresco",      pairing:"Tomate heirloom, aceite de oliva y albahaca fresca.",          badge:"new" },
  { id:4,  name:"Taleggio",               cat:"soft",         emoji:"🟠", img:"imagenes/taleggio.jpg",                  origin:"Lombardía, Italia",             tagline:"Suave y goloso con aroma intenso",              desc:"Queso lavado semi-suave con corteza rosacea y pasta cremosa. Su olor es fuerte pero su sabor resulta suave y mantecoso.",           price:11.50, weight:"300g",   intensity:"Medio-Alto",  milk:"Vaca",   maturity:"6-10 semanas",pairing:"Peras maduras, nueces o vino tinto Chianti." },
  { id:5,  name:"Reblochon",              cat:"soft",         emoji:"🟡", img:"imagenes/reblochon.jpg",                 origin:"Saboya, Francia",               tagline:"El alma de los Alpes en un queso",              desc:"Queso lavado con corteza anaranjada y pasta suave con aroma persistente. Base del famoso tartiflette.",                             price:10.20, weight:"500g",   intensity:"Medio",       milk:"Vaca",   maturity:"3-4 semanas", pairing:"Vino blanco de Saboya, Apremont o sidra seca." },
  { id:6,  name:"Cheddar Extra Madurado", cat:"hard",         emoji:"🏔️", img:"imagenes/cheddar-extra-madurado.jpg",   origin:"Somerset, England",             tagline:"El rey indiscutible del queso británico",       desc:"Madurado durante 18 meses, presenta una textura densa y granular con notas de caramelo, nuez y un toque picante al final.",         price:12.80, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"18 meses",    pairing:"Ale amarga de Nottingham, uvas o chutney de mango.",           badge:"british", popular:true },
  { id:7,  name:"Parmigiano Reggiano",    cat:"hard",         emoji:"⭐", img:"imagenes/parmigiano-reggiano.jpg",       origin:"Emilia-Romaña, Italia",         tagline:"El rey de los quesos italianos",                desc:"El queso más famoso del mundo. Granuloso, cristalino, con intensas notas de umami, frutos secos y caramelo salado.",               price:18.50, weight:"300g",   intensity:"Muy Fuerte",  milk:"Vaca",   maturity:"24 meses",    pairing:"Prosecco, vino tinto Barolo o miel de acacia.",                badge:"popular" },
  { id:8,  name:"Manchego Curado",        cat:"hard",         emoji:"🇪🇸", img:"imagenes/manchego-curado.jpg",          origin:"La Mancha, España",             tagline:"Firmeza y carácter de la meseta",               desc:"Elaborado con leche de oveja manchega, presenta corteza rayada característica y pasta densa con sabores complejos y persistentes.",  price:14.20, weight:"300g",   intensity:"Fuerte",      milk:"Oveja", maturity:"6 meses",     pairing:"Jerez amontillado, jamón ibérico o membrillo." },
  { id:9,  name:"Gruyère AOC",            cat:"hard",         emoji:"🟡", img:"imagenes/gruyere-aoc.jpg",              origin:"Friburgo, Suiza",               tagline:"El complemento perfecto para fondues",          desc:"Queso alpino de larga tradición con pequeños ojos, sabor frutal y complejo que se vuelve más pronunciado con la maduración.",       price:13.90, weight:"300g",   intensity:"Medio-Fuerte",milk:"Vaca",   maturity:"12 meses",    pairing:"Fendant suizo, cerveza de trigo o manzana Golden." },
  { id:10, name:"Comté Reserva",          cat:"hard",         emoji:"🟤", img:"imagenes/comte-reserva.jpg",            origin:"Franche-Comté, Francia",        tagline:"El queso de montaña más consumido de Francia",  desc:"Elaborado en queserías alpinas con leche de vacas Montbéliarde. Sus sabores evolucionan de dulce y frutal a notas de frutos secos.", price:15.60, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"18 meses",    pairing:"Chardonnay de Borgoña, nueces o embutidos alpinos.",           badge:"new" },
  { id:11, name:"Red Leicester",          cat:"hard",         emoji:"🟠", img:"imagenes/red-leicester.jpg",            origin:"Leicestershire, England",       tagline:"El rojo emblemático del Midlands inglés",       desc:"Queso británico de color rojo-naranja teñido con annatto. Sabor suave pero pleno, ligeramente más dulce que el Cheddar.",           price:9.50,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"3-6 meses",   pairing:"Pickle de Branston, cerveza Ale inglesa o manzanas.",          badge:"british" },
  { id:12, name:"Emmental Suizo",         cat:"hard",         emoji:"🧀", img:"imagenes/emmental-suizo.jpg",           origin:"Berna, Suiza",                  tagline:"El clásico de los agujeros imposibles de ignorar",desc:"Queso de pasta dura con grandes ojos característicos. Sabor dulce, ligeramente frutal con notas de avellana y un final suave.",     price:11.00, weight:"300g",   intensity:"Suave-Medio", milk:"Vaca",   maturity:"8 meses",     pairing:"Riesling alemán, salami o peras de temporada." },
  { id:13, name:"Stilton DOP",            cat:"blue",         emoji:"💙", img:"imagenes/stilton-dop.jpg",              origin:"Nottinghamshire, England",      tagline:"Orgullo de Nottingham, el rey de los azules",   desc:"El queso azul inglés por excelencia. Venas azul-verdes con textura cremosa y sabores intensos pero equilibrados con matices de nuez.",price:16.50, weight:"300g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"9 semanas",   pairing:"Oporto vintage, nueces o peras Williams.",                     badge:"british popular", popular:true },
  { id:14, name:"Roquefort AOP",          cat:"blue",         emoji:"💚", img:"imagenes/roquefort-aop.jpg",            origin:"Combalou, Francia",             tagline:"La leyenda centenaria de las cuevas",           desc:"Madurado en las cuevas naturales de Combalou con moho Penicillium roqueforti. Intensamente picante y salado con notas minerales.",   price:19.80, weight:"100g",   intensity:"Muy Fuerte",  milk:"Oveja", maturity:"3 meses",     pairing:"Sauternes, higos frescos o miel de romero.",                   badge:"popular" },
  { id:15, name:"Gorgonzola Piccante",    cat:"blue",         emoji:"🟢", img:"imagenes/gorgonzola-piccante.jpg",      origin:"Piamonte y Lombardía, Italia",  tagline:"La potencia azul de Italia en estado puro",     desc:"El azul italiano más conocido. En su versión piccante presenta venas pronunciadas, textura quebradiza y sabores intensamente picantes.",price:13.40, weight:"200g",   intensity:"Fuerte",      milk:"Vaca",   maturity:"12 semanas",  pairing:"Amarone della Valpolicella, higos o miel de castaño." },
  { id:16, name:"Cabrales",              cat:"blue",         emoji:"🔵", img:"imagenes/cabrales.jpg",                 origin:"Asturias, España",              tagline:"La fuerza salvaje de los Picos de Europa",      desc:"Queso azul asturiano madurado en cuevas naturales de la sierra. Extremadamente potente, picante y complejo con texturas únicas.",    price:14.90, weight:"200g",   intensity:"Muy Fuerte",  milk:"Mixta", maturity:"4-6 meses",   pairing:"Sidra asturiana, miel, o vino tinto Ribera del Duero." },
  { id:17, name:"Chèvre Frais",          cat:"goat",         emoji:"🐐", img:"imagenes/chevre-frais.jpg",             origin:"Loire, Francia",                tagline:"Frescura y acidez del campo francés",           desc:"Queso fresco de cabra con textura suave y granulosa. Sabores frescos, lácteos con acidez característica y notas de hierba.",         price:6.80,  weight:"150g",   intensity:"Suave",       milk:"Cabra", maturity:"Fresco",      pairing:"Sauvignon Blanc, miel de lavanda o ensalada verde." },
  { id:18, name:"Crottin de Chavignol",  cat:"goat",         emoji:"🟫", img:"imagenes/crottin-de-chavignol.jpg",     origin:"Centre-Val de Loire, Francia",  tagline:"Pequeño en tamaño, enorme en carácter",         desc:"Queso pequeño con corteza rugosa que va de fresco a muy curado. Su sabor evoluciona de lácteo y suave a intensamente caprino.",      price:8.20,  weight:"60g x2", intensity:"Medio-Fuerte", milk:"Cabra", maturity:"Variable",    pairing:"Sancerre, nueces o rúcula con aceite de oliva." },
  { id:19, name:"Valençay AOP",          cat:"goat",         emoji:"⬡",  img:"imagenes/valencay-aop.jpg",             origin:"Berry, Francia",                tagline:"La pirámide truncada más elegante",             desc:"Forma piramidal característica con corteza gris-ceniza. Textura húmeda que se vuelve más seca con la maduración.",                  price:9.60,  weight:"220g",   intensity:"Medio",       milk:"Cabra", maturity:"4-5 semanas", pairing:"Pouilly-Fumé, higos o membrillo.",                             badge:"new" },
  { id:20, name:"Garrotxa",             cat:"goat",         emoji:"🪨", img:"imagenes/garrotxa.jpg",                 origin:"Cataluña, España",              tagline:"El queso catalán de los Pirineos",              desc:"Queso semicurado con corteza gris-azulada natural. Pasta firme y compacta de color marfil con sabores caprinos pero suaves.",        price:12.30, weight:"300g",   intensity:"Medio",       milk:"Cabra", maturity:"2-3 meses",   pairing:"Cava brut, membrillo o aceitunas arbequinas." },
  { id:21, name:"Manchego Semicurado",   cat:"sheep",        emoji:"🐑", img:"imagenes/manchego-semicurado.jpg",      origin:"La Mancha, España",             tagline:"La suavidad de la oveja manchega",              desc:"Versión joven del Manchego con texturas más blandas y sabores más lácteos y limpios. Ideal para quienes descubren los quesos de oveja.",price:11.20,weight:"300g",   intensity:"Suave-Medio", milk:"Oveja", maturity:"3 meses",     pairing:"Vino tinto joven La Mancha, uvas o tomate cherry." },
  { id:22, name:"Pecorino Romano DOP",   cat:"sheep",        emoji:"🇮🇹", img:"imagenes/pecorino-romano-dop.jpg",      origin:"Lazio, Italia",                 tagline:"El sabor salado de la Roma antigua",            desc:"Queso duro de oveja con sabor intensamente salado y picante. Esencial en la cocina italiana tradicional.",                          price:13.80, weight:"300g",   intensity:"Muy Fuerte",  milk:"Oveja", maturity:"8-12 meses",  pairing:"Vino tinto Cesanese, higos secos o prosciutto." },
  { id:23, name:"Wensleydale & Arándanos",cat:"sheep",       emoji:"🫐", img:"imagenes/wensleydale-arandanos.jpg",    origin:"North Yorkshire, England",      tagline:"El favorito de Wallace y Gromit",               desc:"Clásico queso inglés de Yorkshire con arándanos añadidos. Textura húmeda y desmenuzable con sabor dulce y ligeramente ácido.",      price:10.40, weight:"300g",   intensity:"Suave",       milk:"Mixta", maturity:"3 semanas",   pairing:"Sidra de pera, galletas de avena o chutney de frutos rojos.",  badge:"british popular", popular:true },
  { id:24, name:"Ossau-Iraty AOP",       cat:"sheep",        emoji:"🐏", img:"imagenes/ossau-iraty-aop.jpg",          origin:"País Vasco/Pirineos, Francia",  tagline:"El espíritu de los Pirineos vascos",            desc:"Queso pirenaico de leche de oveja Manech. Pasta prensada con sabores suaves, lácteos con notas de hierba de montaña y avellana.",   price:14.50, weight:"300g",   intensity:"Medio",       milk:"Oveja", maturity:"3 meses",     pairing:"Irouléguy tinto, membrillo o jamón de Bayona." },
  { id:25, name:"Cornish Yarg",          cat:"british",      emoji:"🌿", img:"imagenes/cornish-yarg.jpg",             origin:"Cornwall, England",             tagline:"El queso envuelto en ortigas de Cornualles",    desc:"Único queso británico envuelto en hojas de ortiga que le dan una corteza comestible y un sabor fresco y herbáceo inconfundible.",   price:13.20, weight:"300g",   intensity:"Suave-Medio", milk:"Vaca",   maturity:"4-8 semanas", pairing:"Vino blanco seco, ensalada o embutido de campo.",             badge:"british new", popular:true },
  { id:26, name:"Double Gloucester",     cat:"british",      emoji:"🟡", img:"imagenes/double-gloucester.jpg",        origin:"Gloucestershire, England",      tagline:"El queso de los rodajes por las colinas",       desc:"Queso duro inglés de color naranja brillante. Sabor suave y cremoso más pronunciado que el Red Leicester, con notas de mantequilla.", price:9.80,  weight:"250g",   intensity:"Medio",       milk:"Vaca",   maturity:"4-6 meses",   pairing:"Ale inglesa, encurtidos Branston o cebolla pickled.",          badge:"british" },
  { id:27, name:"Lancashire Tasty",      cat:"british",      emoji:"🏴", img:"imagenes/lancashire-tasty.jpg",         origin:"Lancashire, England",           tagline:"El sabor del norte inglés en su máxima expresión",desc:"Queso desmenuzable y húmedo del norte de Inglaterra. Textura única y sabor ligeramente ácido y mantecoso.",                         price:10.60, weight:"300g",   intensity:"Medio-Fuerte",milk:"Vaca",   maturity:"6-12 meses",  pairing:"Black pudding, pickles o cerveza Stout inglesa.",              badge:"british" },
  { id:28, name:"Chutney de Mango Artesanal",cat:"accompaniment",emoji:"🫙", img:"imagenes/chutney-mango.jpg",        origin:"The Cheese Shop, Nottingham",  tagline:"Maridaje perfecto para quesos duros",           desc:"Chutney elaborado artesanalmente con mangos de primera calidad, jengibre y especias. Equilibrio perfecto entre dulce, ácido y especiado.",price:5.50,weight:"300g",intensity:"—",milk:"Vegano",maturity:"—",pairing:"Cheddar madurado, Cornish Yarg o queso de cabra." },
  { id:29, name:"Crackers de Avena Artesanales",cat:"accompaniment",emoji:"🍘", img:"imagenes/crackers-avena.jpg",    origin:"Escocia",                     tagline:"La base perfecta para cualquier queso",         desc:"Galletas de avena escocesas elaboradas con ingredientes de primera. El acompañamiento ideal para realzar el sabor de cualquier queso.",price:4.20,weight:"200g",intensity:"—",milk:"Sin lácteos",maturity:"—",pairing:"Perfectas con cualquier queso de nuestra selección." },
  { id:30, name:"Ale de Nottingham - The Trip to Jerusalem",cat:"accompaniment",emoji:"🍺", img:"imagenes/ale-nottingham.jpg", origin:"Nottingham, England", tagline:"La cerveza más antigua de Nottingham",          desc:"Ale británica de la pub más antigua de Nottingham (1189). Amargor equilibrado con notas maltosas y de caramelo.",                  price:3.80, weight:"500ml",  intensity:"—",           milk:"Sin lácteos",maturity:"—",pairing:"Stilton, Cheddar Extra Madurado o Lancashire." },
];

// ═══════════════════════════════════════════
// RECENT ORDERS & TOP PRODUCTS DATA
// ═══════════════════════════════════════════
const RECENT_ORDERS = [
  { name:"Stilton DOP + Cheddar Extra", emoji:"💙", date:"Hace 2 horas", price:"£29.30", status:"transit" },
  { name:"Tabla Selección Británica x3", emoji:"🇬🇧", date:"Ayer, 14:32", price:"£38.50", status:"delivered" },
  { name:"Brie de Meaux + Crackers", emoji:"🫶", date:"Hace 2 días", price:"£12.70", status:"delivered" },
  { name:"Roquefort AOP", emoji:"💚", date:"Hace 3 días", price:"£19.80", status:"pending" },
];
const TOP_PRODUCTS = [
  { name:"Stilton DOP",    emoji:"💙", sold:"38 unidades" },
  { name:"Cheddar Extra",  emoji:"🏔️", sold:"31 unidades" },
  { name:"Wensleydale",    emoji:"🫐", sold:"28 unidades" },
  { name:"Cornish Yarg",   emoji:"🌿", sold:"24 unidades" },
  { name:"Brie de Meaux",  emoji:"🫶", sold:"21 unidades" },
];

// ═══════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════
let cart = [];
let currentProduct = null;
let currentPage = 1;
const PAGE_SIZE = 9;
let filteredProducts = [...PRODUCTS];
let currentView = 'grid';
let currentCat = 'all';
let maxPrice = 110;
let searchQuery = '';
let sortBy = 'default';
let wishlist = new Set();

// ═══════════════════════════════════════════
// LANGUAGE SYSTEM
// ═══════════════════════════════════════════
let currentLang = localStorage.getItem('lang') || 'es';

const TRANSLATIONS = {
  es: {
    nav_accessibility: 'Accesibilidad', nav_account: 'Mi cuenta',
    nav_dashboard: 'Dashboard', nav_catalog: 'Catálogo',
    nav_story: 'Nuestra Historia', nav_cafe: 'Café & Sala',
    nav_delivery: 'Envíos', nav_contact: 'Contacto',
    a11y_panel: 'Panel de Accesibilidad', a11y_dark: 'Modo Oscuro',
    a11y_dark_desc: 'Reduce la fatiga visual', a11y_contrast: 'Alto Contraste',
    a11y_contrast_desc: 'Mejora la legibilidad', a11y_spacing: 'Espaciado de Texto',
    a11y_spacing_desc: 'Ajusta la separación', spacing_normal: 'Normal',
    spacing_wide: 'Amplio', spacing_extra: 'Extra',
    a11y_lang: 'Idioma', a11y_lang_desc: 'Cambia el idioma del sitio',
    a11y_autosave: 'Tus preferencias se guardan automáticamente',
  },
  en: {
    nav_accessibility: 'Accessibility', nav_account: 'My account',
    nav_dashboard: 'Dashboard', nav_catalog: 'Catalogue',
    nav_story: 'Our Story', nav_cafe: 'Café & Room',
    nav_delivery: 'Delivery', nav_contact: 'Contact',
    a11y_panel: 'Accessibility Panel', a11y_dark: 'Dark Mode',
    a11y_dark_desc: 'Reduces eye strain', a11y_contrast: 'High Contrast',
    a11y_contrast_desc: 'Improves readability', a11y_spacing: 'Text Spacing',
    a11y_spacing_desc: 'Adjust text separation', spacing_normal: 'Normal',
    spacing_wide: 'Wide', spacing_extra: 'Extra',
    a11y_lang: 'Language', a11y_lang_desc: 'Change the site language',
    a11y_autosave: 'Your preferences are saved automatically',
  }
};

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang] || TRANSLATIONS.es;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'es');
}

function setLanguage(lang, btn) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('#lang-es, #lang-en').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  applyTranslations(lang);
  toast(lang === 'en' ? '🇬🇧 Language: English' : '🇪🇸 Idioma: Español');
}

// ═══════════════════════════════════════════
// ACCESSIBILITY MODAL
// ═══════════════════════════════════════════
let highContrast = false;
let currentSpacing = localStorage.getItem('spacing') || 'normal';

function openA11yPanel() {
  const overlay = document.getElementById('a11y-modal-overlay');
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden', 'false');
  document.getElementById('a11y-modal-inner').querySelector('.a11y-modal-close').focus();
  document.body.style.overflow = 'hidden';
}

function closeA11yPanel() {
  const overlay = document.getElementById('a11y-modal-overlay');
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.getElementById('a11y-nav-btn').focus();
}

function closeA11yModal(e) {
  if (e.target === document.getElementById('a11y-modal-overlay')) closeA11yPanel();
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const btn = document.getElementById('theme-btn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(!isDark));
    btn.classList.toggle('active', !isDark);
  }
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
  toast(isDark ? 'Modo claro activado' : 'Modo oscuro activado');
}

function toggleHighContrast() {
  highContrast = !highContrast;
  document.documentElement.classList.toggle('high- contrast', highContrast);
  const btn = document.getElementById('contrast- btn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(highContrast));
    btn.classList.toggle('active', highContrast);
  }
  if (highContrast) {
    document.documentElement.style.setProperty('--gold', '#ffd700');
  } else {
    document.documentElement.style.removeProperty('--gold');
  }
  localStorage.setItem('highContrast', String(highContrast));
  toast(highContrast ? 'Alto contraste activado' : 'Contraste normal');
}

function setSpacing(level, btn) {
  currentSpacing = level;
  const scales = { normal: 1, wide: 1.35, extra: 1.7 };
  document.documentElement.style.setProperty('--spacing-scale', scales[level]);
  document.querySelectorAll('#spacing-normal,#spacing-wide,#spacing-extra').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  localStorage.setItem('spacing', level);
}

function setFontSize(size, btn) {
  const html = document.documentElement;
  html.setAttribute('data-font', size);
  const scales = { small: 0.9, normal: 1, large: 1.25 };
  html.style.fontSize = 'calc(16px * ' + scales[size] + ')';
  document.querySelectorAll('#font-sm,#font-md,#font-lg').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  localStorage.setItem('fontSize', size);
  const labels = { small: 'Letra pequeña', normal: 'Letra normal', large: 'Letra grande' };
  toast('🔡 ' + (labels[size] || 'Tamaño ajustado'));
}

let reducedMotion = localStorage.getItem('reducedMotion') === 'true';

function toggleReducedMotion() {
  reducedMotion = !reducedMotion;
  document.documentElement.classList.toggle('reduce-motion', reducedMotion);
  const btn = document.getElementById('motion-btn');
  if (btn) {
    btn.setAttribute('aria-pressed', String(reducedMotion));
    btn.classList.toggle('active', reducedMotion);
  }
  localStorage.setItem('reducedMotion', String(reducedMotion));
  toast(reducedMotion ? '🎞 Animaciones reducidas' : '🎞 Animaciones activadas');
}

// ═══════════════════════════════════════════
// SCROLL-HIDE NAVBAR
// ═══════════════════════════════════════════
function initScrollNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  let lastY = 0;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < 80) {
          nav.classList.remove('nav-hidden');
        } else if (y > lastY + 4) {
          nav.classList.add('nav-hidden');
        } else if (y < lastY - 4) {
          nav.classList.remove('nav-hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════
// CHEESE CURSOR (index page)
// ═══════════════════════════════════════════
function initIndexCursor() {
  const fog    = document.getElementById('index-cursor-fog');
  const cheese = document.getElementById('index-cursor-cheese');
  if (!cheese) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    if (fog) fog.style.display = 'none';
    cheese.style.display = 'none';
    return;
  }
  document.body.classList.add('cursor-active');
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let fogX = mouseX, fogY = mouseY, cheeseX = mouseX, cheeseY = mouseY;
  let trailCounter = 0;

  document.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; });
  document.addEventListener('mouseleave', () => {
    if (fog) fog.style.opacity = '0';
    cheese.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    if (fog) fog.style.opacity = '1';
    cheese.style.opacity = '1';
  });
  document.addEventListener('mousedown', () => cheese.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cheese.classList.remove('clicking'));

  function spawnTrail(x, y) {
    const dot = document.createElement('div');
    dot.className = 'index-cursor-trail';
    dot.style.left = x + 'px';
    dot.style.top  = y + 'px';
    document.body.appendChild(dot);
    setTimeout(() => dot.remove(), 500);
  }

  (function animate() {
    if (fog) {
      fogX += (mouseX - fogX) * 0.09;
      fogY += (mouseY - fogY) * 0.09;
      fog.style.left = fogX + 'px';
      fog.style.top  = fogY + 'px';
    }
    cheeseX += (mouseX - cheeseX) * 0.18;
    cheeseY += (mouseY - cheeseY) * 0.18;
    cheese.style.left = cheeseX + 'px';
    cheese.style.top  = cheeseY + 'px';
    trailCounter++;
    const dist = Math.hypot(mouseX - cheeseX, mouseY - cheeseY);
    if (dist > 3 && trailCounter % 4 === 0) spawnTrail(cheeseX, cheeseY);
    requestAnimationFrame(animate);
  })();
}

// ═══════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════
function init() {
  // Restore theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      const btn = document.getElementById('theme-btn');
      if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
    }
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    const btn = document.getElementById('theme-btn');
    if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
  }

  // Restore high contrast
  if (localStorage.getItem('highContrast') === 'true') {
    highContrast = true;
    document.documentElement.classList.add('high-contrast');
    document.documentElement.style.setProperty('--gold', '#ffd700');
    const btn = document.getElementById('contrast-btn');
    if (btn) { btn.setAttribute('aria-pressed', 'true'); btn.classList.add('active'); }
  }

  // Restore spacing
  const savedSpacing = localStorage.getItem('spacing') || 'normal';
  const spacingBtn = document.getElementById('spacing-' + savedSpacing);
  if (spacingBtn) setSpacing(savedSpacing, spacingBtn);

  // Restore font size
  const savedFont = localStorage.getItem('fontSize') || 'normal';
  const fontMap = { small: 'font-sm', normal: 'font-md', large: 'font-lg' };
  const fontBtn = document.getElementById(fontMap[savedFont]);
  if (fontBtn) setFontSize(savedFont, fontBtn);

  // Restore reduced motion
  if (localStorage.getItem('reducedMotion') === 'true') {
    reducedMotion = true;
    document.documentElement.classList.add('reduce-motion');
    const mBtn = document.getElementById('motion-btn');
    if (mBtn) { mBtn.setAttribute('aria-pressed', 'true'); mBtn.classList.add('active'); }
  }

  // Restore language
  const savedLang = localStorage.getItem('lang') || 'es';
  currentLang = savedLang;
  const langBtn = document.getElementById('lang-' + savedLang);
  if (langBtn) { langBtn.classList.add('active'); langBtn.setAttribute('aria-pressed', 'true'); }
  const otherLang = savedLang === 'es' ? 'en' : 'es';
  const otherBtn = document.getElementById('lang-' + otherLang);
  if (otherBtn) { otherBtn.classList.remove('active'); otherBtn.setAttribute('aria-pressed', 'false'); }
  applyTranslations(savedLang);

  // A11y modal
  const a11yOverlay = document.getElementById('a11y-modal-overlay');
  if (a11yOverlay) a11yOverlay.addEventListener('click', closeA11yModal);

  // Onboarding
  const seen = sessionStorage.getItem('onboarding-seen');
  const ob = document.getElementById('onboarding');
  if (ob) {
    if (seen) { ob.classList.add('hidden'); }
  }

  // Dashboard
  renderDashboard();

  // Catalog
  renderProducts();
  updateCounts();
  renderPagination();

  // Scroll reveal
  initReveal();

  // Scroll-hide navbar
  initScrollNav();

  // Range input style
  updateRangeStyle();

  // Cheese cursor
  initIndexCursor();

  // Keyboard shortcuts
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('a11y-modal-overlay') &&
          document.getElementById('a11y-modal-overlay').classList.contains('open')) {
        closeA11yPanel(); return;
      }
      const pm = document.getElementById('product-modal');
      if (pm && pm.classList.contains('open')) { closeModal(); return; }
      if (document.getElementById('cart-sidebar') &&
          document.getElementById('cart-sidebar').classList.contains('open')) {
        closeCart(); return;
      }
      if (ob && !ob.classList.contains('hidden')) closeOnboarding();
    }
    if (e.key === 'Tab') {
      const pm = document.getElementById('product-modal');
      if (pm && pm.classList.contains('open')) {
        trapFocus(e, document.getElementById('modal-inner'));
      }
    }
  });
}

function trapFocus(e, container) {
  if (!container) return;
  const focusable = container.querySelectorAll('button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0], last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) { last.focus(); e.preventDefault(); }
  else if (!e.shiftKey && document.activeElement === last) { first.focus(); e.preventDefault(); }
}

// ═══════════════════════════════════════════
// ONBOARDING
// ═══════════════════════════════════════════
function nextStep(n) {
  document.querySelectorAll('.onboarding-step').forEach(s => s.classList.remove('active'));
  const step = document.getElementById('step-' + n);
  if (step) { step.classList.add('active'); const btn = step.querySelector('button'); if (btn) btn.focus(); }
}

function closeOnboarding() {
  const ob = document.getElementById('onboarding');
  if (ob) ob.classList.add('hidden');
  sessionStorage.setItem('onboarding-seen', '1');
  const mc = document.getElementById('main-content');
  if (mc) mc.focus();
}

// ═══════════════════════════════════════════
// DASHBOARD
// ═══════════════════════════════════════════
var newOrdersCount = 0;

// Restore from localStorage or use defaults
function loadOrdersFromStorage() {
  try {
    const saved = localStorage.getItem('liveOrders');
    const savedCount = localStorage.getItem('liveOrderCount');
    if (saved) {
      const orders = JSON.parse(saved).map(o => ({
        ...o,
        timestamp: o.timestamp ? new Date(o.timestamp) : null
      }));
      return {
        orders: orders,
        count: savedCount ? parseInt(savedCount, 10) : 142
      };
    }
    return { orders: RECENT_ORDERS.slice(), count: 142 };
  } catch(e) {
    return { orders: RECENT_ORDERS.slice(), count: 142 };
  }
}

const _stored = loadOrdersFromStorage();
var liveOrders = _stored.orders;
var liveOrderCount = _stored.count;

function saveOrdersToStorage() {
  try {
    // Timestamps se pierden en JSON, los convertimos a string
    const toSave = liveOrders.map(o => ({
      ...o,
      timestamp: o.timestamp ? o.timestamp.toString() : null,
      isNew: false  // al recargar ya no son "nuevos"
    }));
    localStorage.setItem('liveOrders', JSON.stringify(toSave));
    localStorage.setItem('liveOrderCount', String(liveOrderCount));
  } catch(e) {}
}

var STATUS_LABELS = {
  pending:   { icon: '⏳', text: 'Pendiente',  cls: 'badge-pending' },
  transit:   { icon: '🚚', text: 'En camino',  cls: 'badge-transit' },
  delivered: { icon: '✓',  text: 'Entregado',  cls: 'badge-delivered' }
};

function formatOrderTime(timestamp) {
  if (!timestamp) return '';
  var ts = (timestamp instanceof Date) ? timestamp : new Date(timestamp);
  if (isNaN(ts.getTime())) return '';
  var now = new Date();
  var diff = Math.floor((now - ts) / 1000);
  if (diff < 60)    return 'Hace unos segundos';
  if (diff < 3600)  return 'Hace ' + Math.floor(diff / 60) + ' min';
  if (diff < 86400) return 'Hace ' + Math.floor(diff / 3600) + 'h';
  return ts.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
}

function renderDashboard() {
  var ordersEl = document.getElementById('recent-orders');
  if (ordersEl) {
    for (var i = 0; i < liveOrders.length; i++) {
      var o = liveOrders[i];
      if (o.timestamp) o.date = formatOrderTime(o.timestamp);
    }
    var ordersHtml = '';
    for (var j = 0; j < liveOrders.length; j++) {
      var o2 = liveOrders[j];
      var st = STATUS_LABELS[o2.status] || STATUS_LABELS.pending;
      var itemDetail = '';
      if (o2.items) {
        var chips = '';
        for (var k = 0; k < o2.items.length; k++) {
          var it = o2.items[k];
          chips += '<span class="dash-order-item-chip">' + it.emoji + ' ' + it.name + (it.qty > 1 ? ' x' + it.qty : '') + '</span>';
        }
        itemDetail = '<div class="dash-order-items">' + chips + '</div>';
      }
      var newDot = (o2.isNew && j === 0) ? '<span class="live-dot" title="Nuevo pedido"></span> ' : '';
      var idTag = o2.id ? ' <span class="dash-order-id">#' + o2.id + '</span>' : '';
      ordersHtml += '<div class="dash-order' + (o2.isNew && j === 0 ? ' new-order' : '') + '" role="listitem">' +
        '<div class="dash-order-emoji" aria-hidden="true">' + o2.emoji + '</div>' +
        '<div class="dash-order-info">' +
          '<div class="dash-order-name">' + o2.name + idTag + '</div>' +
          itemDetail +
          '<div class="dash-order-meta">' + newDot + o2.date + '</div>' +
        '</div>' +
        '<div class="dash-order-right">' +
          '<div class="dash-order-price">' + o2.price + '</div>' +
          '<span class="dash-order-badge ' + st.cls + '" onclick="cycleOrderStatus(\'' + o2.id + '\')" title="Clic para actualizar estado">' +
            st.icon + ' ' + st.text +
          '</span>' +
        '</div>' +
      '</div>';
    }
    ordersEl.innerHTML = ordersHtml;

    var header = ordersEl.closest ? ordersEl.closest('.dash-panel') : null;
    if (header) header = header.querySelector('.dash-panel-header');
    if (header) {
      var existing = header.querySelector('.dash-new-badge');
      if (existing) existing.remove();
      if (newOrdersCount > 0) {
        var badge = document.createElement('span');
        badge.className = 'dash-new-badge';
        badge.textContent = newOrdersCount + ' nuevo' + (newOrdersCount > 1 ? 's' : '');
        header.appendChild(badge);
      }
    }
  }

  var topEl = document.getElementById('top-products');
  if (topEl) {
    var topHtml = '';
    for (var m = 0; m < TOP_PRODUCTS.length; m++) {
      var prod = TOP_PRODUCTS[m];
      topHtml += '<div class="dash-featured-item">' +
        '<div class="dash-featured-rank">#' + (m + 1) + '</div>' +
        '<div class="dash-featured-emoji">' + prod.emoji + '</div>' +
        '<div class="dash-featured-info">' +
          '<div class="dash-featured-name">' + prod.name + '</div>' +
          '<div class="dash-featured-sold">' + prod.sold + ' este mes</div>' +
        '</div>' +
      '</div>';
    }
    topEl.innerHTML = topHtml;
  }

  animateCounter('stat-orders', 0, liveOrderCount, 1200);
}

function animateCounter(id, from, to, dur) {
  const el = document.getElementById(id);
  if (!el) return;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(from + (to - from) * progress);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function cycleOrderStatus(orderId) {
  var order = null;
  for (var i = 0; i < liveOrders.length; i++) {
    if (liveOrders[i].id === orderId) { order = liveOrders[i]; break; }
  }
  if (!order) return;
  var cycle = { pending: 'transit', transit: 'delivered', delivered: 'pending' };
  order.status = cycle[order.status] || 'pending';
  saveOrdersToStorage();  
  renderDashboard();
  var st = STATUS_LABELS[order.status];
  toast('Pedido #' + orderId + ' > ' + st.icon + ' ' + st.text);
}

function addLiveOrder(orderId, cartSnapshot, grandTotal) {
  var topItem = cartSnapshot[0];
  var itemCount = 0;
  for (var i = 0; i < cartSnapshot.length; i++) itemCount += cartSnapshot[i].qty;
  var name = cartSnapshot.length === 1
    ? (topItem.name + (topItem.qty > 1 ? ' x' + topItem.qty : ''))
    : (topItem.name + ' + ' + (cartSnapshot.length - 1) + ' más');

  var newOrder = {
    name: name, emoji: topItem.emoji, date: 'Hace unos segundos',
    price: '£' + grandTotal, status: 'pending', id: orderId,
    isNew: true, timestamp: new Date(),
    items: cartSnapshot.map(function(i) {
      return { name: i.name, qty: i.qty, price: i.price, emoji: i.emoji };
    })
  };
  liveOrders.unshift(newOrder);
  if (liveOrders.length > 10) liveOrders.pop();
  liveOrderCount++;
  newOrdersCount++;
  saveOrdersToStorage(); 

  var statEl = document.getElementById('stat-orders');
  if (statEl) {
    statEl.textContent = liveOrderCount;
    statEl.classList.add('stat-bump');
    setTimeout(function() { statEl.classList.remove('stat-bump'); }, 600);
  }
  renderDashboard();

  var tc = document.getElementById('toast-container');
  if (tc) {
    var el = document.createElement('div');
    el.className = 'toast success';
    el.innerHTML = '✅ Pedido <strong>#' + orderId + '</strong> recibido · <a onclick="scrollToDashboard()" class="toast-action" style="cursor:pointer;color:var(--gold-light);text-decoration:underline;">Ver Dashboard ></a>';
    el.setAttribute('role', 'alert');
    tc.appendChild(el);
    setTimeout(function() { el.classList.add('out'); setTimeout(function() { el.remove(); }, 350); }, 5000);
  }

  setTimeout(function() { updateOrderStatus(orderId, 'transit'); }, 60000);
  setTimeout(function() { updateOrderStatus(orderId, 'delivered'); }, 180000);
}

function updateOrderStatus(orderId, newStatus) {
  var order = null;
  for (var i = 0; i < liveOrders.length; i++) {
    if (liveOrders[i].id === orderId) { order = liveOrders[i]; break; }
  }
  if (!order || order.status === 'delivered') return;
  order.status = newStatus;
  if (order.timestamp) order.date = formatOrderTime(order.timestamp);
  saveOrdersToStorage();
  renderDashboard();
  var labels = { transit: '🚚 Tu pedido está en camino', delivered: '✅ Tu pedido ha sido entregado' };
  if (labels[newStatus]) toast(labels[newStatus] + ' — #' + orderId, newStatus === 'delivered' ? 'success' : '');
}

function scrollToDashboard() {
  var el = document.getElementById('dashboard');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

setInterval(function() { if (liveOrders.length) renderDashboard(); }, 30000);

// ═══════════════════════════════════════════
// CATALOG — FILTER & RENDER
// ═══════════════════════════════════════════
function applyFilters() {
  searchQuery = (document.getElementById('search-input') || {}).value || '';
  sortBy = (document.getElementById('sort-select') || {}).value || 'default';

  filteredProducts = PRODUCTS.filter(p => {
    const matchCat   = currentCat === 'all' || p.cat === currentCat;
    const matchPrice = p.price <= maxPrice;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      p.origin.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q);
    return matchCat && matchPrice && matchSearch;
  });

  // Sort
  if (sortBy === 'price-asc')  filteredProducts.sort((a, b) => a.price - b.price);
  if (sortBy === 'price-desc') filteredProducts.sort((a, b) => b.price - a.price);
  if (sortBy === 'name-asc')   filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  if (sortBy === 'name-desc')  filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  if (sortBy === 'popular')    filteredProducts.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));

  currentPage = 1;
  renderProducts();
  updateCounts();
  renderPagination();
}

function setCatFilter(cat, btn) {
  currentCat = cat;
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  applyFilters();
}

function updatePriceFilter(input) {
  maxPrice = parseInt(input.value, 10);
  document.getElementById('price-display').textContent = '£' + maxPrice;
  updateRangeStyle();
  applyFilters();
}

function updateRangeStyle() {
  const input = document.getElementById('price-filter');
  if (!input) return;
  const pct = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.setProperty('--pct', pct + '%');
}

function resetFilters() {
  currentCat = 'all';
  maxPrice = 110;
  searchQuery = '';
  sortBy = 'default';
  const si = document.getElementById('search-input');
  if (si) si.value = '';
  const pf = document.getElementById('price-filter');
  if (pf) { pf.value = 110; updateRangeStyle(); }
  document.getElementById('price-display').textContent = '£110';
  const ss = document.getElementById('sort-select');
  if (ss) ss.value = 'default';
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  const allBtn = document.querySelector('[data-cat="all"]');
  if (allBtn) { allBtn.classList.add('active'); allBtn.setAttribute('aria-pressed', 'true'); }
  applyFilters();
  toast('Filtros restablecidos');
}

function setView(view) {
  currentView = view;
  const grid = document.getElementById('products-grid');
  if (view === 'list') {
    grid.classList.add('list-view');
  } else {
    grid.classList.remove('list-view');
  }
  document.getElementById('grid-btn').classList.toggle('active', view === 'grid');
  document.getElementById('list-btn').classList.toggle('active', view === 'list');
  document.getElementById('grid-btn').setAttribute('aria-pressed', String(view === 'grid'));
  document.getElementById('list-btn').setAttribute('aria-pressed', String(view === 'list'));
}

function updateCounts() {
  const cats = ['all', 'soft', 'hard', 'blue', 'goat', 'sheep', 'british', 'accompaniment'];
  cats.forEach(cat => {
    const el = document.getElementById('count-' + cat);
    if (!el) return;
    const count = cat === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === cat).length;
    el.textContent = count;
  });
  const showEl = document.getElementById('showing-count');
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredProducts.slice(start, start + PAGE_SIZE);
  if (showEl) showEl.textContent = pageItems.length;
  const countEl = document.getElementById('catalog-count');
  if (countEl) {
    countEl.innerHTML = 'Mostrando <strong>' + pageItems.length + '</strong> de <strong>' + filteredProducts.length + '</strong> productos';
  }
}

// ═══════════════════════════════════════════
// RENDER PRODUCTS
// ═══════════════════════════════════════════
function renderProducts() {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredProducts.slice(start, start + PAGE_SIZE);

  if (!pageItems.length) {
    grid.innerHTML = '<div class="no-results">' +
      '<div class="no-results-icon">🔍</div>' +
      '<div class="no-results-text">No se encontraron productos</div>' +
      '<p style="color:var(--text-secondary);font-size:15px;">Prueba con otros filtros o términos de búsqueda.</p>' +
      '<button onclick="resetFilters()" style="margin-top:16px;padding:10px 24px;background:var(--gold);color:var(--navy);border:none;border-radius:4px;cursor:pointer;font-family:Josefin Sans,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Limpiar filtros</button>' +
    '</div>';
    return;
  }

  const catBgMap = {
    soft: 'bg-soft', hard: 'bg-hard', blue: 'bg-blue',
    goat: 'bg-goat', sheep: 'bg-sheep', british: 'bg-british',
    accompaniment: 'bg-soft'
  };
  const catLabels = {
    soft: 'Suave', hard: 'Duro', blue: 'Azul', goat: 'Cabra',
    sheep: 'Oveja', british: 'Británico', accompaniment: 'Acompañamiento'
  };

  grid.innerHTML = pageItems.map((p, idx) => {
    const bg = catBgMap[p.cat] || 'bg-soft';
    const catLabel = catLabels[p.cat] || p.cat;
    const isWished = wishlist.has(p.id);

    // Badges
    let badges = '';
    if (p.badge) {
      if (p.badge.includes('popular')) badges += '<span class="product-badge badge-popular">Popular</span>';
      else if (p.badge.includes('new')) badges += '<span class="product-badge badge-new">Nuevo</span>';
      else if (p.badge.includes('british')) badges += '<span class="product-badge badge-british">🇬🇧 British</span>';
    }

    return '<article class="product-card" role="listitem" tabindex="0" ' +
      'onclick="openModal(' + p.id + ')" ' +
      'onkeydown="if(event.key===\'Enter\'||event.key===\' \'){openModal(' + p.id + ')}" ' +
      'aria-label="' + p.name + ', £' + p.price.toFixed(2) + '">' +
      '<div class="product-thumb">' +
        '<div class="product-img-wrap ' + bg + '">' +
          '<img class="product-img" src="' + p.img + '" alt="' + p.name + '" loading="lazy" ' +
            'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
          '<div class="product-emoji-fallback" style="display:none;">' + p.emoji + '</div>' +
        '</div>' +
        badges +
        '<button class="product-wishlist" ' +
          'onclick="toggleWishlist(event,' + p.id + ')" ' +
          'aria-label="' + (isWished ? 'Quitar de favoritos' : 'Añadir a favoritos') + '" ' +
          'aria-pressed="' + isWished + '" ' +
          'id="wish-' + p.id + '">' +
          (isWished ? '❤️' : '🤍') +
        '</button>' +
      '</div>' +
      '<div class="product-info">' +
        '<div class="product-cat">' + catLabel + '</div>' +
        '<div class="product-name">' + p.name + '</div>' +
        '<div class="product-origin">📍 ' + p.origin + '</div>' +
        '<div class="product-desc">' + p.desc + '</div>' +
        '<div class="product-meta">' +
          '<span class="product-meta-label">Intensidad</span>' +
          '<span class="product-meta-value">' + p.intensity + '</span>' +
          '<span class="product-meta-label">Leche</span>' +
          '<span class="product-meta-value">' + p.milk + '</span>' +
          '<span class="product-meta-label">Maduración</span>' +
          '<span class="product-meta-value">' + p.maturity + '</span>' +
        '</div>' +
        '<div class="product-footer">' +
          '<div class="product-price">£' + p.price.toFixed(2) + '<small>' + p.weight + '</small></div>' +
          '<button class="product-add-btn" ' +
            'onclick="event.stopPropagation();addToCart(' + p.id + ',1)" ' +
            'aria-label="Añadir ' + p.name + ' al carrito">+</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  updateCounts();
}

// ═══════════════════════════════════════════
// PAGINATION
// ═══════════════════════════════════════════
function renderPagination() {
  const container = document.getElementById('pagination');
  if (!container) return;
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (totalPages <= 1) { container.innerHTML = ''; return; }

  let html = '<button class="page-btn" onclick="goToPage(' + (currentPage - 1) + ')" ' +
    (currentPage === 1 ? 'disabled' : '') + ' aria-label="Página anterior"><</button>';

  for (let i = 1; i <= totalPages; i++) {
    html += '<button class="page-btn' + (i === currentPage ? ' active' : '') + '" ' +
      'onclick="goToPage(' + i + ')" aria-label="Página ' + i + '" ' +
      (i === currentPage ? 'aria-current="page"' : '') + '>' + i + '</button>';
  }

  html += '<button class="page-btn" onclick="goToPage(' + (currentPage + 1) + ')" ' +
    (currentPage === totalPages ? 'disabled' : '') + ' aria-label="Página siguiente">></button>';

  container.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderProducts();
  renderPagination();
  updateCounts();
  const catalog = document.getElementById('catalog');
  if (catalog) catalog.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ═══════════════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════════════
function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  currentProduct = p;

  const catBgMap = {
    soft: '#f5ece0', hard: '#e8d5a0', blue: '#c8d8e8',
    goat: '#e8e8e0', sheep: '#f0e8d8', british: '#1a3050',
    accompaniment: '#f0e8d0'
  };
  const catLabels = {
    soft: 'Suave', hard: 'Duro', blue: 'Azul', goat: 'Cabra',
    sheep: 'Oveja', british: 'Británico', accompaniment: 'Acompañamiento'
  };

  document.getElementById('modal-emoji').textContent = p.emoji;
  document.getElementById('modal-img-bg').style.background = catBgMap[p.cat] || '#f5ece0';
  document.getElementById('modal-cat').textContent = catLabels[p.cat] || p.cat;
  document.getElementById('modal-origin').textContent = '📍 ' + p.origin;
  document.getElementById('modal-product-name').textContent = p.name;
  document.getElementById('modal-tagline').textContent = p.tagline;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-price').textContent = p.price.toFixed(2);
  document.getElementById('modal-weight-label').textContent = p.weight;
  document.getElementById('modal-pairing').textContent = p.pairing;
  document.getElementById('modal-qty').value = 1;

  document.getElementById('modal-attrs').innerHTML =
    '<div class="modal-attr"><div class="modal-attr-label">Intensidad</div><div class="modal-attr-value">' + p.intensity + '</div></div>' +
    '<div class="modal-attr"><div class="modal-attr-label">Leche</div><div class="modal-attr-value">' + p.milk + '</div></div>' +
    '<div class="modal-attr"><div class="modal-attr-label">Maduración</div><div class="modal-attr-value">' + p.maturity + '</div></div>';

  const modal = document.getElementById('product-modal');
  modal.classList.add('open');
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  const addBtn = document.getElementById('modal-add-btn');
  if (addBtn) { addBtn.classList.remove('added'); addBtn.textContent = '🛒 Añadir al Carrito'; }

  setTimeout(() => {
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
  }, 50);
}

function closeModal() {
  const modal = document.getElementById('product-modal');
  modal.classList.remove('open');
  modal.style.display = 'none';
  document.body.style.overflow = '';
  currentProduct = null;
}

function handleModalOverlayClick(e) {
  if (e.target === document.getElementById('product-modal')) closeModal();
}

function changeQty(dir) {
  const input = document.getElementById('modal-qty');
  let val = parseInt(input.value, 10) + dir;
  if (val < 1) val = 1;
  if (val > 20) val = 20;
  input.value = val;
}

function addToCartFromModal() {
  if (!currentProduct) return;
  const qty = parseInt(document.getElementById('modal-qty').value, 10) || 1;
  addToCart(currentProduct.id, qty);
  const btn = document.getElementById('modal-add-btn');
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '✅ ¡Añadido!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = '🛒 Añadir al Carrito';
    }, 1500);
  }
}

// ═══════════════════════════════════════════
// CART
// ═══════════════════════════════════════════
function addToCart(productId, qty) {
  qty = qty || 1;
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;

  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty = Math.min(existing.qty + qty, 20);
  } else {
    cart.push({ id: p.id, name: p.name, price: p.price, weight: p.weight, emoji: p.emoji, img: p.img, qty: qty });
  }

  updateCartUI();
  toast(p.emoji + ' ' + p.name + ' añadido al carrito', 'success');

  // Bump count badge
  const countEl = document.getElementById('cart-count');
  if (countEl) { countEl.classList.add('bump'); setTimeout(() => countEl.classList.remove('bump'), 300); }
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  updateCartUI();
}

function changeCartQty(productId, dir) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += dir;
  if (item.qty <= 0) { removeFromCart(productId); return; }
  if (item.qty > 20) item.qty = 20;
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
  toast('Carrito vaciado');
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);

  // Count badge
  const countEl = document.getElementById('cart-count');
  if (countEl) countEl.textContent = totalItems;
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.setAttribute('aria-label', 'Abrir carrito, ' + totalItems + ' artículos');

  // Empty / items
  const emptyEl = document.getElementById('cart-empty');
  const itemsList = document.getElementById('cart-items-list');
  const footer = document.getElementById('cart-footer');

  if (!cart.length) {
    if (emptyEl) { emptyEl.style.display = 'block'; emptyEl.classList.add('visible'); }
    if (itemsList) itemsList.innerHTML = '';
    if (footer) footer.style.display = 'none';
    return;
  }

  if (emptyEl) { emptyEl.style.display = 'none'; emptyEl.classList.remove('visible'); }
  if (footer) footer.style.display = 'block';

  // Shipping bar
  const freeThreshold = 40;
  const pct = Math.min((totalPrice / freeThreshold) * 100, 100);
  const remaining = Math.max(freeThreshold - totalPrice, 0).toFixed(2);
  const shippingBarHtml =
    '<div class="cart-shipping-bar">' +
      '<div class="cart-shipping-track"><div class="cart-shipping-fill" style="width:' + pct + '%"></div></div>' +
      (totalPrice >= freeThreshold
        ? '<p class="cart-shipping-label achieved">✅ ¡Envío gratis incluido!</p>'
        : '<p class="cart-shipping-label">Añade <strong>£' + remaining + '</strong> más para envío gratis</p>') +
    '</div>';

  // Items
  if (itemsList) {
    itemsList.innerHTML =
      '<div class="cart-clear-row">' +
        '<span class="cart-item-count">' + totalItems + ' artículo' + (totalItems !== 1 ? 's' : '') + '</span>' +
        '<button class="cart-clear-btn" onclick="clearCart()">Vaciar carrito</button>' +
      '</div>' +
      cart.map(item => {
        const subtotal = (item.price * item.qty).toFixed(2);
        return '<div class="cart-item" role="listitem">' +
          '<div class="cart-item-thumb">' +
            '<img class="cart-item-img" src="' + item.img + '" alt="' + item.name + '" ' +
              'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
            '<div class="cart-item-emoji-fallback" style="display:none;">' + item.emoji + '</div>' +
          '</div>' +
          '<div class="cart-item-info">' +
            '<div class="cart-item-name">' + item.name + '</div>' +
            '<div class="cart-item-meta"><span>' + item.weight + '</span></div>' +
            '<div class="cart-item-row">' +
              '<div class="cart-item-qty">' +
                '<button class="cart-qty-btn" onclick="changeCartQty(' + item.id + ',-1)" aria-label="Reducir">−</button>' +
                '<span class="cart-qty-num">' + item.qty + '</span>' +
                '<button class="cart-qty-btn" onclick="changeCartQty(' + item.id + ',1)" aria-label="Aumentar">+</button>' +
              '</div>' +
              '<div class="cart-item-price">£' + subtotal + '</div>' +
            '</div>' +
          '</div>' +
          '<button class="cart-remove" onclick="removeFromCart(' + item.id + ')" aria-label="Eliminar ' + item.name + '">✕</button>' +
        '</div>';
      }).join('');
  }

  // Footer totals
  if (footer) {
    const shipping = totalPrice >= freeThreshold ? 0 : 4.99;
    const grand = (totalPrice + shipping).toFixed(2);
    footer.innerHTML =
      shippingBarHtml +
      '<div class="cart-subtotal">' +
        '<span class="cart-subtotal-label">Total' + (shipping > 0 ? ' + £4.99 envío' : ' (envío gratis)') + '</span>' +
        '<span class="cart-subtotal-value">£' + grand + '</span>' +
      '</div>' +
      '<div class="cart-note">✅ Envío gratis en pedidos +£40</div>' +
      '<button class="cart-checkout-btn" onclick="handleCheckout()" aria-label="Proceder al pago">Proceder al Pago ></button>';
  }
}

function openCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) { sidebar.classList.add('open'); sidebar.setAttribute('aria-hidden', 'false'); }
  if (overlay) { overlay.classList.add('open'); }
  document.body.style.overflow = 'hidden';
  const closeBtn = sidebar ? sidebar.querySelector('.cart-close') : null;
  if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
}

function closeCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) { sidebar.classList.remove('open'); sidebar.setAttribute('aria-hidden', 'true'); }
  if (overlay) { overlay.classList.remove('open'); }
  document.body.style.overflow = '';
  const cartBtn = document.getElementById('cart-btn');
  if (cartBtn) cartBtn.focus();
}

// ═══════════════════════════════════════════
// CHECKOUT
// ═══════════════════════════════════════════
function handleCheckout() {
  if (!cart.length) { toast('Tu carrito está vacío', 'error'); return; }

  const totalPrice = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping   = totalPrice >= 40 ? 0 : 4.99;
  const grand      = (totalPrice + shipping).toFixed(2);
  const orderId    = 'ORD-' + Date.now().toString(36).toUpperCase().slice(-6);

  // Create checkout modal if it doesn't exist
  let overlay = document.getElementById('checkout-modal-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'checkout-modal-overlay';
    overlay.id = 'checkout-modal-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-labelledby', 'checkout-title');
    document.body.appendChild(overlay);
  }

  const itemsRows = cart.map(i =>
    '<div class="checkout-row">' +
      '<span class="checkout-row-name">' + i.emoji + ' ' + i.name + ' x' + i.qty + '</span>' +
      '<span class="checkout-row-price">£' + (i.price * i.qty).toFixed(2) + '</span>' +
    '</div>'
  ).join('');

  overlay.innerHTML =
    '<div class="checkout-modal" id="checkout-modal-inner">' +
      '<button class="checkout-modal-close" onclick="closeCheckout()" aria-label="Cerrar">✕</button>' +
      '<div class="checkout-hero">' +
        '<span class="checkout-icon">🧀</span>' +
        '<h2 class="checkout-title" id="checkout-title">Confirma tu <em>pedido</em></h2>' +
        '<p class="checkout-sub">Pedido ' + orderId + '</p>' +
      '</div>' +
      '<div class="checkout-body">' +
        '<div class="checkout-items">' + itemsRows + '</div>' +
        '<div class="checkout-totals">' +
          '<div class="checkout-row"><span>Subtotal</span><span>£' + totalPrice.toFixed(2) + '</span></div>' +
          '<div class="checkout-row"><span>Envío</span><span class="' + (shipping === 0 ? 'checkout-free' : '') + '">' + (shipping === 0 ? '✅ Gratis' : '£4.99') + '</span></div>' +
          '<div class="checkout-row checkout-grand"><span><strong>Total</strong></span><span><strong>£' + grand + '</strong></span></div>' +
        '</div>' +
        '<div class="checkout-info">' +
          '<p>📍 Entrega en Nottingham y alrededores</p>' +
          '<p>🕐 Plazo estimado: 24 horas hábiles</p>' +
          '<p>📞 Confirmación por teléfono o email</p>' +
        '</div>' +
        '<div class="checkout-actions">' +
          '<button class="checkout-confirm-btn" id="checkout-confirm-btn" onclick="confirmOrder(\'' + orderId + '\',' + grand + ')">✅ Confirmar Pedido — £' + grand + '</button>' +
          '<button class="checkout-back-btn" onclick="closeCheckout()">< Volver al carrito</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  overlay.addEventListener('click', e => { if (e.target === overlay) closeCheckout(); });

  setTimeout(() => {
    const btn = overlay.querySelector('.checkout-confirm-btn');
    if (btn) btn.focus();
  }, 50);
}

function closeCheckout() {
  const overlay = document.getElementById('checkout-modal-overlay');
  if (overlay) { overlay.classList.remove('open'); }
  document.body.style.overflow = '';
}

function confirmOrder(orderId, grand) {
  const btn = document.getElementById('checkout-confirm-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Procesando...'; }

  const cartSnapshot = cart.map(i => ({ ...i }));

  setTimeout(() => {
    // Show success screen
    const overlay = document.getElementById('checkout-modal-overlay');
    if (overlay) {
      const inner = overlay.querySelector('.checkout-modal');
      if (inner) {
        inner.innerHTML =
          '<div class="checkout-success">' +
            '<div class="checkout-success-icon">🎉</div>' +
            '<h2 class="checkout-success-title">¡Pedido Confirmado!</h2>' +
            '<p class="checkout-success-sub">Referencia: #' + orderId + '</p>' +
            '<p class="checkout-success-text">Hemos recibido tu pedido. Nuestro equipo en Nottingham lo preparará y te contactará para confirmar la entrega.</p>' +
            '<div class="checkout-success-info">' +
              '<p>📦 Total cobrado: <strong>£' + grand + '</strong></p>' +
              '<p>🚚 Entrega estimada: 24h hábiles</p>' +
              '<p>📞 Te llamaremos para confirmar</p>' +
            '</div>' +
            '<button onclick="closeCheckout();scrollToDashboard();" ' +
              'style="margin-top:20px;padding:14px 32px;background:var(--gold);color:var(--navy);border:none;border-radius:6px;cursor:pointer;font-family:Josefin Sans,sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Ver Dashboard ></button>' +
          '</div>';
      }
    }

    // Register live order & clear cart
    addLiveOrder(orderId, cartSnapshot, grand);
    cart = [];
    updateCartUI();
    closeCart();

    setTimeout(() => { closeCheckout(); }, 8000);
  }, 1800);
}

// ═══════════════════════════════════════════
// WISHLIST
// ═══════════════════════════════════════════
function toggleWishlist(e, productId) {
  e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    toast('Eliminado de favoritos');
  } else {
    wishlist.add(productId);
    toast(p.emoji + ' Añadido a favoritos', 'success');
  }
  const btn = document.getElementById('wish-' + productId);
  if (btn) {
    btn.textContent = wishlist.has(productId) ? '❤️' : '🤍';
    btn.setAttribute('aria-pressed', String(wishlist.has(productId)));
    btn.setAttribute('aria-label', wishlist.has(productId) ? 'Quitar de favoritos' : 'Añadir a favoritos');
  }
}

// ═══════════════════════════════════════════
// FORMS
// ═══════════════════════════════════════════
function validateField(input) {
  const id = input.id;
  const hint = document.getElementById(id + '-hint');
  if (!hint) return true;
  let error = '';
  if (input.required && !input.value.trim()) {
    error = 'Este campo es obligatorio.';
  } else if (input.type === 'email' && input.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    error = 'Introduce un email válido.';
  } else if (input.value.trim().length > 0 && input.minLength && input.value.length < input.minLength) {
    error = 'Mínimo ' + input.minLength + ' caracteres.';
  }
  if (error) {
    input.classList.add('error'); input.classList.remove('success');
    hint.innerHTML = '<span class="hint-error">⚠ ' + error + '</span>';
    input.setAttribute('aria-invalid', 'true');
  } else if (input.value.trim()) {
    input.classList.remove('error'); input.classList.add('success');
    hint.innerHTML = '<span class="hint-success">✓ Correcto</span>';
    input.setAttribute('aria-invalid', 'false');
  } else {
    input.classList.remove('error', 'success');
    hint.innerHTML = '';
    input.removeAttribute('aria-invalid');
  }
  return !error;
}

function handleFormSubmit(e) {
  e.preventDefault();
  const fields = ['fname', 'lname', 'email', 'address'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (el && !validateField(el)) valid = false;
  });
  if (!valid) {
    toast('Por favor corrige los errores del formulario.', 'error');
    const first = document.querySelector('.form-input.error');
    if (first) first.focus();
    return;
  }
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  if (btn) btn.disabled = true;
  if (btn) btn.classList.add('loading');
  if (btnText) btnText.textContent = 'Enviando...';
  setTimeout(() => {
    if (btn) { btn.classList.remove('loading'); btn.classList.add('sent'); }
    if (btnText) btnText.textContent = '✅ Pedido enviado';
    toast('¡Pedido enviado con éxito! Te contactaremos pronto.', 'success');
    setTimeout(() => {
      if (btn) { btn.disabled = false; btn.classList.remove('sent'); }
      if (btnText) btnText.textContent = 'Enviar Pedido';
      const form = document.getElementById('order-form');
      if (form) form.reset();
      fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('success', 'error');
        const hint = document.getElementById(id + '-hint');
        if (hint) hint.innerHTML = '';
      });
    }, 3000);
  }, 1800);
}

function handleNewsletter(e) {
  e.preventDefault();
  const input = document.getElementById('newsletter-email');
  if (!input || !input.value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
    if (input) input.style.borderColor = 'var(--error)';
    toast('Introduce un email válido.', 'error');
    if (input) { input.focus(); setTimeout(() => input.style.borderColor = '', 2000); }
    return;
  }
  const btn = e.target.querySelector('button');
  if (btn) { btn.textContent = '✅ ¡Suscrito!'; btn.style.background = 'var(--success)'; }
  input.value = '';
  toast('¡Suscripción confirmada!', 'success');
  setTimeout(() => {
    if (btn) { btn.textContent = 'Suscribirse >'; btn.style.background = ''; }
  }, 3000);
}

// ═══════════════════════════════════════════
// TOAST
// ═══════════════════════════════════════════
function toast(msg, type) {
  type = type || '';
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.textContent = msg;
  el.setAttribute('role', 'alert');
  container.appendChild(el);
  setTimeout(() => {
    el.classList.add('out');
    setTimeout(() => el.remove(), 350);
  }, 2800);
}

// ═══════════════════════════════════════════
// SCROLL REVEAL
// ═══════════════════════════════════════════
let revealObserver;
function initReveal() {
  if (!window.IntersectionObserver) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ═══════════════════════════════════════════
// HAMBURGER MENU
// ═══════════════════════════════════════════
function toggleMenu() {
  const links = document.getElementById('nav-links');
  const btn   = document.getElementById('hamburger-btn');
  if (!links || !btn) return;
  const isOpen = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
}

// ═══════════════════════════════════════════
// PRODUCT PICKER — Contact form
// ═══════════════════════════════════════════
let pickerSelection = {};

function renderProductPicker(cat) {
  var wrap = document.getElementById('product-picker-wrap');
  if (!wrap) return;
  if (!cat) { wrap.innerHTML = ''; updatePickerSummary(); return; }

  var items = PRODUCTS.filter(function(p) { return p.cat === cat; });
  if (!items.length) {
    wrap.innerHTML = '<p style="font-family:Josefin Sans,sans-serif;font-size:11px;color:var(--text-secondary);padding:10px 0;">Sin productos en esta categoría.</p>';
    return;
  }

  var countLabel = items.length + ' producto' + (items.length !== 1 ? 's' : '');
  var rows = '';
  for (var i = 0; i < items.length; i++) {
    var p = items[i];
    var sel = pickerSelection[p.id];
    var qty = sel ? sel.qty : 0;
    var qtyControls = sel
      ? '<button class="picker-qty-btn" onclick="changePickerQty(' + p.id + ',-1)">−</button>' +
        '<span class="picker-qty-num">' + qty + '</span>' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + p.id + ',1)">+</button>'
      : '<button class="picker-qty-btn" onclick="togglePickerItem(' + p.id + ')" style="width:auto;padding:0 10px;border-radius:12px;font-size:11px;">+ Añadir</button>';

    rows += '<div class="product-picker-item' + (sel ? ' selected' : '') + '" role="option" aria-selected="' + (sel ? 'true' : 'false') + '">' +
      '<span class="picker-item-emoji" aria-hidden="true">' + p.emoji + '</span>' +
      '<div class="picker-item-info">' +
        '<div class="picker-item-name">' + p.name + '</div>' +
        '<div class="picker-item-origin">📍 ' + p.origin + ' · ' + p.weight + '</div>' +
      '</div>' +
      '<span class="picker-item-price">£' + p.price.toFixed(2) + '</span>' +
      '<div class="picker-item-qty-wrap" onclick="event.stopPropagation()">' + qtyControls + '</div>' +
    '</div>';
  }

  wrap.innerHTML =
    '<div class="product-picker" id="product-picker" role="listbox" aria-multiselectable="true">' +
      '<div class="product-picker-header">Selecciona y ajusta cantidad <span class="product-picker-count">' + countLabel + '</span></div>' +
      '<div class="product-picker-list">' + rows + '</div>' +
    '</div>';
}

function togglePickerItem(productId) {
  var product = PRODUCTS.find(function(p) { return p.id === productId; });
  if (!product) return;
  if (pickerSelection[productId]) {
    delete pickerSelection[productId];
    toast(product.emoji + ' ' + product.name + ' quitado del pedido');
  } else {
    pickerSelection[productId] = { product: product, qty: 1 };
    toast('✓ ' + product.name + ' añadido al pedido', 'success');
  }
  var cat = document.getElementById('category') ? document.getElementById('category').value : '';
  if (cat) renderProductPicker(cat);
  updatePickerSummary();
  autoFillOrderMessage();
}

function changePickerQty(productId, dir) {
  var sel = pickerSelection[productId];
  if (!sel) { togglePickerItem(productId); return; }
  var newQty = sel.qty + dir;
  if (newQty <= 0) {
    delete pickerSelection[productId];
    toast(sel.product.emoji + ' ' + sel.product.name + ' quitado del pedido');
  } else {
    sel.qty = Math.min(newQty, 20);
  }
  var cat = document.getElementById('category') ? document.getElementById('category').value : '';
  if (cat) renderProductPicker(cat);
  updatePickerSummary();
  autoFillOrderMessage();
}

function updatePickerSummary() {
  var wrap = document.getElementById('picker-selected-wrap');
  var list = document.getElementById('picker-selected-list');
  var totalEl = document.getElementById('picker-total');
  if (!wrap || !list || !totalEl) return;
  var selected = Object.values(pickerSelection);
  if (!selected.length) { wrap.classList.remove('visible'); return; }
  wrap.classList.add('visible');
  var total = 0;
  var itemsHtml = '';
  for (var i = 0; i < selected.length; i++) {
    var s = selected[i];
    var subtotal = s.product.price * s.qty;
    total += subtotal;
    itemsHtml += '<li class="picker-selected-item">' +
      '<span>' + s.product.emoji + ' ' + s.product.name +
        '<span style="color:var(--text-secondary);font-size:10px;"> x' + s.qty + ' — £' + subtotal.toFixed(2) + '</span>' +
      '</span>' +
      '<div style="display:flex;align-items:center;gap:4px;">' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + s.product.id + ',-1)" style="width:20px;height:20px;font-size:12px;">−</button>' +
        '<span class="picker-qty-num" style="font-size:12px;">' + s.qty + '</span>' +
        '<button class="picker-qty-btn" onclick="changePickerQty(' + s.product.id + ',1)" style="width:20px;height:20px;font-size:12px;">+</button>' +
        '<button class="picker-remove-btn" onclick="togglePickerItem(' + s.product.id + ')" aria-label="Quitar">✕</button>' +
      '</div>' +
    '</li>';
  }
  list.innerHTML = itemsHtml;
  var freeMsg = total >= 40 ? '(envío gratis incluido)' : '(+ £4.99 envío si pedido < £40)';
  totalEl.innerHTML = 'Total estimado: <strong>£' + total.toFixed(2) + '</strong> <span style="font-size:9px;color:var(--text-secondary);margin-left:4px;">' + freeMsg + '</span>';
}

function autoFillOrderMessage() {
  var msgEl = document.getElementById('message');
  if (!msgEl || msgEl.dataset.manuallyEdited) return;
  var selected = Object.values(pickerSelection);
  if (!selected.length) { msgEl.value = ''; return; }
  var lines = [];
  var total = 0;
  for (var i = 0; i < selected.length; i++) {
    var s = selected[i];
    total += s.product.price * s.qty;
    lines.push('• ' + s.product.name + ' x' + s.qty + ' (' + s.product.weight + ' c/u) — £' + (s.product.price * s.qty).toFixed(2));
  }
  var shipping = total >= 40 ? 'Envío gratis' : 'Envío £4.99';
  msgEl.value = 'Me gustaría pedir los siguientes productos:\n' + lines.join('\n') + '\n\nSubtotal: £' + total.toFixed(2) + ' - ' + shipping;
}

// ═══════════════════════════════════════════
// DOM READY
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  // Nav links close on click (mobile)
  document.querySelectorAll('#nav-links a').forEach(function(a) {
    a.addEventListener('click', function() {
      var links = document.getElementById('nav-links');
      var btn   = document.getElementById('hamburger-btn');
      if (links) links.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Message field manual edit tracking
  var msgEl = document.getElementById('message');
  if (msgEl) msgEl.addEventListener('input', function() { msgEl.dataset.manuallyEdited = '1'; });

  // Run main init
  init();
});

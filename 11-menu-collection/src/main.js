import './styles.css';

const menus={
  'cocina-catrina':{
    name:'Cocina Catrina',tagline:'México servido con memoria',eyebrow:'COCINA MEXICANA · RECETAS DE CASA',mark:'CC',theme:['#b6322a','#f1a93b','#fff7e9','#342019'],hours:'Mar–Dom · 1:00 pm a 10:30 pm',address:'Col. Americana · Guadalajara',
    categories:['Todos','Entradas','Platos fuertes','Postres'],
    items:[
      ['Esquites al comal','Maíz tatemado, epazote, mayonesa de chile ancho y queso Cotija.','Entradas',78,'🌽','Favorito'],
      ['Tostadas de atún','Atún sellado, aguacate, poro crujiente y salsa macha de la casa.','Entradas',148,'🐟',''],
      ['Mole de la abuela','Pechuga de pollo, mole poblano, arroz rojo y ajonjolí tostado.','Platos fuertes',219,'🍗','De la casa'],
      ['Chile relleno','Chile poblano relleno de queso, caldillo de jitomate y frijoles.','Platos fuertes',188,'🫑','Vegetariano'],
      ['Cochinita de cocción lenta','Cerdo adobado, cebolla morada, habanero y tortillas hechas a mano.','Platos fuertes',235,'🍲',''],
      ['Pan de elote tibio','Con crema de vainilla, caramelo de piloncillo y nuez.','Postres',92,'🍮','Nuevo']]
  },
  'pulpo-loco':{
    name:'Pulpo Loco',tagline:'Antojo sin reglas',eyebrow:'SNACK BAR · DULCE, SALADO Y PICANTE',mark:'PL',theme:['#7525d8','#ff4d8d','#fff6c9','#27133d'],hours:'Lun–Dom · 2:00 pm a 11:00 pm',address:'Zona Centro · Monterrey',
    categories:['Todos','Salados','Alitas','Dulces'],
    items:[
      ['Salchipulpos extremos','Salchicha crujiente, papas sazonadas, queso amarillo y aderezo chipotle.','Salados',105,'🐙','Más pedido'],
      ['Papas volcán','Papas gajo, boneless, queso, jalapeño, tocino y salsa búfalo.','Salados',149,'🍟','Para compartir'],
      ['Alitas fuego mango','8 piezas bañadas en mango habanero, con apio y aderezo ranch.','Alitas',169,'🍗','Picante'],
      ['Alitas BBQ tamarindo','8 piezas en BBQ de tamarindo, con zanahoria y dip de queso azul.','Alitas',169,'🔥',''],
      ['Fresas con crema nube','Fresas frescas, crema dulce, leche condensada y crumble de vainilla.','Dulces',98,'🍓','Favorito'],
      ['Mini hotcakes unicornio','12 mini hotcakes, chocolate blanco, frutos rojos y chispas.','Dulces',112,'🥞','Nuevo']]
  },
  'tavola-nonna':{
    name:'Tavola Nonna',tagline:'Una mesa, muchas historias',eyebrow:'CUCINA ITALIANA · PASTA FRESCA',mark:'TN',theme:['#275b43','#b75a38','#f4eee2','#22372d'],hours:'Mar–Dom · 2:00 pm a 11:00 pm',address:'Roma Norte · Ciudad de México',
    categories:['Todos','Antipasti','Pasta','Pizza','Dolci'],
    items:[
      ['Burrata e pomodori','Burrata cremosa, tomates rostizados, albahaca, aceite de oliva y focaccia.','Antipasti',225,'🧀','Para compartir'],
      ['Tagliatelle al ragù','Pasta fresca, ragù cocinado por seis horas y Parmigiano Reggiano.','Pasta',248,'🍝','Firma Nonna'],
      ['Ravioli di zucca','Ravioles de calabaza, mantequilla de salvia, avellana y parmesano.','Pasta',235,'🥟','Vegetariano'],
      ['Pizza Margherita','Masa de 48 horas, pomodoro San Marzano, fior di latte y albahaca.','Pizza',210,'🍕','Clásica'],
      ['Pizza Bosco','Hongos, taleggio, cebolla confitada, tomillo y aceite de trufa.','Pizza',268,'🍄',''],
      ['Tiramisù della casa','Mascarpone, café espresso, cacao y bizcocho savoiardi.','Dolci',125,'☕','Imperdible']]
  },
  'taco-barrio':{
    name:'Taco Barrio',tagline:'La esquina siempre encendida',eyebrow:'TAQUERÍA · HECHO AL MOMENTO',mark:'TB',theme:['#e85d24','#143f3a','#fff4d6','#172e2c'],hours:'Lun–Dom · 6:00 pm a 2:00 am',address:'Barrio Antiguo · Monterrey',
    categories:['Todos','Tacos','Especiales','Bebidas'],
    items:[
      ['Taco de pastor','Cerdo al trompo, piña, cebolla, cilantro y salsa de chile morita.','Tacos',28,'🌮','El clásico'],
      ['Taco de suadero','Suadero suave, cebolla, cilantro y salsa verde tatemada.','Tacos',31,'🌮',''],
      ['Taco de birria','Birria de res, tortilla dorada, cebolla, cilantro y consomé corto.','Tacos',38,'🌶️','Favorito'],
      ['Gringa del barrio','Tortilla de harina, pastor, queso Oaxaca, piña y cebolla.','Especiales',78,'🫓',''],
      ['Volcán norteño','Tostada, carne asada, costra de queso, aguacate y salsa roja.','Especiales',82,'🔥','Nuevo'],
      ['Agua de horchata','Arroz, canela y un toque de vainilla. Vaso de 500 ml.','Bebidas',42,'🥤','Refill']]
  },
  'carnitas-don-chuy':{
    name:'Carnitas Don Chuy',tagline:'Del cazo a tu mesa',eyebrow:'CARNITAS · TRADICIÓN DESDE 1987',mark:'DC',theme:['#8f2f25','#244b36','#fff1d2','#34241c'],hours:'Sáb–Dom · 8:00 am a 5:00 pm',address:'Santa Tere · Guadalajara',
    categories:['Todos','Por taco','Por kilo','Paquetes'],
    items:[
      ['Taco surtido','Carnita surtida recién salida del cazo, tortilla doble, cebolla y cilantro.','Por taco',32,'🌮','Consentido'],
      ['Taco de maciza','Maciza jugosa, tortilla doble, cebolla, cilantro y limón.','Por taco',35,'🌮',''],
      ['Medio kilo familiar','500 g de carnitas, tortillas, salsa, cebolla, cilantro y limones.','Por kilo',295,'🍖','Rinde 3–4'],
      ['Kilo completo','1 kg de carnitas a elegir con tortillas, salsa, verdura y limones.','Por kilo',560,'🥘','Rinde 6–8'],
      ['Paquete dominguero','1 kg de carnitas, 2 quesadillas, frijoles, tortillas y refresco de 2 L.','Paquetes',749,'👨‍👩‍👧‍👦','Más pedido'],
      ['Orden de cueritos','Cueritos suaves con salsa de la casa, cebolla, cilantro y limón.','Paquetes',95,'🍽️','']]
  }
};

const config=menus[__MENU_SLUG__]||menus['cocina-catrina'];
const [primary,accent,paper,ink]=config.theme;
document.documentElement.style.cssText=`--primary:${primary};--accent:${accent};--paper:${paper};--ink:${ink}`;
document.title=`${config.name} · Menú digital`;
let category='Todos',query='',cart=[];

const money=n=>new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(n);
const icon=(name)=>({search:'⌕',bag:'◉',close:'×',minus:'−',plus:'+',arrow:'→'}[name]);

function shell(){
  document.querySelector('#root').innerHTML=`
    <header class="topbar">
      <a class="brand" href="#inicio" aria-label="${config.name}, inicio"><span>${config.mark}</span><b>${config.name}</b></a>
      <nav aria-label="Principal"><a href="#menu">Menú</a><a href="#nosotros">Nuestra cocina</a><a href="#visitanos">Visítanos</a></nav>
      <button class="cart-button" aria-label="Ver pedido"><span>Tu pedido</span><b class="cart-count">0</b></button>
    </header>
    <main>
      <section class="hero" id="inicio">
        <div class="hero-copy"><p class="eyebrow">${config.eyebrow}</p><h1>${config.tagline}</h1><p class="hero-text">Ingredientes honestos, porciones generosas y el sabor que hace que siempre quieras volver.</p><a class="primary-cta" href="#menu">Explorar el menú ${icon('arrow')}</a></div>
        <div class="hero-art" aria-label="Ilustración gastronómica"><span class="plate">${config.items[2][4]}</span><span class="orbit orbit-one">✦</span><span class="orbit orbit-two">●</span><p>HECHO<br>CON<br>CARIÑO</p></div>
      </section>
      <div class="ticker"><span>Ingredientes frescos</span><i>✦</i><span>Preparado al momento</span><i>✦</i><span>Sabor de casa</span><i>✦</i><span>Pide para recoger</span></div>
      <section class="menu-section" id="menu">
        <div class="section-heading"><div><p class="eyebrow">EL MENÚ</p><h2>Elige tu antojo.</h2></div><label class="search">${icon('search')}<span class="sr-only">Buscar platillo</span><input type="search" placeholder="Buscar en el menú…" /></label></div>
        <div class="categories" role="group" aria-label="Categorías">${config.categories.map((c,i)=>`<button class="${i===0?'active':''}" data-category="${c}">${c}</button>`).join('')}</div>
        <div class="menu-grid" aria-live="polite"></div>
      </section>
      <section class="story" id="nosotros"><div class="story-art"><span>${config.items[0][4]}</span><small>DESDE<br>LA COCINA</small></div><div><p class="eyebrow">NUESTRA MANERA</p><h2>Sin atajos.<br>Con mucho sabor.</h2><p>Seleccionamos cada ingrediente y preparamos cada orden al momento. La receta puede ser sencilla; el cuidado nunca lo es.</p><a href="#visitanos">Conoce la casa ${icon('arrow')}</a></div></section>
      <section class="visit" id="visitanos"><div><p class="eyebrow">VEN A COMER</p><h2>La mesa está puesta.</h2></div><div><b>HORARIO</b><p>${config.hours}</p></div><div><b>ENCUÉNTRANOS</b><p>${config.address}</p></div></section>
    </main>
    <footer><a class="brand" href="#inicio"><span>${config.mark}</span><b>${config.name}</b></a><p>Menú demostrativo · Precios en MXN</p><small>Concepto ficticio creado para portafolio.</small></footer>
    <div class="scrim" hidden></div><aside class="drawer" aria-hidden="true" aria-label="Tu pedido"><div class="drawer-head"><div><p class="eyebrow">PEDIDO DEMO</p><h2>Tu selección</h2></div><button class="close" aria-label="Cerrar pedido">${icon('close')}</button></div><div class="cart-items"></div><div class="cart-footer"><div><span>Total</span><b class="total">$0</b></div><button class="checkout">Continuar pedido ${icon('arrow')}</button><small>Simulación: no se realizará ningún cobro.</small></div></aside>
    <div class="toast" role="status" aria-live="polite"></div>`;
  bind();renderMenu();renderCart();
}

function renderMenu(){
  const list=config.items.filter(x=>(category==='Todos'||x[2]===category)&&(`${x[0]} ${x[1]}`.toLowerCase().includes(query.toLowerCase())));
  document.querySelector('.menu-grid').innerHTML=list.length?list.map(x=>`<article class="dish"><div class="dish-visual"><span>${x[4]}</span>${x[5]?`<b>${x[5]}</b>`:''}</div><div class="dish-body"><div><small>${x[2]}</small><h3>${x[0]}</h3></div><p>${x[1]}</p><div class="dish-bottom"><strong>${money(x[3])}</strong><button data-add="${x[0]}" aria-label="Agregar ${x[0]} al pedido">${icon('plus')}</button></div></div></article>`).join(''):`<p class="empty">No encontramos platillos con esa búsqueda.</p>`;
  document.querySelectorAll('[data-add]').forEach(btn=>btn.onclick=()=>add(btn.dataset.add));
}
function add(name){const item=config.items.find(x=>x[0]===name),found=cart.find(x=>x.name===name);found?found.qty++:cart.push({name,price:item[3],emoji:item[4],qty:1});renderCart();showToast(`${name} se agregó a tu pedido`)}
function renderCart(){
  const count=cart.reduce((n,x)=>n+x.qty,0),total=cart.reduce((n,x)=>n+x.price*x.qty,0);
  document.querySelector('.cart-count').textContent=count;document.querySelector('.total').textContent=money(total);
  document.querySelector('.cart-items').innerHTML=cart.length?cart.map(x=>`<article class="cart-line"><span>${x.emoji}</span><div><b>${x.name}</b><small>${money(x.price)}</small></div><div class="quantity"><button data-change="${x.name}" data-delta="-1" aria-label="Quitar uno">${icon('minus')}</button><b>${x.qty}</b><button data-change="${x.name}" data-delta="1" aria-label="Agregar uno">${icon('plus')}</button></div></article>`).join(''):`<div class="cart-empty"><span>🍽️</span><h3>Tu pedido está vacío</h3><p>Agrega algo rico del menú para comenzar.</p></div>`;
  document.querySelectorAll('[data-change]').forEach(btn=>btn.onclick=()=>{const x=cart.find(i=>i.name===btn.dataset.change);x.qty+=Number(btn.dataset.delta);cart=cart.filter(i=>i.qty>0);renderCart()});
}
function openCart(open=true){document.querySelector('.drawer').classList.toggle('open',open);document.querySelector('.drawer').setAttribute('aria-hidden',String(!open));document.querySelector('.scrim').hidden=!open;document.body.classList.toggle('locked',open)}
function showToast(message){const t=document.querySelector('.toast');t.textContent=message;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),2200)}
function bind(){
  document.querySelectorAll('[data-category]').forEach(btn=>btn.onclick=()=>{category=btn.dataset.category;document.querySelectorAll('[data-category]').forEach(x=>x.classList.toggle('active',x===btn));renderMenu()});
  document.querySelector('input[type=search]').oninput=e=>{query=e.target.value;renderMenu()};
  document.querySelector('.cart-button').onclick=()=>openCart();document.querySelector('.close').onclick=()=>openCart(false);document.querySelector('.scrim').onclick=()=>openCart(false);
  document.querySelector('.checkout').onclick=()=>{if(!cart.length){showToast('Agrega un platillo antes de continuar');return}openCart(false);showToast('¡Pedido de demostración preparado!')};
}
shell();

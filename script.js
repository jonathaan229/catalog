const productos = [
    {
    nombre:'TAMASHII NATIONS - Godzilla Evolved de Kong: The New Empire (2024) S.H.MonsterArts Figura de Acción',
    descripcion:'GODZILLA Evolved From GODZILLA x KONG: El nuevo imperio [2024] se une a la línea S.H.MonsterArts Los datos 3D de la película y la supervisión del productor Yuji Sakai han asegurado que esta figura sea una reproducción completa de la apariencia de la película La amplia gama de articulación permite la recreación de escenas de la película. Las piezas de mano opcionales también permiten varias posturas dinámicas Contenido del conjunto: cuerpo principal, piezas de mano opcionales La caja del producto tendrá una etiqueta de advertencia de Bandai Namco, que es prueba de que estás comprando un producto con licencia oficial',
    precio:2724,
    imagen:'godzillash'},
    {
        nombre:'TAMASHII NATIONS - Godzilla x Kong: The New Empire - Shimo from Godzilla x Kong: The New Empire (2024), Bandai Spirits S.H.MonsterArts Figura de acción',
        descripcion:'De la película "Godzilla x Kong: The New Empire", SHIMO se une a S.H.MonsterArts! El cuerpo está hecho de un molde nuevo, y está hecho con una increíble movilidad articular que te permite recrear muchas poses de la película. Los cristales en la parte posterior de Shimo se han recreado utilizando piezas transparentes Combinando GODZILLA (2024) EVOLVED Ver. DE GODZILLA × KONG: EL NUEVO EMPIRE y SKAR KING de S.H.MonsterArts, puedes recrear escenas de lucha más dinámicas de la película. SHIMO también viene con una parte de cabeza para KONG de GODZILLA x KONG: el nuevo imperio (2024) de S.H.MonsterArts. Utilizando esta parte de la cabeza para KONG de Godzilla x Kong: el nuevo imperio (2024), puedes recrear la escena donde KONG estaba apretando los dientes Contenido del conjunto: cuerpo principal, [piezas de bonificación] parte de cabeza opcional KONG La caja del producto tendrá una etiqueta de advertencia de Bandai Namco, que es prueba de que estás comprando un producto oficial de Bandai Spirits',
        precio:5299,
        imagen:'shimosh'},
        {
        nombre:'TAMASHII NATIONS - Godzilla x Kong: The New Empire - Suko & Mothra de Godzilla x Kong: The New Empire (2024), Bandai Spirits S.H.MonsterArts Figura de acción',
        descripcion:'De la película "GODZILLA x KONG: The New Empire", S.H.MonsterArts está lanzando SUKO & MOTHRA [2024] DE GODZILLA x KONG: THE NEW EMPIRE! ! Hecho de un molde completamente nuevo, SUKO mide aproximadamente 2.8 pulgadas de altura. Viene con piezas intercambiables de la cabeza, así como un pedestal para que puedas mostrar tu Suko de tus escenas favoritas de la película. En cuanto a Mothra, la coloración del cuerpo ha sido bellamente recreada a partir de la película Mediante el uso del pedestal incluido, puedes mostrar tu Mothra para que parezca el vuelo de Mothra. Una parte de cabeza adicional para S.H.MonsterArts KONG de GODZILLA x KONG: el nuevo imperio (2024) que se vende por separado, está unido para que puedas recrear tu KONG para que parezca como si estuviera rugiendo Contenido del conjunto: cuerpo principal SUKO, 3 pares de piezas de mano intercambiables para SUKO, 3 pares de piezas de cabeza intercambiables para SUKO, soporte para SUKO, cuerpo principal MOTHRA, soporte para MOTHRA, [piezas adicionales para KONG] pieza de cabeza intercambiable para KONG La caja del producto tendrá una etiqueta de advertencia de Bandai Namco, que es prueba de que estás comprando un producto oficial de Bandai Spirits',
        precio:2299,
        imagen:'mothrash'},
        {
        nombre:'TAMASHII NATIONS - Kong from Godzilla x Kong: The New Empire (2024) S.H.MonsterArts Figura de acción',
        descripcion:'KONG, de "GODZILLA x KONG: THE NEW EMPIRE" se une a S.H.MonsterArts! Con daños de batalla realistas de peleas anteriores y coloración que acentúa su "pelaje" Contenido del conjunto: cuerpo principal, hacha, tres pares de manos opcionales, cabeza opcional La caja del producto tendrá una etiqueta de advertencia de Bandai Namco, que es prueba de que estás comprando un producto con licencia oficial',
        precio:1532,
        imagen:'kongsh'}


]
const catalogo = document.getElementById('catalogo');


function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';


    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;


    const titulo= document.createElement('h2');
    titulo.textContent = producto.descripcion;


    const precio= document.createElement('span');
    precio.className='precio'
    precio.textContent = `$${producto.precio.toFixed(2)}`;

    const boton = document.createElement('button'); 
boton.className = 'btn-comprar'; 
boton.textContent = 'Comprar'; 
card.appendChild(imagen); 
card.appendChild(titulo); 
card.appendChild(descripcion); 
card.appendChild(precio);
card.appendChild(boton); 
return card;
}
function renderizarCatalogo() { 
productos.forEach(producto => { 
const tarjeta = crearTarjetaProducto(producto); 
catalogo.appendChild(tarjeta); 
}); 
} 
window.onload = renderizarCatalogo;

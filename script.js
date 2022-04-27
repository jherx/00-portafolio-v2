import {proyectos,proyectNuevos} from'./data.js';


const contenedor = document.querySelector('.prool-seccion');
const proyectosNuevos = document.querySelector('.pronew-seccion');

const project=()=> {
	let proyecto;
	let proyectoN;
	for (proyecto in proyectos) {
		let data = proyectos[proyecto];
		let link = data['link'];
		let img = data['img'];
		let nombre = data['nombre'];
		let html = `<div class="galeria-seccion">
		<a href="${link}">
		  <img src="${img}" alt="${nombre}"/>
		   </a>
		  <P class="descripcion wrap">${nombre}</P>
		  </div>
		  `;
		contenedor.innerHTML += html;
	}
	
	for (proyectoN in proyectNuevos) {
		let dat = proyectNuevos[proyectoN];
		let link = dat['link'];
		let img = dat['img'];
		let nombre = dat['nombre'];
		let html = `<div class="galeria-seccion">
		<a href="${link}">
		  <img src="${img}" alt="${nombre}"/>
		   </a>
		  <p class="descripcion wrap">${nombre}</p>
		  </div>
		  `;
		  proyectosNuevos.innerHTML += html;
	}
	
}

project();






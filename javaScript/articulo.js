import { getParamByName } from "./url.js";
import { getPublicacion } from "./peticiones.js";

const mostrarArticulo = async () => {
  const id = getParamByName("id");
  const publicacion = await getPublicacion(id);
  const likes = document.querySelector("#likes");
  likes.textContent = publicacion.reacciones;
  const comentarios = document.querySelector("#comentarios");
  comentarios.textContent = publicacion.comentarios.length;
  const imagenPublicacion = document.querySelector("#imagenPublicacion");
  imagenPublicacion.src = publicacion.imagen;
  const imagenUsuario = document.querySelector("#imagenUsuario");
  imagenUsuario.src = publicacion.imgUSer;
  const nombreUser = document.querySelector("#nombreUser");
  nombreUser.textContent = publicacion.user;
  const fechaPublicacion = document.querySelector("#fechaPublicacion");
  fechaPublicacion.textContent = publicacion.datePublish;
  const titleLink = document.querySelector("#title-link");
  titleLink.textContent = publicacion.titulo;
  if(publicacion.etiquetas){
    const cardEtiquetas = document.querySelector("#cardEtiquetas");
    cardEtiquetas.classList.add("card-body");
    publicacion.etiquetas.map((item) => {
      const etiqueta = document.createElement("a");
      etiqueta.classList.add("card-link");
      etiqueta.classList.add("text-muted");
      etiqueta.classList.add("text-decoration-none");
      etiqueta.setAttribute("id", "hashtag-link");
      etiqueta.textContent="#"+item
      cardEtiquetas.appendChild(etiqueta)
      
    });
  }
  const tituloPublicacion=document.querySelector("#cardTexto")
  const parrafoTexto=document.createElement("p")
  parrafoTexto.textContent=publicacion.texto
  tituloPublicacion.appendChild(parrafoTexto)
};

mostrarArticulo();

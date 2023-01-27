import {  getPublicaciones } from "./javaScript/peticiones.js";

const dashboard = document.querySelector("#dashboard");

const card = (publicacion) => {
    console.log(publicacion.id)
  //contenedor principal
  const cardPublicacion = document.createElement("div");
  cardPublicacion.classList.add("container-fluid");
  cardPublicacion.classList.add("mt-2");
  
  //contenedor secundario
  const contenedor = document.createElement("div");
  contenedor.classList.add("card");
    //imagen pricipal publicacion
  const imagenPublicacion = document.createElement("img");
  imagenPublicacion.classList.add("rounded-top");
  imagenPublicacion.src = publicacion.imagen;
  contenedor.appendChild(imagenPublicacion);
   //contenedor de informacion  
  const info = document.createElement("div");
  info.classList.add("card-body");
    
  const div1 = document.createElement("div");
  div1.classList.add("container");

  const div11 = document.createElement("div");
  div11.classList.add("container");
  const imgDiv11 = document.createElement("img");
  imgDiv11.classList.add("rounded-circle");
  imgDiv11.classList.add("float-start");
  imgDiv11.classList.add("me-4");
  imgDiv11.setAttribute("style", "width: 3rem");
  imgDiv11.src=publicacion.imgUSer
  div11.appendChild(imgDiv11);
  div1.appendChild(div11)
 

  const div12 = document.createElement("div");
  div12.classList.add("container");
  const nombreUSer=document.createElement("h5")
  nombreUSer.textContent=publicacion.user
  div12.appendChild(nombreUSer)
  const fechaPublicacion=document.createElement("small")
  fechaPublicacion.textContent=publicacion.datePublish
  div12.appendChild(fechaPublicacion)
  console.log(div12)
  div1.appendChild(div12);
  info.appendChild(div1) 
  

  const tituloInfo=document.createElement("h1")
  tituloInfo.classList.add("card-title")
  tituloInfo.classList.add("mt-2")
  const linkTitulo=document.createElement("a")
  linkTitulo.setAttribute("id", "title-link");
  linkTitulo.textContent=publicacion.titulo
  linkTitulo.href=`/articulo.html?${publicacion.id}`
  tituloInfo.appendChild(linkTitulo)
  info.appendChild(tituloInfo)

  //map para las etiquetas
  if(publicacion.etiquetas){
    const divEtiquetas= document.createElement("div")
    divEtiquetas.classList.add("card-body")
    publicacion.etiquetas.map((item)=>{
        const linkEtiqueta= document.createElement("a")
        linkEtiqueta.classList.add("card-link")
        linkEtiqueta.classList.add("text-muted")
        linkEtiqueta.classList.add("text-decoration-none")
        linkEtiqueta.setAttribute("id", "hashtag-link");
        linkEtiqueta.textContent="#"+item
        divEtiquetas.appendChild(linkEtiqueta)
    })
    info.appendChild(divEtiquetas) 
  }

  //ultimo div ira a info
  const divRow=document.createElement("div")
  divRow.classList.add("row")
  const divReacciones=document.createElement("div")
  divReacciones.classList.add("col")
  divReacciones.classList.add("d-flex")
  const linkLikes=document.createElement("a")
  linkLikes.setAttribute("id", "interaction-link");
  linkLikes.classList.add("text-muted")
  linkLikes.classList.add("text-decoration-none")
  linkLikes.classList.add("ms-2")
  linkLikes.classList.add("d-flex")
  const iconoCorazon=document.createElement("i")
  iconoCorazon.textContent=publicacion.reacciones+" Reactions"
  linkLikes.appendChild(iconoCorazon)
  const linkComentarios=document.createElement("a")
  linkComentarios.setAttribute("id", "interaction-link");
  linkComentarios.classList.add("text-muted")
  linkComentarios.classList.add("text-decoration-none")
  linkComentarios.classList.add("ms-2")
  linkComentarios.classList.add("d-flex")
  const iconoComentario=document.createElement("i")
  iconoComentario.textContent=publicacion.comentarios.length+"  Coments"

  linkComentarios.appendChild(iconoComentario)
  divReacciones.appendChild(linkLikes)
  divReacciones.appendChild(linkComentarios)
  divRow.appendChild(divReacciones)

  const divlectura= document.createElement("div")
  divlectura.classList.add("col")
  divlectura.classList.add("d-flex")
  divlectura.classList.add("justify-content-end")
  const divTiempo=document.createElement("div")
  divTiempo.classList.add("row")
  divTiempo.classList.add("w-50")
  const textoTiempo=document.createElement("small")
  textoTiempo.classList.add("col")
  textoTiempo.classList.add("text-muted")
  textoTiempo.textContent=publicacion.tiempoLectura+" min read"
  divTiempo.appendChild(textoTiempo)

  
  divlectura.appendChild(divTiempo)
  divRow.appendChild(divlectura)
  info.appendChild(divRow)



  contenedor.appendChild(info);
  //falta agregar todo  a info
  cardPublicacion.appendChild(contenedor);
  dashboard.appendChild(cardPublicacion);
};



const mostrarPublicaciones=async ()=>{
    const publicaciones=await getPublicaciones()
    publicaciones.map((item)=>{
        card(item)
    })
    console.log(publicaciones )
}

await mostrarPublicaciones()
/*

  
  



  
*/

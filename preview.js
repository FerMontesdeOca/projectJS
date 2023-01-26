import { nuevaPost } from "./peticiones.js";

const dashboard= document.querySelector("#dashboard")
const buttonPublicar= document.querySelector("#publicar")
const body= document.querySelector("#card-body")

const card=(publicacion)=>{
    if(publicacion.foto){
        const imagen= document.createElement("img")
        imagen.src=publicacion.imagen
        
        imagen.classList.add("imagen--preview")
        dashboard.appendChild(imagen)
        const body= document.createElement("div")
        
        const negritas=document.createElement("strong")
        
        const titulo= document.createElement("h1")
        titulo.textContent=publicacion.titulo
        negritas.appendChild(titulo)
        console.log(negritas)
        body.appendChild(titulo)
        if(publicacion.etiquetas){
            const divEtiquetas=document.createElement("div")
            divEtiquetas.classList.add("d-flex")
            publicacion.etiquetas.map((item)=>{
                const etiqueta= document.createElement("p")
                etiqueta.classList.add("card-text")
                const small=document.createElement("small")
                small.textContent="#"+item
                small.classList.add("text-muted")
                small.classList.add("etiquetas")
                etiqueta.appendChild(small)
                etiqueta.classList.add("btn")
                etiqueta.classList.add("btn-outline-light")
                divEtiquetas.appendChild(etiqueta)

            })
            body.appendChild(divEtiquetas)
        }
        const texto= document.createElement("p")
        texto.classList.add("card-text")
        texto.textContent=publicacion.texto
        body.appendChild(texto)
        dashboard.appendChild(body)

    }else{
        
        const negritas=document.createElement("strong")
        const titulo= document.createElement("h1")
        titulo.textContent=publicacion.titulo
        negritas.appendChild(titulo)
        console.log(negritas)
        body.appendChild(titulo)
        if(publicacion.etiquetas){
            const divEtiquetas=document.createElement("div")
            divEtiquetas.classList.add("d-flex")
            publicacion.etiquetas.map((item)=>{
                const etiqueta= document.createElement("p")
                etiqueta.classList.add("card-text")
                const small=document.createElement("small")
                small.textContent="#"+item
                small.classList.add("text-muted")
                small.classList.add("etiquetas")
                etiqueta.appendChild(small)
                etiqueta.classList.add("btn")
                etiqueta.classList.add("btn-outline-light")
                divEtiquetas.appendChild(etiqueta)

            })
            body.appendChild(divEtiquetas)
        }
        const texto= document.createElement("p")
        texto.classList.add("card-text")
        texto.textContent=publicacion.texto
        body.appendChild(texto)
        dashboard.appendChild(body)
        
}

}
//const publicacion=window.location.search
const publicacion = {
    user: "benjamin franklin",
    datePublish: "",
    imagen: "https://www.datocms-assets.com/48401/1627664298-javascript.png?fit=max&w=900",
    titulo: "java script",
    clases: [],
    imgUSer: "https://www.biografiasyvidas.com/biografia/f/fotos/franklin.jpg",
    texto: "loremipsum",
    etiquetas: ["java", "html", "css"],
    reacciones: 0,
    comentarios: [],
    tiempoLectura: 0,
  };
//console.log(publicacion)
card(publicacion)
buttonPublicar.addEventListener("click",async(evento)=>{
    await nuevaPost(publicacion)
})



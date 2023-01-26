const publicacion = {
    user: "benjamin franklin",
    datePublish: "12-01-2023",
    foto: "https://media.gettyimages.com/id/1242981400/es/foto/low-angle-view-of-city-against-sky.jpg?s=612x612&w=gi&k=20&c=rA9LWFDgjq-FfY2OX6eVAVRBAnGKQKgrCnI11UDZKEc=",
    titulo: "¡Tengo que pasar el bootkamp!",
    clases: [],
    imgUSer: "",
    texto: "estamos haciendo el reto",
    etiquetas: ["javascript", "html", "css"],
    reacciones: 0,
    comentarios: [],
    tiempoLectura: 0,
  };
const dashboard= document.querySelector("#dashboard")

const card=(publicacion)=>{
    if(publicacion.foto){
        const imagen= document.createElement("img")
        imagen.src=publicacion.foto
        imagen.classList.add("card-img-top")
        dashboard.appendChild(imagen)
        const body= document.createElement("div")
        body.classList.add("card-body")
        const titulo= document.createElement("h5")
        titulo.textContent=publicacion.titulo
        body.appendChild(titulo)
        if(publicacion.etiquetas){
            publicacion.etiquetas.map((item)=>{
                const etiqueta= document.createElement("p")
                etiqueta.classList.add("card-text")
                const small=document.createElement("small")
                small.textContent=item
                small.classList.add("text-muted")
                etiqueta.appendChild(small)
                body.appendChild(etiqueta)

            })
        }
        const texto= document.createElement("p")
        texto.classList.add("card-text")
        texto.textContent=publicacion.texto
        body.appendChild(texto)
        dashboard.appendChild(body)

    }else{
        
}

}
 

card(publicacion)


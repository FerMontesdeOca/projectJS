const publicacion = {
  user: "benjamin franklin",
  datePublish: "",
  imagen: "",
  titulo: "",
  clases: [],
  imgUSer: "https://www.biografiasyvidas.com/biografia/f/fotos/franklin.jpg",
  texto: "",
  etiquetas: [],
  reacciones: 0,
  comentarios: [],
  tiempoLectura: 0,
};
const urlImage = document.querySelector("#imagen");
const titulo = document.querySelector("#titulo");
const texto = document.querySelector("#texto");
const btnPreview = document.querySelector("#preview");
function objectToParams(object){
    var pares = Object.entries(object);
    var paresConRepe = [].concat.apply([],pares.map(
        ([key, val])=>(val instanceof Array ? val.map(v=>[`${key}[]`,v]) :
            val && val.toJSON ? [[key, val.toJSON()]] :
            val instanceof Object ? Object.entries(val).map(([k,v])=>[`${key}[${k}]`,v]) :
            [[key, val]]
        )
    ));
    var up = new URLSearchParams(paresConRepe);
    return up.toString();
}
btnPreview.addEventListener("click", (evento) => {
   const parametros=objectToParams(publicacion) 
  location.href = `http://127.0.0.1:5500/preview.html?${parametros}`;
});
texto.addEventListener("change", (evento) => {
  publicacion[evento.target.id] = evento.target.value;
  console.log(publicacion);
});
titulo.addEventListener("change", (evento) => {
  publicacion[evento.target.id] = evento.target.value;
  console.log(publicacion);
});
urlImage.addEventListener("change", (evento) => {
  publicacion[evento.target.id] = evento.target.value;
  console.log(publicacion);
});

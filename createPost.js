import { nuevaPost } from "./peticiones.js";
let publicacion = {
  "user": "benjamin franklin",
  "datePublis": "26/01/2023",
  "imagen": "",
  "titulo": "",
  "clases": [],
  "imgUSer": "https://www.biografiasyvidas.com/biografia/f/fotos/franklin.jpg",
  "texto": "",
  "etiquetas": ["js", "html", "css"],
  "reacciones": 15,
  "comentarios": ["muy bonito", "esta feito"],
  "tiempoLectura": 3,
};
const urlImage = document.querySelector("#inputForm");
const titulo = document.querySelector("#titlePost");
const texto = document.querySelector("#postText");
const btnPreview = document.querySelector("#preview");
const botonNuevo = document.querySelector("#botonNuevo");

botonNuevo.addEventListener("click", async (evento) => {
  
  await nuevaPost(publicacion)
  window.location.href = "http://127.0.0.1:5500/index.html";
});

function objectToParams(object) {
  var pares = Object.entries(object);
  var paresConRepe = [].concat.apply(
    [],
    pares.map(([key, val]) =>
      val instanceof Array
        ? val.map((v) => [`${key}[]`, v])
        : val && val.toJSON
        ? [[key, val.toJSON()]]
        : val instanceof Object
        ? Object.entries(val).map(([k, v]) => [`${key}[${k}]`, v])
        : [[key, val]]
    )
  );
  var up = new URLSearchParams(paresConRepe);
  return up.toString();
}
btnPreview.addEventListener("click", (evento) => {
  const parametros = objectToParams(publicacion);
  location.href = `http://127.0.0.1:5500/preview.html?${parametros}`;
});
texto.addEventListener("change", (evento) => {
  publicacion.texto = evento.target.value;
  console.log(publicacion.texto);
});
titulo.addEventListener("change", (evento) => {
  publicacion.titulo = evento.target.value;
  console.log(publicacion);
});
urlImage.addEventListener("change", (evento) => {
  console.log(publicacion.imagen);
  publicacion.imagen = evento.target.value;
  console.log(publicacion);
});

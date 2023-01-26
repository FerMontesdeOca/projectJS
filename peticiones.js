const parseInfo = (info) => {
  const list = Object.entries(info);
  const newList = list.map((element) => {
    const infoParsed = {
      id: element[0],
      ...element[1],
    };
    return infoParsed;
  });
  return newList;
};

export const nuevaPost = async (postJson) => {
  try {
    const response = await fetch(
      "https://devto-4e872-default-rtdb.firebaseio.com/publicaciones/.json/",
      {
        method: "POST",
        header: { "Consten-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(postJson),
      }
    );
    const result = await response.json();
    alert("el post fue añadido correctamente");
  } catch (error) {
    alert("hubo un error intentalo de nuevo");
    console.log(error);
  }
};
export const getPublicaciones = async () => {
  try {
    const response = await fetch(
      "https://devto-4e872-default-rtdb.firebaseio.com/.json"
    );
    const result = await response.json();
    const data = parseInfo(result);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePublicaciones = async (id) => {
  try {
    const response = await fetch(
    `https://devto-4e872-default-rtdb.firebaseio.com/publicaciones/${id}/.json/`
    ,{method:"DELETE"});

  } catch (error) {
    console.log(error);
  }
};
const publicacion = {
  user: "prueba",
  datePublish: "12-01-2023",
  foto: "https://media.licdn.com/dms/image/C4E0BAQH_FgH2PtTNHA/company-logo_200_200/0/1528521011260?e=2147483647&v=beta&t=R5VCc2GH1U_axoFZAzg67DHCa2W5DO-GZ2jQ2m74IzA",
  tituto: "¡Tengo que pasar el bootkamp!",
  clases: [],
  imgUSer: "",
  texto: "",
  etiquetas: ["javascript", "html", "css"],
  reacciones: 0,
  comentarios: [],
  tiempoLectura: 0,
};

deletePublicaciones("-NMgG9fdCwVXC9P0O4-w")
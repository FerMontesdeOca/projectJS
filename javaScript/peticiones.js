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
      "https://devto-4e872-default-rtdb.firebaseio.com/.json",
      {
        method: "POST",
        header: { "Consten-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(postJson),
      }
    );
    const result = await response.json();
    console.log(result)
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
    `https://devto-4e872-default-rtdb.firebaseio.com/${id}/.json`
    ,{method:"DELETE"});

  } catch (error) {
    console.log(error);
  }
};

export const getPublicacion = async (id) => {
  try {
    const response = await fetch(
      `https://devto-4e872-default-rtdb.firebaseio.com/${id}/.json`
    );
    const result = await response.json();
    //const data = parseInfo(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};


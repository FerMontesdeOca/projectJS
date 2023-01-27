function showLinks() {
    document.getElementById("year-link-2").style.display = "block";
    document.getElementById("month-link-2").style.display = "block";
  }


const fetchPosts = async () => {
    try {
      const response = await fetch("https://practica-99535-default-rtdb.firebaseio.com/.json");
      allPosts = await response.json();
      displayPosts(allPosts);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Create and return a DOM element for a post
  const createPostElement = (post) => {
    // prueba dom elements
    const postContainer = document.createElement("div");
    const postTitle = document.createElement("h3");
    const postReaction = document.createElement("p");
    const postDate = document.createElement("p");
  
    // Add data to DOM elements
    postTitle.innerText = post.title;
    postReaction.innerText = `Reaction: ${post.reaction}`;
    postDate.innerText = post.date;
  
    // Append elements to post container
    postContainer.appendChild(postTitle);
    postContainer.appendChild(postReaction);
    postContainer.appendChild(postDate);
  
    return postContainer;
  };
  
  // Display posts in the webpage
  const displayPosts = (posts) => {
    const postsContainer = document.getElementById("posts-container");
    postsContainer.innerHTML = ""; // Clear previous posts
    posts.forEach((post) => {
      const postElement = createPostElement(post);
      postsContainer.appendChild(postElement);
    });
  };
  
  // Filter posts by year
  const filterPostsByYear = (year) => {
    const filteredPosts = allPosts.filter((post) => {
      return new Date(post.date).getFullYear() === year;
    });
    displayPosts(filteredPosts);
  };
  
  // Filter posts by month
  const filterPostsByMonth = (month) => {
    const filteredPosts = allPosts.filter((post) => {
      return new Date(post.date).getMonth() === month;
    });
    displayPosts(filteredPosts);
  };
  
  // Add event listeners to year and month links
  const yearLink = document.getElementById("year-link-2");
  yearLink.addEventListener("click", () => {
    const selectedYear = document.getElementById("select-year").value;
    filterPostsByYear(selectedYear);
  });
  
  const monthLink = document.getElementById("month-link-2");
  monthLink.addEventListener("click", () => {
    const selectedMonth = document.getElementById("select-month").value;
    filterPostsByMonth(selectedMonth);
  });
  
  fetchPosts();
  
  

 

  const nuevaPost = async (postJson) => {
    try {
      const response = await fetch(
        "https://practica-99535-default-rtdb.firebaseio.com/.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json;charset=UTF-8" },
          body: JSON.stringify(postJson),
        }
      );
      const data = await response.json();
      return postJson.date;
    } catch (error) {
      console.error(error);
    }
  };

  const postJson = {
    title: "My new post",
    reaction: Math.floor(Math.random() * 100) + 1,
    date: new Date()
  };

  nuevaPost(postJson).then((date) => {
    const formattedDate = moment(date).format("MMM DD, YYYY hh:mm A");
    const daysAgo = moment(date).diff(new Date(), "days");
    const dateElement = document.createTextNode(`${formattedDate} (${daysAgo} days ago)`);
    const targetElement = document.getElementById("date");
    targetElement.appendChild(dateElement);
  });



/**
 *           currentPage++;
      // Oculta el mensaje de carga
      document.getElementById('loading').style.display = 'none';
      // Cambia la variable isLoading a false
      isLoading = false;
      // Muestra los nuevos datos en la página
      displayData();
    }

    // Función para mostrar los datos en la página
    function displayData() {
      // Recorre cada elemento del array de datos
      for (let item of data) {
        // Crea un nuevo elemento div para cada elemento del array
        const div = document.createElement('div');
        div.classList.add("item");
        // Agrega la información del elemento al div
        div.innerHTML = `<h2>${item.title}</h2><p>${item.description}</p>`;
        // Agrega el div al contenedor de la página
        document.getElementById('content').appendChild(div);
      }
    }

    // Función para detectar cuando el usuario llega al final de la página
    function handleScroll() {
      // Obtiene la posición del scroll actual
      const scrollPosition = window.pageYOffset;
      // Obtiene la altura de la página
      const windowHeight =window.innerHeight;
// Obtiene la altura total del documento
const documentHeight = document.body.offsetHeight;
// Comprueba si el usuario ha llegado al final de la página y si no se está cargando actualmente más datos
if (scrollPosition + windowHeight >= documentHeight && !isLoading) {
// Llama a la función para obtener más datos
fetchData();
}
}

 */
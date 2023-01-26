function showLinks() {
    document.getElementById("year-link-2").style.display = "block";
    document.getElementById("month-link-2").style.display = "block";
  }

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




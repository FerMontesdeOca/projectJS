import { getLastPost } from "./apiFront.js";

getLastPost()
  .then((dataLastPost) => {
    
    const { lastPost } = dataLastPost;
    const mainPicture = document.querySelector("#mainPicture");
    const titlePost = document.querySelector('#title-link');
    if (lastPost) {
      //console.log('image:..',lastPost[0].urlImage);
      mainPicture.src = lastPost[0].urlImage;
      titlePost.textContent= lastPost[0].titlePost;
    } 
  })
  .catch((err) => {
    console.log(err);
  });

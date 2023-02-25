console.log('Cargando apiFront:..');

const urlImage = document.querySelector('#urlImage');
const titlePost = document.querySelector('#titlePost');
const postText = document.querySelector('#postText');
const publishPost = document.querySelector('#publishPost');



if(publishPost){
  publishPost.addEventListener('click',()=>{
    const dataPost={
      urlImage: urlImage.value,
      titlePost: titlePost.value,
      textPost: postText.value.trim()
    } 
    //getSaludo();
    publishDataPost(dataPost);
    console.log('Enviaremos datos:..',dataPost);
    window.location.href='http://127.0.0.1:5500/projectJS/index.html';
  })
}



const getSaludo = async ()=>{
  try {
    const response = await fetch('http://localhost:4000');
    const result = await response.json();
    console.log('result:..',result);
  } catch (error) {
    console.log(error);
  }
}

const publishDataPost = async(data)=>{
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  try {
    const response = await fetch('http://localhost:4000/createPost',options);
    const result = await response.json();
    console.log('Result createPost:..',result);
  } catch (error) {
    console.log(error)
  }
}

export const getLastPost = async ()=>{
  try {
    const response = await fetch('http://localhost:4000/getLastPost');
    const result = await response.json();
    console.log('Result getLastPost:..',result);
    return result
  } catch (error) {
    console.log(error);
    return error
  }
}

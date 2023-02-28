import Post from "../models/post.model.js";


export const createPost = async (req,res)=>{
  const dataPost = req.body;
  try {
    const newPost = new Post(dataPost);
    await newPost.save();

    const objRes= {
      msg: 'Creando un post:..',
      dataPost,
      newPost
    }
    //console.log(objRes);
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
}

export const getLastPost = async (req,res)=>{
  try {
    
    const lastPost = await Post.find().limit(4).sort({$natural:-1});

    const objRes= {
      msg: 'Retrieve Last Post:..',
      lastPost
    }
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
}

export const getPost = async (req,res)=>{
  const {id} = req.params;
  try {
    const dataPost = await Post.findOne({_id:id});

    //if (dataPost.titlePost) showDataPost(dataPost);

    const objRes= {
      msg: 'Retrieve Post By ID:..',
      dataPost,
      id
    }
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
}
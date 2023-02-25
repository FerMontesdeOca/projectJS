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
    return res.json(objRes);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
}

export const getLastPost = async (req,res)=>{
  try {
    
    const lastPost = await Post.find().limit(1).sort({$natural:-1});

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
import axios from "axios";

const instance = axios.create({
  baseURL: "https://bloggy-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  }
});


export const postsAPI = {
  getAllPosts() {
    return instance.get("posts").then((response) => {
      return response.data;
    });
  },
  getAllComments(){
    return instance.get("comments").then((response) => {
      return response.data;
    });
  },
  deletePost(id: Number){
    return instance.delete(`posts/${id}`)
  },
  createPost(title: String,body: String,id: Number){
    return instance.post("posts", {title,body,id})
  },
  updatePost(id: Number, body: String, title: String){
    return instance.put(`posts/${id}`, {body,title})
  },
  addComment(postId: Number,body: String ,id: Number){
    return instance.post("comments",{postId,body,id})
  }
};





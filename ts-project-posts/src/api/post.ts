import axios from 'axios';

export type PostProps = {
    id: number,
    title: string,
    body: string
};

// a function which returns all of post lists.
export const getPosts = async () => {
    const response = await axios.get<PostProps[]>('http://localhost:4000/posts');
    return response.data; 
  };
  
// a function which returns a post list using id.
export const getPostById = async (id: number) => {
  const response  = await axios.get<PostProps>(`http://localhost:4000/posts/${id}`);
  return response.data;
};
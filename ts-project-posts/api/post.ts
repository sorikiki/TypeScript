const delay = (n: number) => new Promise((resolve) => setTimeout(resolve, n));

export type postProps = {
    id: number,
    title: string,
    body: string
};

const posts : postProps[] = [
    {
      id: 1,
      title: '리덕스 미들웨어를 배워봅시다',
      body: '리덕스 미들웨어를 직접 만들어보면 이해하기 쉽죠.'
    },
    {
      id: 2,
      title: 'redux-thunk를 사용해봅시다',
      body: 'redux-thunk를 사용해서 비동기 작업을 처리해봅시다!'
    },
    {
      id: 3,
      title: 'redux-saga도 사용해봅시다',
      body:
        '나중엔 redux-saga를 사용해서 비동기 작업을 처리하는 방법도 배워볼 거예요.'
    }
  ];
  
// a function which returns all of post lists.
export const getPosts = async () => {
    await delay(500); 
    return posts; 
  };
  
// a function which returns a post list using id.
  export const getPostById = async (id: number) => {
    await delay(500); 
    return posts.find(post => post.id === id); 
  };
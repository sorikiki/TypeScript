import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const PostList = loadable(() => import('./components/PostListContainer'), { fallback: <div>posts loading...</div>});
const Post = loadable(() => import('./components/PostContainer'), { fallback: <div>post loading...</div>});

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={PostList} />
        <Route path='/:id' component={Post} />
      </Router>
    </div>
  );
}

export default App;

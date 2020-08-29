import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PostListContainer from './components/PostListContainer';
import PostContainer from './components/PostContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={PostListContainer} />
        <Route path='/:id' component={PostContainer} />
      </Router>
    </div>
  );
}

export default App;

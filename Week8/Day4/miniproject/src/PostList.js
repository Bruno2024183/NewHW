import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      errorMsg: ''
    };
  }

  // Llamada a la API usando componentDidMount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        this.setState({ errorMsg: 'Error fetching posts' });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;

    return (
      <div>
        <h1>List of posts:</h1>
        {posts.length ? (
          posts.map(post => (
            <div key={post.id}>
              <p><strong>ID:</strong> {post.id}</p>
              <p><strong>Title:</strong> {post.title}</p>
              <p><strong>Body:</strong> {post.body}</p>
            </div>
          ))
        ) : (
          <p>{errorMsg}</p>
        )}
      </div>
    );
  }
}

export default PostList;
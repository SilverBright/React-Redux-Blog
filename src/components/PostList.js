import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';

// Container component with state

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        Post List
      </div>
    );
  }
};

// state = posts
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts})(PostList);
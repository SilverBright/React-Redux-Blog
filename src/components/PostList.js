import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index.js';
import UserHeader from './UserHeader.js';

// Container component with state

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div className="ui relaxed devided list">
        {this.renderList()}
      </div>
    );
  }
};

// state = posts
const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts})(PostList);
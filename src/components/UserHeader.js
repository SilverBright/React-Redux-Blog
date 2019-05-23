import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/index.js';

// Container Component with state

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

      if (!user) {
        return null;
    }

      return <div className="header">{user.name}</div>;
    }
  }

  // ownProps can reference props from within the component itself (we're grabbing the userId from componentDidMount)
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
import React from 'react';
import { connect } from 'react-redux';

// Container Component with state

class UserHeader extends React.Component {
  render() {
    const { user } = this.props;

      if (!user) {
        return null;
    }

      return <div className="header">{user.name}</div>;
    }
  }

  // ownProps can reference props from within the component itself (we're using ownProps to grab the userId from componentDidMount)
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeader);
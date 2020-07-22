import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId){
      userId = 2;
    }    
    this.props.getProfile(userId);
  }

  render (){
    return (
     <Profile {...this.props}/>
    );
  }  
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}


export default connect(mapStateToProps,{
  getProfile
})(withRouter(ProfileContainer));
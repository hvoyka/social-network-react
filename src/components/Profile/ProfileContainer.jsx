import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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

const mapStateToPropsForRedirect = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
const AuthRedirectFunction = connect(mapStateToPropsForRedirect)(withAuthRedirect(ProfileContainer));

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export default connect(mapStateToProps,{getProfile})(withRouter(AuthRedirectFunction));
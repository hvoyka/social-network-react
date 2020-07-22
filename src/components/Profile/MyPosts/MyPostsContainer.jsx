import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import { addPostActionCreator, TypePostTextActionCreator } from '../../../redux/profile-reducer'

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
const mapDispatchToProps = (dispatch) => {
   return {
    addPost: ()=>{
      console.log('myposts dispatch')
      dispatch(addPostActionCreator());
    },
    typePostText:(text)=>{      
      dispatch(TypePostTextActionCreator(text));
    }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
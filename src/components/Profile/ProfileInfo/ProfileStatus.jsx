import React from 'react';
import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {    
    this.setState({
      editMode: true
    });
    
  }
  deactivateEditMode = () => {    
    this.setState({
      editMode: false
    });
    if(this.state.status != this.props.status) {
      this.props.updateUserStatus(this.state.status);
    }
    
  }
  onStatusChange = (e) => {
    this.setState({status: e.currentTarget.value});    
  }


  render() {
    return (
      <div className={css.status}>
        {!this.state.editMode &&
          <div>
            <span className={css.staticStatus} onDoubleClick={this.activateEditMode}>{this.props.status || "--------"}</span>
          </div>
        }
        {this.state.editMode &&
          <div >
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }

      </div>);
  }

}
export default ProfileStatus;
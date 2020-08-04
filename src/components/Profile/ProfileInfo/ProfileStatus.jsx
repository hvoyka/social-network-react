import React from 'react';
import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status
  }

  changeEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
    if (!this.state.editMode) {
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
            <span onDoubleClick={this.changeEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div >
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.changeEditMode} value={this.state.status} />
          </div>
        }

      </div>);
  }

}
export default ProfileStatus;
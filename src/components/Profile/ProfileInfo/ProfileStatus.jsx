import React from 'react';
import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  changeEditMode = () => {
    this.setState({
      editMode: !this.state.editMode
    });
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
            <input autoFocus={true} onBlur={this.changeEditMode} value={this.props.status} />
          </div>
        }

      </div>);
  }

}
export default ProfileStatus;
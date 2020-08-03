import React from 'react';
import css from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  } 

  render() {
    return (
      <div className={css.status}>
        {!this.state.editMode &&
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input value={this.props.status} />
          </div>
        }

      </div>);
  }

}
export default ProfileStatus;
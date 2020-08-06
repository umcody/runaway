import React from "react";

class Volunteer extends React.Component {
  renderVolunteer() {
    const volunteer = this.props.volunteer;
    if (volunteer.edit) {
      return (
        <div style={{ display: "inline-block", marginBottom: "10px" }}>
          <input
            type="text"
            name="email"
            value={volunteer.newEmail}
            onChange={(e) => this.props.onEmailChange(e, volunteer)}
          ></input>
          <button
            type="submit"
            onClick={() => this.props.onUpdate(volunteer)}
            style={{ position: "absolute", right: "293px" }}
          >
            Done
          </button>
          <button
            type="button"
            onClick={() => this.props.onEdit(volunteer)}
            style={{ position: "absolute", right: "220px" }}
          >
            Cancel
          </button>
        </div>
      );
    } else {
      return (
        <div style={{ display: "inline-block" }}>
          <p
            style={{
              display: "inline-block",
              marginTop: "0px",
            }}
          >
            {volunteer.email}
          </p>
          <button
            type="button"
            onClick={() => this.props.onEdit(volunteer)}
            style={{ position: "absolute", right: "220px" }}
          >
            Edit
          </button>
        </div>
      );
    }
  }

  render() {
    const volunteer = this.props.volunteer;
    return (
      <div>
        {this.renderVolunteer()}
        <button
          type="button"
          style={{ position: "absolute", right: "150px" }}
          onClick={() => this.props.onDelete(volunteer._id)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Volunteer;

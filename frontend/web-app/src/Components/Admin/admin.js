import React from "react";
import axios from "axios";

class Admin extends React.Component {
  state = {
    search: "",
    volunteers: [],
  };

  handleChange(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `http://localhost:7000/api/volunteer?search=${encodeURIComponent(
          this.state.search
        )}`
      )
      .then((response) => {
        this.setState({ volunteers: response.data });
        console.log(this.state.volunteers);
      });
  }

  // Delete volunteer from database
  handleClick(id) {
    axios
      .delete(`http://localhost:7000/api/volunteer/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("deleted");
          const volunteers = this.state.volunteers.filter((v) => v._id !== id);
          this.setState({ volunteers });
        }
      });
    console.log(id);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input
            type="search"
            name="search"
            value={this.state.search}
            onChange={(e) => this.handleChange(e)}
            placeholder="Volunteer Email"
          />
          <input type="submit" value="Search" />
        </form>
        <br></br>
        {this.state.volunteers.map((volunteer) => (
          <div key={volunteer._id}>
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
              style={{ position: "absolute", right: "100px" }}
              onClick={() => this.handleClick(volunteer._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Admin;

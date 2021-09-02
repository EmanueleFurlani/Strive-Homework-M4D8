import { Component } from "react";
import { Button } from "react-bootstrap";

class DisplayComments extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.selectedMovie,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZmM3YzJkNTI2MjAwMTViNmRjYWMiLCJpYXQiOjE2MjkyODk1OTYsImV4cCI6MTYzMDQ5OTE5Nn0.iDlMUTTc0xtrNaoAmVgV2jnkXWgsEQjde8S63n28N4U",
          },
        }
      );
      const data = await response.json();
      this.setState({
        comments: data,
      });
    } catch {}
  }

  render() {
    return (
      <>
        <h5>Comments:</h5>
        <ul>
          {this.state.comments.map((c) => (
            <li>
              {c.comment}
              <i>
                (Rate: {c.rate} / Date: {c.createdAt})
              </i>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default DisplayComments;

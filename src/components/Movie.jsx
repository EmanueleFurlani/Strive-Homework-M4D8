// import React from "react";
// import { Component } from "react";
// import { Modal, Button } from "react-bootstrap";
// import AddComment from "./AddComment";
// import DisplayComments from "./DisplayComments";
// // import CommentsDropdown from './CommentsDropdown'


// class Movie extends Component {
//   state = {
//     show: false,
//     // selectedMovie:{}
//   };

//   handleModal() {
//     this.setState({ show: !this.state.show });
//   }

//   render() {
//     return (
//       <div className="col-md-2 col-lg-2 movie-container mx-0 px-1">
//         {this.props.movie.Title && (
//           <>
//             <a onClick={() => this.setState({ show: true })}>
//               <img
//                 src={this.props.movie.Poster}
//                 className="img-fluid carousel-img"
//                 alt="Movie Here"
//               />
//             </a>
//             <Modal show={this.state.show} onHide={() => this.handleModal()}>
//               <Modal.Header closeButton>
//                 {this.props.movie.Title} (<i>{this.props.movie.Year}</i>)
//               </Modal.Header>
//               <Modal.Body>
//                 <DisplayComments selectedMovie={this.props.movie.imdbID} />
//                 <AddComment selectedMovie={this.props.movie} />
//               </Modal.Body>
//             </Modal>
//           </>
//         )}
//       </div>
//     );
//   }

// }

// export default Movie;

import React from "react";
import { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddComment from "./AddComment";
import DisplayComments from "./DisplayComments";
// import CommentsDropdown from './CommentsDropdown'


class Movie extends Component {
  state = {
    show: false,
    // selectedMovie:{}
  };

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className="col-md-2 col-lg-2 movie-container mx-0 px-1">
        {this.props.movie.Title && (
          <>
            <Link to={"/details/" + this.props.movie.imdbID}>
              <img
                src={this.props.movie.Poster}
                className="img-fluid carousel-img"
                alt="Movie Here"
              />
              </Link>
           
            <Modal show={this.state.show} onHide={() => this.handleModal()}>
              <Modal.Header closeButton>
                {this.props.movie.Title} (<i>{this.props.movie.Year}</i>)
              </Modal.Header>
              <Modal.Body>
                <DisplayComments selectedMovie={this.props.movie.imdbID} />
                <AddComment selectedMovie={this.props.movie} />
              </Modal.Body>
            </Modal>
          </>
        )}
      </div>
    );
  }

}

export default Movie;
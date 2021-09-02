
import { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NetflixLogo from "../assets/netflix_logo.png";
import Avatar from "../assets/cat.jpg";
import "../style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";

class CustomNavbar extends Component {
  state = {
    query: "",
  };
  
  handleSearch = () => {
 
  };

  fetchMovie = async ()=>{
    const response = await fetch('http://www.omdbapi.com/?apikey=3552ae54&s=harry%20potter')
    if(response.ok){
      const data = await response.json()
      console.log(data)
      this.setState({
        movies: data.Search
        
      })
      console.log('Harry', data)
    }
   
    

  }
  componentDidMount(){
    this.fetchMovie()
  }
  


  handleSearch = () => {};

  render() {
    return (
      <Navbar id="navbar" collapseOnSelect expand="lg">
        {/* <Container > */}
        <Navbar.Brand>
          <img src={NetflixLogo} id="logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Tv Shows</Nav.Link>
            <Nav.Link>Movies</Nav.Link>
            <Nav.Link>Recently Added</Nav.Link>
            <Nav.Link>My list</Nav.Link>
          </Nav>
          <Nav id="interaction">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
              <AiOutlineSearch />
            </Form>
            <Nav.Link className="nav-link-c">KIDS</Nav.Link>
            <IoIosNotifications />
            <NavDropdown
              title={<img src={Avatar} id="avatar" alt="avatar" />}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}

export default CustomNavbar;
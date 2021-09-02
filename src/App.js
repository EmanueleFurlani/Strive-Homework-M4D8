
// import './App.css'
// import NetflixNavbar from "./components/NetflixNavbar"
// import Header from './components/Header'
// import NetflixFooter from "./components/NetflixFooter"
// import Home from './components/Home';
// import {Container} from 'react-bootstrap'
// //import { BrowserRouter as Router, Route } from 'react-router-dom'

// function App() {
//   return (
//     <>
//       <Container fluid>
//         <NetflixNavbar />
//         <Header />
//         <Home />
//         <NetflixFooter />
//       </Container>
//     </>
//   );
// }

// export default App;


import './App.css'
import NetflixNavbar from "./components/NetflixNavbar"
import Header from './components/Header'
import NetflixFooter from "./components/NetflixFooter"
import Home from './components/Home';
import {Container} from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ShowDetails from './components/ShowDetails';

function App() {
  return (
    <>
      <Container fluid>
        <Router>
        <NetflixNavbar />
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/details/:imdbID' exact render={(routerProps) => <ShowDetails {...routerProps} title='Hi' /> } />
        <NetflixFooter />
        </Router>
      </Container>
</>
  );
}

export default App;
import React, { Component }from 'react'
import { Image, Container, Grid, Segment } from 'semantic-ui-react'
import Background from './beachme2.png';

class Header extends Component {
  render() {
    return (
      <div>
      <Container style= {{width: "100%", height: "100vh", backgroundImage: `url(${Background})`, backgroundPosition: 'top', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',}} >
        <h1>hey</h1>
      </Container>
      <h1>hey</h1>
      </div>
    );
  }
}

export default Header;

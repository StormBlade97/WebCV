import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Hero from './Hero/Hero.jsx';
import About from './About/About';
import * as colors from 'material-ui/colors'

const Container = styled.div`
  padding: 56px;
  padding-top: 110px;
  background-color: ${({ backgroundColor }) => backgroundColor }
`

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Container backgroundColor={colors.grey[200]}>
          <About />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Hero from './Hero/Hero.jsx';
import About from './About/About';
import MySkills from './MySkills/MySkills';
import ExperienceNProject from './Experience-And-Project/ExperienceNProject';
import * as colors from 'material-ui/colors';

const Container = styled.div`
  padding: 56px;
  padding-top: 110px;
  padding-bottom: 110px;
  background-color: ${({ backgroundColor }) => backgroundColor };
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding-left: 0px;
    padding-right: 0px;
  }
`
class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Container backgroundColor={colors.grey[200]}>
          <About />
        </Container>
        <Container backgroundColor={colors.grey[200]}>
          <MySkills />
        </Container>
        <Container backgroundColor={colors.grey[900]}>
          <ExperienceNProject />
        </Container>
      </div>
    );
  }
}

export default App;

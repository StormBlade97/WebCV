import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Hero from './Hero/Hero.jsx';
import About from './About/About';
import MySkills from './MySkills/MySkills';
import ExperienceNProject from './Experience-And-Project/ExperienceNProject';
import Education from './Education/Education';
import * as colors from 'material-ui/colors';
import BacktoSchool from './Education/static/backtoschool.jpg';
import ParallaxContainer, { ParallaxGroup } from './components/ParallaxContainer';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Container = styled.div`
    padding: 56px;
    padding-top: 110px;
    padding-bottom: 110px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: flex;
    justify-content: center;
    z-index: 1;
    box-sizing: border-box;

    @media only screen and (max-width: 768px) {
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 48px;
        padding-bottom: 48px;
    }
`;
const Background = styled.div`
    width: 100%;
    height: 60vh;
    background-image: url(${props => props.imgUrl});
    background-repeat: no-repeat;
    background-position: left 90%;
    background-size: cover;
    filter: blur(1px);
    transform: translateY(-10%) scale(1.3);

    @media only screen and (max-width: 768px) {
      background-position: left bottom;
      height: 80vh;         
    }
  }
`;
const Parallax = styled(ParallaxGroup)`
    height: 30vh !important;
    @media only screen and (max-width: 768px) {
        height: 480px !important;
    }
`;
class App extends Component {
    render() {
        return (
            <ParallaxContainer>
                <Hero />

                <Container backgroundColor={colors.grey[50]}>
                    <About />
                </Container>

                <Container backgroundColor={colors.grey[50]}>
                    <MySkills />
                </Container>

                <Parallax backLayer={<Background imgUrl={BacktoSchool} />}>
                    <Container style={{ height: '100%' }} backgroundColor={'rgba(0,0,0, .6)'}>
                        <Education />
                    </Container>
                </Parallax>

                <Container backgroundColor={colors.grey[900]}>
                    <ExperienceNProject />
                </Container>

                <Container backgroundColor={colors.orange[500]}>
                    <Contact />
                </Container>

                <Footer />
            </ParallaxContainer>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Hero from './Hero/Hero.jsx';
import About from './About/About';
import MySkills from './MySkills/MySkills';
import ExperienceNProject from './Experience-And-Project/ExperienceNProject';
import * as colors from 'material-ui/colors';
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

class App extends Component {
    render() {
        return (
            <div>
                <Hero />

                <Container backgroundColor={colors.grey[50]}>
                    <About />
                </Container>

                <Container backgroundColor={colors.grey[50]}>
                    <MySkills />
                </Container>
                <Container backgroundColor={colors.grey[900]}>
                    <ExperienceNProject />
                </Container>

                <Container backgroundColor={colors.orange[500]}>
                    <Contact />
                </Container>

                <Footer />
            </div>
        );
    }
}

export default App;

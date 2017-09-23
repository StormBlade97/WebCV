import React from 'react'
import Grid from 'material-ui/Grid'
import Header from '../components/Header'
import Text, { ExpandedText, StrongText } from '../components/Text'
import CarouselIndicator from './Carousel'
import styled from 'styled-components'
import * as colors from 'material-ui/colors'
const imagesReq = require.context('./static', false, /^.*\.*$/)
const images = imagesReq.keys().map(imagesReq);

const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
`

const GreyContainer = styled(Grid)`
    background-color: ${colors.grey[300]};
    width: 100%;
`
const TextBox = styled(Grid)`
    display: flex;
    flex-direction: column;
`
const CarouselGrid = styled(Grid)`
    background-color: ${colors.grey[900]};
    flex-direction: row;
    border-radius: 1em 4px 4px 1em !important;
`
const Picture = styled.div`
    width: 100%;
    height: 100%;
    background-image: url("${({imgSrc}) => imgSrc}") !important;
    background-size: cover;
    background-position: center center;
    border: none;
`
const Indicator = styled(CarouselIndicator)`
    position: absolute;
    bottom: 12px;
    width: 100%;
`

class About extends React.PureComponent {
    state = {
        reasons: [
            "I am extremely handsome and is very capable. I can do a lot of things and if you name it i can do it. I am also charming and is a great inspiration at work. Work with me and you will wonder where all of that productivity suddenly come from.",
            "My expertise is exceptional, my beauty is eternal. Cooporate with me to see my skilled hand threading your performant, yet exquisite web application come to life. Your clients will never be happier looking at these world-class grades of beauty",
            "My cooperability is unquestioned. Never before have I heard that my work is non-understandable, nor my word is vulgar. My conversations are soothing, inspiring and educational. People read at my code immediately understands the scheme of where the beauty come from. Collegues working with me immediately understand why I am the best in the field. It's simply understandable."
        ],
        index: 0
    }
    render() {
        return (
            <Container>
                <Header
                    style={{ marginBottom: '46px' }}
                    main={"A LITTLE BIT "}
                    mainColored={"ABOUT ME"}
                    subtitle={"Reasons why you should consider me in your next project"}
                />
                <GreyContainer container>
                    <TextBox style={{ padding: 24 }} item sm={12} md={4} xs={12}>
                        <StrongText style={{ marginBottom: 16 }} color={colors.grey[800]}>SUMMARY</StrongText>
                        <ExpandedText justify normal color={colors.grey[800]}>
                            I am an apt, disciplined and inquisitive front-end developer.
                            I focus mainly developing performant, maintainable, feature-rich web application using React tech stack. I am also capable of designing and implement modern, user friendly UI.
                            I have strong on-hand experience and relevant
                            formal education.
                            My short term for the end of 2017 is to transform to a fullstack developer. Currently working on ExpressJS. I am also interested in making progressive web apps, and port apps to desktop via Electron.
                        </ExpandedText>
                    </TextBox>
                    <CarouselGrid style={{ padding: 24, paddingBottom: 28, position: 'relative' }} item sm={12} xs={12} md={8}>
                        <Grid style={{ minHeight: '100%' }} container>
                            <TextBox item lg={6} sm={12} xs={12}>
                                <ExpandedText fontSize={'1.2rem'} style={{ marginBottom: 16 }} medium >REASON #{this.state.index +1} WHY YOU SHOULD CHOOSE ME</ExpandedText>
                                <ExpandedText justify light normal>
                                   {this.state.reasons[this.state.index]}
                                </ExpandedText>
                            </TextBox>
                            <Grid style={{ minHeight: '30vh' }} item lg={6} sm={12} xs={12}>
                                <Picture imgSrc={images[0]} />
                            </Grid>
                        </Grid>
                        <Indicator itemCount={this.state.reasons.length} current={this.state.index} onTouchTap={
                            index => this.setState({ index })
                        }/>                        
                    </CarouselGrid>
                </GreyContainer>
            </Container>
        );
    }
}

export default About
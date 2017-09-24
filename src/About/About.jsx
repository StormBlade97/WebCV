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
            "I have a solid foundation and experience in application development. I can utilize my designer skills and deep understanding of modern Javascript (ES7), with my expertise in the React ecosystem, to deliver a feature packed, complex application while ensuring the best possible user experience. I also have auxiliary UI/UX design skills and have experience wireframing and prototyping using Adobe Experience Design and Illustrator. In addition, I am moving fast and at the moment implementing a project with MongoDB, Express, NodeJS, and GraphQL",
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
                        Front-End Developer experienced in React-Redux stack with UI design skills.
                        I have experience in developing performant, maintainable, feature-rich web application using React tech stack. I am also capable of designing and implement modern, user friendly UI.<br/>

                        I am actively working to transit to FullStack web developer using MongoDB, Koa, React, NodeJS and GraphQL.<br/>

                        My latest projects are web-based data curation tool and upgrading my CV to 2017 standard.
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
                                <Picture imgSrc={images[this.state.index]} />
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
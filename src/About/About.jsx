import React from 'react';
import Grid from 'material-ui/Grid';
import Header from '../components/Header';
import { ExpandedText, StrongText } from '../components/Text';
import CarouselIndicator from './Carousel';
import styled from 'styled-components';
import * as colors from 'material-ui/colors';
import SwipeableViews from 'react-swipeable-views';

const imagesReq = require.context('./static', false, /^.*\.*$/);
const images = imagesReq.keys().map(imagesReq);

const Container = styled.div`max-width: ${props => props.theme.maxWidth};`;

const GreyContainer = styled(Grid)`
    background-color: ${colors.grey[300]};
    width: 100%;
`;

const CarouselGrid = styled(Grid)`
    background-color: ${colors.grey[900]};
    flex-direction: row;
    border-radius: 1em 4px 4px 1em !important;
`;
const Picture = styled.div`
    width: 100%;
    height: 100%;
    min-height: 300px;
    background-image: url("${({ imgSrc }) => imgSrc}") !important;
    background-size: cover;
    background-position: center center;
    border: none;
`;
const Indicator = styled(CarouselIndicator)`
    position: absolute;
    bottom: 12px;
    width: 100%;
`;
const TextBox = styled(Grid)`
    display: flex;
    flex-direction: column;
`;
const reasons = [
    {
        content: `(Good) practice makes perfect. By now, I have had a fair participation in various software projects, including working experience (with a very demanding project).
        Throughout my participation, I have gathered many skills, not only on the coding part, but also on teamwork, development principle, and business strategy. Tech-wise I have had considerable experience in developing User Interface of web apps with React and its renounced state container: Redux, as well as some designing and prototyping using Adobe XD and Illustrator.
        There are many additional techniques I accquired in the proccess, mostly in advanced CSS effects and data-flow management for tricky features.
        I practised Agile development, help conducted User Testing, and wrote documentations.
        In addition, I am moving fast and at the moment implementing a project with MongoDB, Express, NodeJS, and GraphQL.`,
        header: 'Experience',
    },
    {
        content:
            'Understanding that "No body build software alone", I strongly value team work. I have been key contributor in many projects, either in school projects or working ones and I continually exceed expectation as I strive to better myself. My teams hold me in high regards for my passion, innovative ideas and resourcefulness. I am also praised on being disciplined with respect to best practise and technology patterns, and meticulous in details. I believe that, fundamentally, I will be great in any team as I have an open mindset, excellent communication skill, and a motivation to better myself. Practically, I have experience in using collaborative tools. Some of them are Trello, Assembla (for ticket managing), Git (as Software Version Control), and Slack for communication.',
        header: 'Collaborative mindset',
    },
    {
        content:
            'Software engineering is not something that people can just do as work, as in a sense of chores. My world view on Software Engineering is that it is allows us to solve complex problems, and that software engineering is problem-solving itself. I believe that, to be successful in this carrier, one must have passion, strong motivation, and self-discipline in problem-solving. I consider myself inquisitive, innovative, discipline and attentive to details, which will certainly be a solid foundation in making me a great software engineerer (a problem-solver). I have also received the same feedback from people I have collaborated with, and I believe I will continue to be a great contributor to even bigger, more impactful projects.',
        header: 'Good traits',
    },
];
class About extends React.PureComponent {
    state = {
        index: 0,
    };

    render() {
        return (
            <Container>
                <Header
                    style={{ marginBottom: '46px' }}
                    main={'A LITTLE BIT '}
                    mainColored={'ABOUT ME'}
                    subtitle={'Reasons why you should consider me in your next project'}
                />
                <GreyContainer container>
                    <TextBox style={{ padding: 24 }} item sm={12} md={4} xs={12}>
                        <StrongText style={{ marginBottom: 16 }} color={colors.grey[800]}>
                            SUMMARY
                        </StrongText>
                        <ExpandedText justify normal color={colors.grey[800]}>
                            Front-End Developer experienced in React-Redux stack with UI design skills. I have
                            experience in developing performant, maintainable, feature-rich web application using React
                            tech stack. I am also capable of designing and implementing modern, user friendly UI.<br />
                            I am actively working to transit to Full-Stack web developer using MongoDB, Koa, React,
                            NodeJS and GraphQL.<br />
                            My latest projects are web-based data curation tool and upgrading my CV to 2017 standard.
                        </ExpandedText>
                    </TextBox>
                    <CarouselGrid
                        style={{ padding: 24, paddingBottom: 28, position: 'relative' }}
                        item
                        sm={12}
                        xs={12}
                        md={8}
                    >
                        <SwipeableViews
                            animateHeight
                            enableMouseEvents
                            onChangeIndex={index => this.setState({ index })}
                            index={this.state.index}
                        >
                            {reasons.map((reason, index) => (
                                <Grid key={index} container>
                                    <TextBox item lg={6} sm={12} xs={12}>
                                        <ExpandedText fontSize={'1.2rem'} style={{ marginBottom: 16 }} medium>
                                            I HAVE{' '}
                                            <ExpandedText
                                                fontSize={'1.2rem'}
                                                style={{ textTransform: 'uppercase' }}
                                                primary
                                            >
                                                {reason.header}
                                            </ExpandedText>
                                        </ExpandedText>
                                        <ExpandedText justify light normal>
                                            {reason.content}
                                        </ExpandedText>
                                    </TextBox>
                                    <Grid style={{ minHeight: '30vh' }} item lg={6} sm={12} xs={12}>
                                        <Picture imgSrc={images[index]} />
                                    </Grid>
                                </Grid>
                            ))}
                        </SwipeableViews>
                        <Indicator
                            itemCount={reasons.length}
                            current={this.state.index}
                            onTouchTap={index => this.setState({ index })}
                        />
                    </CarouselGrid>
                </GreyContainer>
            </Container>
        );
    }
}

export default About;

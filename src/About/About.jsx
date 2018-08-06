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

const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
`;

const GreyContainer = styled(Grid)`
    width: 100%;
`;

const CarouselGrid = styled(Grid)`
    background-color: ${colors.grey[900]};
    flex-direction: row;
    border-radius: 1em 4px 4px 1em !important;
`;
const Picture = styled.img`
    width: 100%;
    height: 100%;
    min-height: 300px;
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
        content: `By now, I have had a fair participation in various software projects targeting both desktop and mobile devices.
       I am a person who is very goal oriented, and my core values is the significance of my contribution to the bettering of society. Thus, I value learning and I have accumulated a lot of both practical knowledge and the fundamental theory backing behind that, in both technical, design, and some model of human collaboration.
       Besides the enumerable list of technologies and frameworks like React, Redux, Angular, RxJS knowledge about which I've accumulated over the course of my career, also have experience doing professional UI and a bit of UX design, and I do think that it is a useful and quite rare combination of talent. Of course, outside of immediately useful and practical technologies named, I also learn and read about the deeper stories about them, and discuss with other people or research on books and articles. Such topics are the arise of Functional Programming practise and why do we need that, Lambda calculus, OOP vs Functional, or the difference between Angular vs React. I believe this greatly help me in choosing the right tool to solve the problem, and help me in improving my own code, too.
       I look forward to now continuing enhancing my technical prowess in scaling applications in their back ends and databases, while contributing to the usability of the application through design.`,
        header: 'Experience',
    },
    {
        content:
            'Understanding that "No body build software alone", I strongly value team work. I have been key contributor in many projects, either in school projects or working ones and I continually exceed expectation as I strive to better myself. My teams hold me in high regards for my passion, innovative ideas and resourcefulness. At Medisapiens, even though I am the youngest person, I continually push for great changes, and challenge outdated practise, bring enormous values to the project that both clients and teammate still commend me over until today. At Gofore, I brought fort managerial issues, not only solving the problem at a technical perspective, but on an organisation level to allow the team to become more efficient. I also hold several spontaneous workshop to brief my teammate through popular technology and their best practices, such as React/Redux talk at Medisapiens.',
        header: 'Collaborative mindset',
    },
    {
        content:
            'Software engineering is not something that people can just do as work, as in a sense of chores. My world view on Software Engineering is that it is allows us to solve complex problems, and that software engineering is problem-solving itself. I believe that, to be successful in this carrier, one must have passion, strong motivation, and self-discipline in problem-solving. One of my core values are continual learning. I read books on not only technical problems but also on organisational matters. I believe that, these are the important traits for a problem solver, in order to come up with creative yet efficient way to tackle challenges that are meaningful to people.',
        header: 'High motivation',
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
                    <TextBox style={{ padding: 36 }} item sm={12} md={4} xs={12}>
                        <StrongText style={{ marginBottom: 16 }} color={colors.grey[800]}>
                            SUMMARY
                        </StrongText>
                        <ExpandedText justify normal color={colors.grey[800]}>
                            A creative developer skilled in front-end development and knowledgeable with back-end work.
                            Capable of crafting user-friendly designs and intuitive applications. Pursuing opportunities
                            to grow in design, technical aptitude and also in leadership. My recent works are UI/UX
                            design and front-end development for two progressive web apps for the City of Vantaa, and a
                            robust, performant web platform to handle heavy-weight tabular data that was selected to be
                            a finalist in a design award.
                        </ExpandedText>
                    </TextBox>
                    <CarouselGrid
                        style={{ padding: 24, paddingBottom: 28, position: 'relative' }}
                        item
                        sm={12}
                        xs={12}
                        md={8}>
                        <SwipeableViews
                            animateHeight
                            enableMouseEvents
                            onChangeIndex={index => this.setState({ index })}
                            index={this.state.index}>
                            {reasons.map((reason, index) => (
                                <Grid key={index} container>
                                    <TextBox item lg={6} sm={12} xs={12}>
                                        <ExpandedText fontSize={'1.2rem'} style={{ marginBottom: 16 }} medium>
                                            I HAVE{' '}
                                            <ExpandedText
                                                fontSize={'1.2rem'}
                                                style={{ textTransform: 'uppercase' }}
                                                primary>
                                                {reason.header}
                                            </ExpandedText>
                                        </ExpandedText>
                                        <ExpandedText justify light normal>
                                            {reason.content}
                                        </ExpandedText>
                                    </TextBox>
                                    <Grid style={{ minHeight: '30rem', padding: '2rem' }} item lg={6} sm={12} xs={12}>
                                        <Picture src={images[index]} />
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

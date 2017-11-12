import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ExpandedText as Text } from '../components/Text';
import Avatar from 'material-ui/Avatar';
import Panel from '../components/Panel';
import AccurateIcon from './static/AccurateIcon';
import BabyIcon from './static/BabyIcon';
import BallGame from './static/BallGame';
import TravellerIcon from './static/TravellerIcon';
import ChatAppIcon from './static/ChatApp.ico';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';

const workExperience = [
    {
        title: 'Petsofi @Medisapiens',
        subtitle: 'Front-End Developer, Designer',
        timestamp: '10.2017 → Present',
        skillset: [
            'javascript',
            'webapplication',
            'react',
            'redux',
            'webpack',
            'git',
            'design',
            'prototyping',
            'styled-components',
            'react-router',
            'react-motion',
            'optimistic update',
        ],
        content: `Design and develop the front-end of QuestionnaireBuilder for Petsofi, a social platform for pet owner.`,
    },
    {
        title: 'Accurate @Medisapiens',
        leftIcon: <AccurateIcon size={'46px'} color={'rgb(255,64,129)'} />,
        subtitle: 'Front-End Developer, Designer',
        timestamp: '03.2017 → Present',
        skillset: [
            'javascript',
            'webapplication',
            'react',
            'redux',
            'gulp',
            'git',
            'design',
            'prototyping',
            'material-design',
            'react-virtualize',
            'react-router',
            'react-motion',
        ],
        content: `Design and develop the front-end of Accurate, a medical data curation tool and integrated ontologizer.
        In charge of deciding architechture of the curation part of the tool, and mocking / designing / implementing functionalities and style for the UI.
        Integrated redux, solving challenge of state update as the app has complex interactivity between elements. Integrated client-side routing for performance.
        Utilized react-storybook for component-oriented developement for UI
        Utilizing react-virtualized to enable the tool to handle datasets thousands of rows and hundred of columns, avoiding pagification without compromising on features.`,
    },
    {
        title: 'I was born ¯\\_(ツ)_/¯',
        timestamp: '1997',
        subtitle: 'Human',
        leftIcon: <BabyIcon size={'46px'} color={'rgb(255,215,64)'} />,
    },
];

const projects = [
    {
        title: 'Chat application',
        timestamp: '26.10.2017 → 03.11.2017',
        subtitle: 'Fullstack Developer, Designer',
        leftIcon: <img src={ChatAppIcon} width="46px" />,
        skillset: [
            'react',
            'redux',
            'express',
            'websocket',
            'design',
            'adobeXD',
            'illustrator',
            'material-ui',
            'caching',
            'dynamic theming',
        ],
        content: (
            <Text light>
                Designed the UI and implemented the frontend and some backend of a simple chat room application with
                modern look and feel. The front end is built using the React/Redux and the backend is built using Node,
                Express. The application was designed to be responsive and supports mobile devices. The application
                features audial and haptic feedback, and can sustain network instability with service worker.{'\n'}
                Check it out here:{' '}
                <Text bold>
                    <Link to="https://chatapp-thanhnguyen.herokuapp.com" target="_blank">
                        here
                    </Link>
                </Text>
            </Text>
        ),
    },
    {
        title: 'Lexis',
        timestamp: '09.2017 → Present',
        subtitle: 'Fullstack Developer, Designer',
        skillset: [
            'react',
            'redux',
            'react-router',
            'immutable-js',
            'graphql',
            'apolo',
            'scss',
            'express',
            'krakenjs',
            'passport',
            'mongodb',
            'mongoose',
            'graphql-server',
            'design',
            'adobeXD',
            'illustrator',
        ],
        content: `Design the UI and implement the frontend and the backend Lexis - a project to provide a platform for user generated language courses. The project aims to provide students, especially in developing country, a place where they can browse course from renowned teachers, on advanced material, without having to physically struggle with contact-teaching, which on its own is inconvenience and sometimes could be even impossible.
        The UI is implemented with a Single Page Application using the React techstack with GraphQL. The backend is built using Node, Express with KrakenJS on top, with authentication using passport. MongoDB is the database of choice. Design, wireframe and prototyping is done with AdobeXD & Illustrator
        `,
    },
    {
        title: 'Traveller',
        leftIcon: <TravellerIcon size={'46px'} color={'rgb(96,125,139)'} />,
        timestamp: '3.2017 → 5.2017',
        subtitle: 'Frontend Developer',
        content: `Designed and implement UI for an application helping travellers to contact and communicate with each other for shared travel cost and socializing at destinations.
        The project provided me with  a deeper understanding regarding state management with redux and design pattern of material-ui.`,
        skillset: ['react', 'redux', 'design', 'adobeXD', 'illustrator'],
    },
    {
        title: 'Ball game',
        timestamp: '09.2015',
        subtitle: 'Developer',
        leftIcon: <BallGame size={'46px'} color={'rgb(255,215,64)'} />,
        skillset: ['game', 'javascript', 'animation'],
        content: (
            <Text light>
                {' '}
                Design and implemented an web-based game. Play the game{' '}
                <Text bold>
                    <Link to="/game" target="_blank">
                        here
                    </Link>
                </Text>
            </Text>
        ),
    },
];

const Wrapper = styled(Grid)`
    display: flex !important;
    justify-content: center !important;
    margin: 0 !important;
    width: 100% !important;
`;
const ContentBox = styled(Grid)`justify-content: center !important;`;
const ResponsiveText = styled(Text)`
    @media only screen and (max-width: 768px) {
        font-size: 0.9rem;
        font-weight: 400;
    }
`;

class Timeline extends PureComponent {
    state = { active: null };
    handleChangeIndex = index => this.setState({ active: index });
    getData = () => workExperience;
    render() {
        return (
            <Wrapper container>
                <ContentBox item sm={12} md={10} lg={6} xs={10}>
                    {this.getData().map((project, key) => (
                        <Panel
                            open={this.state.active === key}
                            onClick={() => this.handleChangeIndex(key)}
                            key={key}
                            leftIcon={project.leftIcon}
                            title={project.title}
                            subtitle={project.subtitle}
                            tags={project.skillset}
                            timestamp={project.timestamp}
                        >
                            <ResponsiveText light>{project.content}</ResponsiveText>
                        </Panel>
                    ))}
                </ContentBox>
            </Wrapper>
        );
    }
}

export class ProjectTimeline extends Timeline {
    getData = () => projects;
}

export default Timeline;
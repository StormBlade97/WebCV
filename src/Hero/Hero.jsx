import React from 'react';
import Paper from 'material-ui/Paper';
import MyAvatar from './Avatar';
import styled from 'styled-components';
import InfoBox from './InfoBox';
import ContactBox from './ContactBox';
import backgroundImg from './static/webconstruction.svg';
import Grid from 'material-ui/Grid';

const Background = styled(Paper)`
    background-color: rgba(0, 0, 0, 0.7) !important;
    height: 90vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    padding-left: 10% !important;
    padding-right: 10% !important;
    position: relative;

    @media only screen and (max-width: 768px) {
        padding-left: 0px !important;
        padding-right: 0px !important;
        height: 680px !important;
    }
    &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: rgba(255, 152, 0, 0.8) !important;
        background-image: url(${backgroundImg});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center center;
    }
`;
const ContentBox = styled(Grid)`
    max-width: ${props => props.theme.maxWidth};
    width: 100% !important;
    z-index: 5;
`;
const Item = styled(Grid)`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`;
class Hero extends React.PureComponent {
    render() {
        return (
            <Background elevation={20}>
                <ContentBox container justify={'center'}>
                    <Item item md={6} xs={12}>
                        <MyAvatar style={{ marginRight: '3rem' }} />
                    </Item>
                    <Item item md={6} xs={12}>
                        <InfoBox />
                    </Item>
                </ContentBox>
                <ContactBox />
            </Background>
        );
    }
}

export default Hero;

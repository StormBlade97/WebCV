import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import * as colors from 'material-ui/colors'
import MyAvatar from './Avatar'
import styled from 'styled-components'
import InfoBox from './InfoBox'
import ContactBox from './ContactBox'
import backgroundImg from './static/HeroBackground.png'
import Grid from 'material-ui/Grid'

const Background = styled(Paper)`
    background-image: url(${backgroundImg});
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
        max-height: 680px;  
    }
`;
const ContentBox = styled(Grid)`
    max-width: ${props => props.theme.maxWidth };
    width: 100% !important;
`
const Item = styled(Grid)`
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
`
class Hero extends React.PureComponent {

    render() {
        return (
            <Background elevation={3}>
                <ContentBox container justify={'center'}>
                    <Item item md={6} xs={12}>
                        <MyAvatar style={{ marginRight: '3rem' }}/>
                    </Item>
                    <Item item md={6} xs={12}>
                        <InfoBox />
                    </Item>
                </ContentBox>
                <ContactBox />                
            </Background>
        )
    }
}

export default Hero
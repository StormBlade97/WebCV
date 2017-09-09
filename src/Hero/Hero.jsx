import React from 'react'
import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'
import * as colors from 'material-ui/colors'
import MyAvatar from './Avatar'
import styled from 'styled-components'
import InfoBox from './InfoBox'
import ContactBox from './ContactBox'
import backgroundImg from './static/HeroBackground.png'

const styles = {
    Background: {
        root: {
            backgroundImage: `url(${backgroundImg})`,
            height: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: '10%',
            paddingRight: '10%'
        }
    },
}
const Background = withStyles(styles.Background)(Paper);
const ContentBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
`
class Hero extends React.PureComponent {
    render() {
        return (
            <Background elevation={3}>
                <ContentBox>
                    <MyAvatar />
                    <InfoBox />
                    <ContactBox />
                </ContentBox>
            </Background>
        )
    }
}

export default Hero
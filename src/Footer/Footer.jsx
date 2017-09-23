import React from 'react'
import styled from 'styled-components'
import HeroBackGround from '../Hero/static/HeroBackground.png'
import Text from '../components/Text'
import Icon from '../components/Icon'

const Container = styled.div`
    background-image: url(${HeroBackGround});
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 110px;
    padding: 56px;

    @media only screen and (max-width: 768px) {
        padding: 12px;     
    }
`

const ResponsiveText = styled(Text)`
    @media only screen and (max-width: 768px) {
        text-align: left !important;     
    }
`
const Footer = props => (
    <Container>
        <Text medium fontSize={'1.3rem'}>Made by Thanh Nguyen - 2017</Text>
        <Text style={{ marginBottom: 12 }} >Helsinki, Finland</Text>
        <ResponsiveText style={{ textAlign: 'right' }} light fontSize={'0.8rem'}>Graphics in this page are supported by Freepick</ResponsiveText>
        <ResponsiveText style={{ textAlign: 'right' }} light fontSize={'0.8rem'}>All logos and brand names belongs to their respective owners</ResponsiveText>
    </Container>
)
export default Footer

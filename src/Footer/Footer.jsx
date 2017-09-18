import React from 'react'
import styled from 'styled-components'
import HeroBackGround from '../Hero/static/HeroBackground.png'
import Text from '../components/Text'
import Button from 'material-ui/Button'
import { green } from 'material-ui/colors'
import Icon from '../components/Icon'

const ToTop = styled(Button)`
    background-color: ${ green['A700'] } !important;
    z-index: 100 !important;
`
const Fixed = styled.div`
    position: fixed !important;
    bottom: 40px !important;
    right: 40px !important;
`
const ToTopIcon =  props => <Icon color="white" size={'24px'} iconClassName={"fa fa-chevron-up"} />
const Container = styled.div`
    background-image: url(${HeroBackGround});
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 110px;
    padding: 56px;
`
const Footer = props => (
    <Container>
        <Fixed>
            <ToTop fab > <ToTopIcon /> </ToTop>
        </Fixed>
        <Text medium fontSize={'1.3rem'}>Made by Thanh Nguyen - 2017</Text>
        <Text>Helsinki, Finland</Text>
        <Text style={{ textAlign: 'right' }} light fontSize={'0.8rem'}>Graphics in this page are supported by Freepick</Text>
        <Text style={{ textAlign: 'right' }} light fontSize={'0.8rem'}>All logos and brand names belongs to their respective owners</Text>
    </Container>
)
export default Footer

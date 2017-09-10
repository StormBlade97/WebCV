import React from 'react'
import styled from 'styled-components'
import Text from './Text';
import { grey } from 'material-ui/colors'

const HeaderWrapper = styled.div`
    width: 100%;
`
const TextBox = styled.div`
    text-align: center;
`
const Header = props => (
    <HeaderWrapper style={props.style}>
        <TextBox>
            <Text medium fontSize={'56px'} color={grey[900]}>{props.main}</Text>
            <Text medium fontSize={'56px'} primary>{props.mainColored}</Text>
        </TextBox>
        <TextBox><Text light fontSize={'18px'} color={grey[900]}>{props.subtitle}</Text></TextBox>
    </HeaderWrapper>
)

export default Header

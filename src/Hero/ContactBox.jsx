import React from 'react'
import * as colors from 'material-ui/colors'
import styled from 'styled-components'
import Text from '../components/Text'
import IconButton from 'material-ui/IconButton'

const BottomFlexBox = styled.div`
    display: flex;
    width: 40%;
    position: absolute;
    bottom: 12px;
    justify-content: center;
    transition: all 0.3s ease;    
`
const RoundIconHolder = styled.div`
    border-radius: 2rem;
    display: flex;
    align-items: center;
    margin-left: 16px;
`
const _icon = styled('i')`
    font-size: 36px;
    color: ${props => props.color || props.theme.textColor} !important;    
`
const ContactIcon = props => (<_icon className={`fa fa-${props.iconName}`}/>)
const IconBox = props => (
    <RoundIconHolder>
        <IconButton href={props.url}>
            <ContactIcon iconName={props.iconName} />
        </IconButton>
    </RoundIconHolder>
)
const ContactBox = props => (
    <BottomFlexBox>
        <IconBox url={'https://github.com/StormBlade97'} iconName="github" />
        <IconBox iconName="phone"/>
        <IconBox url={'https://www.linkedin.com/in/thanhng-97/'} iconName="linkedin" />
    </BottomFlexBox>
)
export default ContactBox
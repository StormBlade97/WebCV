import React from 'react'
import Button from 'material-ui/Button'
import * as colors from 'material-ui/colors'
import Text from '../components/Text'
import styled from 'styled-components'

const VAlignWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
const TextBox = styled.div`
    display: inherit;
    flex-direction: column;
    line-height: 68px;
`
const ReadMoreButton = styled(Button)`
    background-color: ${props => props.theme.primary} !important;
    color: ${props => props.theme.textColor} !important;
    font-family: 'Montserrat', sans-serif !important;
    display: inline !important;
    max-width: 25% !important;
    border-radius: 2em !important;
`
const InfoBox = props => (
    <VAlignWrapper>
        <TextBox>
            <Text bold fontSize={'72px'}>
                Hello, I'm <br/>
                <Text bold fontSize={'72px'} color={colors.orange[500]}>Thanh Nguyen</Text>
            </Text>
            <Text light fontSize={'24px'}>Front-End Developer in Helsinki, Finland</Text>
        </TextBox>
        <ReadMoreButton raised>Read More</ReadMoreButton>
    </VAlignWrapper>
)

export default InfoBox;
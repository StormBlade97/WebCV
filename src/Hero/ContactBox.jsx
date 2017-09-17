import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'
import IconButton from 'material-ui/IconButton'
import RawIcon from '../components/Icon'

const BottomFlexBox = styled.div`
    display: flex;
    width: 40%;
    position: absolute;
    bottom: 12px;
    justify-content: center;
    transition: all 0.3s ease;    
`
const Icon = styled(RawIcon)`
    margin: 12px;
` 
const ContactBox = props => (
    <BottomFlexBox>
        <Icon href={'https://github.com/StormBlade97'} iconClassName={`fa fa-github`} />
        <Icon href='#' iconClassName={`fa fa-phone`}/>
        <Icon href={'https://www.linkedin.com/in/thanhng-97/'} iconClassName={`fa fa-linkedin`} />
    </BottomFlexBox>
)
export default ContactBox
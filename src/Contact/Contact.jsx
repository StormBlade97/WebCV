import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header'
import Grid from 'material-ui/Grid'
import { ExpandedText as Text } from '../components/Text'
import { grey } from 'material-ui/colors'
import { Header as ListItem } from '../components/Panel'
import Icon from '../components/Icon'
import team from './static/collaboration.svg'

const darkColor = grey[900]
const contacts = [
    {
        medium: "phone",
        title: "Phone",
        subtitle: "0465947537",
        link: 'tel:0465947537'
    },
    {
        medium: "envelope",
        title: "Email",
        subtitle: "nguyendaithanh0612@gmail.com",
        link: 'mailto:nguyendaithanh0612@gmail.com?subject=Hello%20Thanh'        
    },
    {
        medium: "github",
        title: "Github",
        subtitle: "https://github.com/StormBlade97",
        link: 'https://github.com/StormBlade97'
    },
    {
        medium: "linkedin",
        title: "LinkedIn",
        subtitle: "https://www.linkedin.com/in/thanhng-97/",
        link: "https://www.linkedin.com/in/thanhng-97/",
    }
]
const ImageBox = styled(Grid)`
    display: flex !important;
    justify-content: center !important;
`
const Picture = styled.img`
    width: 100%;
    max-width: 450px;
    max-height: 450px;
    min-height: 400px;
`
class Contact extends React.PureComponent {
    render() {
        return (
            <div style={{ alignSelf: 'flex-start', width: '100%', maxWidth: 1300 ,padding: 12 }}>
                <Text medium fontSize={"1.5rem"} color={darkColor}>Look for me out there</Text><br/>
                <Text normal light color={darkColor}>Send me an email, give me a call, or connect with me if you are interested</Text>
                <Grid container style={{ marginTop: 40 }}>
                    <ImageBox item sm={6} hidden={{ xsDown: true }} justify={'flex-end'}>
                        <Picture src={team}/>
                    </ImageBox>
                    <Grid item sm={6} xs={12}>
                        {
                            contacts.map( (contact, key) => (
                                <ListItem
                                    headerColor={darkColor}
                                    key={key}
                                    leftIcon={<Icon animate={false} color={darkColor} iconClassName={`fa fa-${contact.medium}`}/>}
                                    title={contact.title}
                                    subtitle={contact.subtitle}
                                    href={contact.link}
                                    target="_blank"
                                />
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Contact
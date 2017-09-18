import React from 'react'
import styled from 'styled-components';
import Header from '../components/Header'
import Grid from 'material-ui/Grid'
import { ExpandedText as Text } from '../components/Text'
import { grey } from 'material-ui/colors'
import { Header as ListItem } from '../components/Panel'
import Icon from '../components/Icon'
import HandShake from './static/HandShake.jpg'
import Paper from 'material-ui/Paper'

const darkColor = grey[900]
const contacts = [
    {
        medium: "phone",
        title: "Phone",
        subtitle: "0465947537",
    },
    {
        medium: "envelope",
        title: "Email",
        subtitle: "nguyendaithanh0612@gmail.com"
    },
    {
        medium: "github",
        title: "Github",
        subtitle: "https://github.com/StormBlade97",
    },
    {
        medium: "linkedin",
        title: "LinkedIn",
        subtitle: "https://www.linkedin.com/in/thanhng-97/",
    }
]
const Picture = styled(Paper)`
    background-image: url(${HandShake});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: white;
    border-radius: 1em !important;
    
`
class Contact extends React.PureComponent {
    render() {
        return (
            <div style={{ alignSelf: 'flex-start', width: '100%', maxWidth: 1000 ,padding: 12 }}>
                <Text medium fontSize={"1.5rem"} color={darkColor}>Look for me out there</Text><br/>
                <Text normal light color={darkColor}>Send me an email, give me a call, or connect with me if you are interested</Text>
                <Grid container style={{ marginTop: 40 }}>
                    <Grid item md={6} sm={3}>
                        <Picture elevation={3}/>
                    </Grid>
                    <Grid item md={6} sm={8}>
                        {
                            contacts.map( (contact, key) => (
                                <ListItem
                                    headerColor={darkColor}
                                    key={key}
                                    leftIcon={<Icon color={darkColor} iconClassName={`fa fa-${contact.medium}`}/>}
                                    title={contact.title}
                                    subtitle={contact.subtitle}
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
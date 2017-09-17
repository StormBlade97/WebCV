import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import * as colors from 'material-ui/colors'
import Grid from 'material-ui/Grid'
import { ExpandedText as Text, StrongText } from '../components/Text'
import RawIcon, { IconBox } from '../components/Icon'
import ReduxIcon from './static/ReduxIcon'
import { grey } from 'material-ui/colors'
import atomIcon from './static/Atom.svg'

const TextBox = styled(Grid)`
    display: flex;
    flex-direction: column;
    padding: 24px !important;
`
const LogoBox = styled(IconBox)`
    padding-bottom: 12px;
`
const LogoGrid = styled(Grid)`
    position: relative;
    background: #000000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 1em 0 0 1em;
    padding: 24px !important;
    z-index: 2;
    &::after {
        content: "";
        pointer-events: none !important;       
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: url('${atomIcon}');
        background-size: 30em;
        background-repeat: no-repeat;
        background-position: 25em center;
        opacity: 0.5;
        z-index: -1;
    }
`
const Icon = ({ spacing, type, color }) => (
    <RawIcon color ={color} size={'48px'} iconClassName={`devicon-${type}-plain colored`} spacing={8} />
)
class MySkills extends PureComponent {
    render() {
        return (
            <div>
                <Header
                    style={{ marginBottom: '46px' }}
                    main={"MY "}
                    mainColored={"SKILLS"}
                    subtitle={"What I'm capable of"}
                />
                <Grid container>
                    <TextBox item md={6} xs={12}>
                        <StrongText style={{ marginBottom: 16 }} color={colors.grey[800]}>
                            I CAN BUILD PERFORMANT AND BEAUTIFUL WEB APP
                        </StrongText>
                        <Text justify normal color={colors.grey[800]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        </Text>
                    </TextBox>
                    <LogoGrid item md={6} sm={12} xs={12} >
                        <Text style={{ marginBottom: 16 }} medium fontSize={'1.2rem'}>
                            TECH STACKS
                        </Text>
                        <LogoBox>
                            <Icon color={colors.yellow["A200"]} type="javascript" />
                            <Icon color={colors.lightBlue["A200"]} type="react" />
                            <ReduxIcon color={colors.deepPurple["A200"]} size={'56px'} spacing={8} />
                            <Icon color={colors.blue["A200"]} type="jquery" />
                            <Icon color={colors.lightGreen["A200"]} type="nodejs" />
                            <Icon color={colors.deepOrange["A400"]} type="html5" />
                            <Icon color={colors.blue["A200"]} type="css3" />
                            <Icon color={colors.pink["A200"]} type="sass" />
                            <Icon color={colors.deepPurple["A200"]} type="bootstrap" />
                            <Icon color={colors.deepOrange["A400"]} type="git" />
                            <Icon color={colors.purple["A200"]} type="jasmine" />
                            <Icon color={colors.brown["A200"]} type="mocha" />
                            <Icon color={colors.orange["A200"]} type="illustrator" />
                        </LogoBox>
                        <Text>
                            Technology I have been exposed, but not too versed in
                        </Text>
                        <LogoBox>
                            <Icon color={colors.red["A200"]} type="cplusplus" />
                            <Icon color={colors.red["A400"]} type="java" />
                            <Icon color={colors.blue["A200"]} type="mysql" />
                            <Icon color={colors.yellow["A200"]} type="python" />
                            <RawIcon color={colors.grey["A200"]} size={'48px'} iconClassName={`devicon-express-original colored`} spacing={8} />
                            <Icon color={colors.green["A700"]} type="django" />
                            <Icon color={colors.indigo["A200"]} type="heroku" />
                            <Icon color={colors.blue["A200"]} type="webpack" />
                        </LogoBox>
                    </LogoGrid>
                </Grid>
            </div>
        )
    }
}

export default MySkills
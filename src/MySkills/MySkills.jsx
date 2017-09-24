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
    background: ${grey[900]};
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
        background-position: right center;
        opacity: 0.3;
        z-index: -1;
    }
`
const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
    min-height: 600px;
`
const Icon = ({ spacing, type, color }) => (
    <RawIcon color ={color} size={'48px'} iconClassName={`devicon-${type}-plain colored`} spacing={8} />
)
class MySkills extends PureComponent {
    render() {
        return (
            <Container>
                <Header
                    style={{ marginBottom: '46px' }}
                    main={"MY "}
                    mainColored={"SKILLS"}
                    subtitle={"What I'm capable of"}
                />
                <Grid container style={{ minHeight: '400px' }}>
                    <TextBox item lg={5} md={12} sm={12} xs={12}>
                        <StrongText style={{ marginBottom: 16 }} color={colors.grey[800]}>
                            PERFORMANT WEB APPS WITH NICE USER INTERFACE
                        </StrongText>
                        <Text justify normal color={colors.grey[800]}>
                            I have hands on experience designing and developing application of different scales. At my current company I helped prototyping and implementing a data curation tool. The tool is expected to handle very large data sets, usually around tens of thoudsands of rows and hundreds of columns, while allowing user to interact and manipulate the dataset in a spreadsheet way (with infinite grid), like Microsoft Excel. It's a huge engineering feat, and contrary to contemporary solution, it comes with Material Design. It is praised to be the company's flagship in terms of UI. <br/>
                            Besides work experience, I also have a handful of school projects and own projects. You can check them out in the Experience section. 
                        </Text>
                    </TextBox>
                    <LogoGrid item lg={7} md={12} sm={12} xs={12} >
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
                            Exposed to
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
            </Container>
        )
    }
}

export default MySkills
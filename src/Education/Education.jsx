import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Grid from 'material-ui/Grid'
import { ExpandedText as Text, StrongText } from '../components/Text'

const AchievementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Achievement = props => (
    <AchievementContainer>
        <StrongText primary>
            {props.title}
        </StrongText>
        <Text light>
            {props.content}
        </Text>
    </AchievementContainer>
)
const Container = styled.div`
    max-width: ${props => props.theme.maxWidth};
`
const ResponsiveGrid = styled(Grid)`
    @media only screen and (max-width: 768px) {
        justify-content: center !important;
        text-align: center;
    }
`
const Education = props => (
    <Container>
        <Header
            style={{ marginBottom: '46px' }}
            main={"EDUCATION & "}
            mainColored={"ACHIEVEMENT "}
            color="white"
        />
        <ResponsiveGrid style={{ paddingLeft: '2em', paddingRight: '2em' }} container>
            <ResponsiveGrid item md={3} sm={12} xs={12}>
                <Text style={{ whiteSpace: 'breakword' }}>
                    I have had relevant background in Software Engineering. Currently, I am studying at Metropolia UAS 3rd year.
                </Text>
            </ResponsiveGrid>
            <Grid item sm={4} md={3} xs={4}>
                <Achievement content={"Metropolia UAS"} title={4.3} />
            </Grid>
            <Grid item sm={4} md={3} xs={4}>
                <Achievement content={"Vaasa UAS"} title={4} />
            </Grid>
            <Grid item sm={4} md={3} xs={4}>
                <Achievement content={"Hung Vuong HighSchool for the gifted"} title={9.6} />
            </Grid>
        </ResponsiveGrid>
    </Container>
)

export default Education
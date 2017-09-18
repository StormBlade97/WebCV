import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import Grid from 'material-ui/Grid'
import { ExpandedText as RawText, StrongText } from '../components/Text'

const AchievementContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Text = styled(RawText)`
    @media only screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
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

const Education = props => (
    <div>
        <Header
            style={{ marginBottom: '46px' }}
            main={"EDUCATION & "}
            mainColored={"ACHIEVEMENT "}
            color="white"
        />
        <Grid container>
            <Grid item md={3} sm={12}>
                <Text>
                    Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla bla bla Bla bla bla bla bla bla bla
                </Text>
            </Grid>
            <Grid item sm={4} md={3}>
                <Achievement content={"Metropolia UAS"} title={4.3} />
            </Grid>
            <Grid item sm={4} md={3}>
                <Achievement content={"Vaasa UAS"} title={4} />
            </Grid>
            <Grid item sm={4} md={3}>
                <Achievement content={"Hung Vuong HighSchool for the gifted"} title={9.6} />
            </Grid>
        </Grid>
    </div>
)

export default Education
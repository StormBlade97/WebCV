import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Header from '../components/Header'
import * as colors from 'material-ui/colors'
import { ExpandedText as Text } from '../components/Text'
import Icon, { IconBox } from '../components/Icon'
import Tabs, { Tab } from 'material-ui/Tabs'
import SwipeableViews from 'react-swipeable-views'
import Timeline, { ProjectTimeline } from './Timeline'

const SwipeableContainer = styled(SwipeableViews)`
    margin-top: 40px;
    height: auto !important;
    padding: 12px;
    overflow: hidden;
`
const TabsContainer = ({ children, className, ...props }) => (
    <Tabs {...props} indicatorColor="primary" textColor="primary" className={className}>{children}</Tabs>
)

class ExperienceNProject extends PureComponent {
    state = {
        index: 0
    }
    handleChangeIndex = index => {
        this.setState({ index })
    }
    render() {
        return (
            <div>
                <Header style={{ marginBottom: 56 }} color={"white"} main={"MY "} mainColored={"EXPERIENCE"} subtitle={"Some cool stuff I worked on"} />
                <TabsContainer
                    centered
                    value={this.state.index}
                    onChange={(e, index) => this.handleChangeIndex(index)}
                >
                    <Tab label="Work experience" />
                    <Tab label="Projects" />
                </TabsContainer>
                <SwipeableContainer index={this.state.index} onChangeIndex={this.handleChangeIndex}>
                    <Timeline />
                    <ProjectTimeline />
                </SwipeableContainer>
            </div>
        )
    }
}
export default ExperienceNProject
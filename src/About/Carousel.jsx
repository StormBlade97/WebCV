import React from 'react'
import Grid from 'material-ui/Grid'
import Header from '../components/Header'
import Text from '../components/Text'
import styled from 'styled-components'
import * as colors from 'material-ui/colors'
import _ from 'lodash'

const LayoutWrapper = styled.div`
    display: flex;
    jusitfy-content: center;
`
const Bulb = styled.div`
    transition: all ease 0.7s;
    width: ${({size}) => size};
    height: ${({size}) => size};
    border-radius: 50%;
    border: 1px solid ${({ color, ...props }) => color || props.theme.textColor };
    background-color: ${({ color, active, ...props }) => color || (active ? props.theme.textColor : 'transparent') };
    margin-right: 12px;
    cursor: pointer;
    box-shadow: ${props => props.active && `0 0px 12px rgba(255,255,255,0.24), 0 0px 12px rgba(255,255,255,0.50)`};
`
class CarouselIndicator extends React.PureComponent {
    render() {
        return (
            <LayoutWrapper className={this.props.className}>
                {
                    _.range(this.props.itemCount).map(index => (
                        <Bulb
                            size={'8px'}
                            key={`bulb-${index}`}
                            active={this.props.current === index}
                            onClick={
                                e => this.props.onTouchTap(index)
                            }
                        />
                    ))
                }
            </LayoutWrapper>
        );
    }
}
export default CarouselIndicator

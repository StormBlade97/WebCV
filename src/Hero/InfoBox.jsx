import React from 'react';
import Button from 'material-ui/Button';
import Text from '../components/Text';
import styled from 'styled-components';
import Icon from '../components/Icon';
import CV from '../static/CV2017-TN.pdf';

const VAlignWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 768px) {
        align-items: center;
        justify-content: space-around;
    }
`;
const TextBox = styled.div`
    display: inherit;
    flex-direction: column;
    justify-content: center;
`;
const Headlines = styled(Text)`
    font-size: 4rem;
    color: ${props => props.color || props.theme.primary};

    @media only screen and (max-width: 1200px) {
        font-size: 3rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;
const JobTitle = styled(Text)`
    font-size: 1.8rem;
    color: ${props => props.theme.textColor};
    margin-bottom: 40px;

    @media only screen and (max-width: 1200px) {
        font-size: 1.7rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 30px;
    }
`;
const HeadlineBlock = styled.div`
    display: flex;
    flex-direction: column;
`;
const ReadMoreButton = styled(Button)`
    background-color: ${props => props.theme.primary} !important;
    color: ${props => props.theme.textColor} !important;
    font-family: 'Montserrat', sans-serif !important;
    display: inline !important;
    width: 11rem !important;
    border-radius: 2em !important;
    padding-top: 1rem !important;
    padding-bottom: 1rem !important;
    text-align: center;

    @media only screen and (max-width: 1200px) {
        font-size: 0.8rem !important;
        padding-top: 0.3rem !important;
        padding-bottom: 0.3rem !important;
        width: 10rem !important;
    }
`;
const InfoBox = props => (
    <VAlignWrapper>
        <TextBox>
            <HeadlineBlock>
                <Headlines medium color="white">
                    Hello, I'm
                </Headlines>
                <Headlines bold>Thanh Nguyen</Headlines>
            </HeadlineBlock>
            <JobTitle light>Front-End Developer in Helsinki, Finland</JobTitle>
        </TextBox>
        <ReadMoreButton href={`${CV}`} download raised>
            {
                <Icon
                    size={'0.8rem'}
                    animate={false}
                    iconClassName={'fa fa-download'}
                    style={{ margin: 0, padding: 0 }}
                />
            }{' '}
            Paper CV
        </ReadMoreButton>
    </VAlignWrapper>
);

export default InfoBox;

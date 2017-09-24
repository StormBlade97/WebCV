import React from 'react';
import MuiAvatar from 'material-ui/Avatar';
import styled from 'styled-components';
import avatarUrl from './static/Profile.png';

const Avatar = styled(MuiAvatar)`
    width: 100% !important;
    height: 100% !important;
    max-width: 400px !important;
    margin: 0 !important;
    border: 5px rgba(255, 255, 255, 0.86) solid;
    box-sizing: border-box;

    @media only screen and (max-width: 1200px) {
        width: 300px !important;
    }
    @media only screen and (max-width: 768px) {
        width: 250px !important;
    }
`;

const MyAvatar = props => <Avatar {...props} src={avatarUrl} className={props.className} />;

export default MyAvatar;

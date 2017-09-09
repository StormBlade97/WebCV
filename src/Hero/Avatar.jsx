import React from 'react'
import MuiAvatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import * as colors from 'material-ui/colors'
import avatarUrl from './static/Avatar.jpg'

const styles = {
    Avatar: {
        root: {
            width: 240,
            height: 240
        }
    }
}
const Avatar = withStyles(styles.Avatar)(MuiAvatar);

const MyAvatar = props => (
    <Avatar src={avatarUrl} className={props.className}/> 
)

export default MyAvatar;
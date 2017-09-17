import React from 'react'
import MuiAvatar from 'material-ui/Avatar'
import { withStyles } from 'material-ui/styles'
import avatarUrl from './static/Avatar.svg'

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
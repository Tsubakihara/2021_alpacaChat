import React, { useEffect, useRef } from 'react';
import {
    Avatar, Button,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { gravatarPath } from '../../gravatar';
import ChatListPage from "./ChatListPage";
import Main from "../ChatRoom/Main";

const useStyles = makeStyles(() => ({
    inline: {
        display: 'inline',
    },
}));

const ChatItem = ({ isLastItem, username, roomname, setRoomName}) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(roomname);

    useEffect(() => {
        if (isLastItem) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isLastItem]);

    return (
        <ListItem divider={true} ref={ref}>
            <ListItemAvatar>
                <Avatar src={avatarPath} />
            </ListItemAvatar>
            <ListItemText
                primary={roomname}
                secondary={
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    </Typography>
                }
            />
            <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={() => {
                    setRoomName(roomname);
                }}
            >
                チャットルームを開く
            </Button>
        </ListItem>
    );
};

export default ChatItem;

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

const ChatItem = ({ isLastItem, name, userName }) => {
    const ref = useRef(null);
    const classes = useStyles();
    const avatarPath = gravatarPath(name);

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
                primary={name}
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
                //TODO: onclickで値が渡るようにしたい
                onClick={() => {
                    return (
                        <Main roomName={name} userName={userName} />
                    );
                }}
            >
                チャットルームを開く
            </Button>
        </ListItem>
    );
};

export default ChatItem;

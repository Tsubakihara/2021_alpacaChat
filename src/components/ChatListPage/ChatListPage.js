import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatCreateField from './ChatCreateField';
import ChatList from "./ChatList";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    },
});

const ChatListPage = ({ username }) => {
    console.log(username);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ChatList username={username}/>
            <ChatCreateField username={username}/>
        </div>
    );
};

export default ChatListPage;

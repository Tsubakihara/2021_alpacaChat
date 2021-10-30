import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ChatItem from "./ChatItem";
import {firestore} from '../../firebase';

const useStyles = makeStyles({
    root: {
        gridRow: 1,
        overflow: 'auto',
        width: '100%',
    },
});

const ChatList = (props) => {
    const [chats, setChats] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        firestore.collection('rooms').onSnapshot((snapshot)=> {
                setChats(snapshot.docs.map((doc)=> doc.data()))
        });
    }, []);

    const length = chats.length;

    return (
        <List className={classes.root}>
            {chats.map(({ key, name }, index) => {
                const isLastItem = length === index + 1;
                return (
                     <ChatItem
                         key={key}
                         roomname={name}
                         username={props.name}
                         isLastItem={isLastItem}
                     />
                );
            })}
        </List>
    );
};


export default ChatList;

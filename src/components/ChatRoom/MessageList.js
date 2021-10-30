import React, { useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import {firestore, messagesRef} from '../../firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

const MessageList = (props) => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
      firestore.collection('rooms').where('name' == props.roomname).onSnapshot((snapshot)=> {
          setMessages(snapshot.docs.map((doc)=> doc.data()))
      });
  }, []);

  const length = messages.length;

  return (
    <List className={classes.root}>
      {messages.map(({ key, username, context, timestamp }, index) => {
        const isLastItem = length === index + 1;

        return (
          <MessageItem
            key={key}
            name={username}
            text={context}
            isLastItem={isLastItem}
          />
        );
      })}
    </List>
  );
};

export default MessageList;

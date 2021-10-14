import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import MessageInputField from './MessageInputField';
import MessageList from './MessageList';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

const Main = ({ username, roomName }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MessageList roomName={roomName}/>
      <MessageInputField roomName={roomName} username={username}/>
    </div>
  );
};

export default Main;

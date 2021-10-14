import React, { useState } from 'react';
import ChatListPage from "./ChatListPage/ChatListPage";
import SignIn from './SignIn';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName}/>;
  } else {
    return <ChatListPage username={name}/>;
  }
};

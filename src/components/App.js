import React, { useState } from 'react';
import ChatListPage from "./ChatListPage/ChatListPage";
import SignIn from './SignIn';
import config from '../config.json';
import Main from "./ChatRoom/Main";

export default () => {
  const [name, setName] = useState('');
  const [roomname, setRoomName] = useState('');
  if (config.signInEnabled && name === '') {
    // ログインページ
    return <SignIn setName={setName}/>;
  } else if (roomname === ''){
    // チャット一覧
    return <ChatListPage setRoomName={setRoomName} username={name}/>;
  } else {
    // チャットページ
    return <Main roomname={roomname} username={name}/>;
  }
};

import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ChatCreateField from './ChatCreateField';
import ChatList from "./ChatList";
import {PropTypes} from "prop-types";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        height: '100vh',
        gridTemplateRows: '1fr auto',
    },
});

const ChatListPage = ({username}) => {
    const classes = useStyles();
    const [string, setString] = useState('');
    const [isComposed, setIsComposed] = useState(false);
    const [name, setName] = useState('');

    return (
        // returnできるタグは一つなので、内容全体をdivタグで囲う
        <div className={classes.root}>
            <ChatList name={username}/>
            {/*<ChatCreateField name={username}/>*/}
        </div>
    );
};
ChatListPage.propTypes ={
    username: PropTypes.object.isRequired
}

export default ChatListPage;

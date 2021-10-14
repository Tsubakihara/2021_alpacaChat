import React from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import { pushMessage } from '../../firebase';
import {firestore} from "../../firebase";

const ChatCreateButton = ({ inputEl, name, text }) => {
    return (
        <IconButton
            disabled={text === ''}
            onClick={() => {
                firestore.collection('items').add({name});
                inputEl.current.focus();
            }}
        >
            <SendIcon />
        </IconButton>
    );
};

export default ChatCreateButton;

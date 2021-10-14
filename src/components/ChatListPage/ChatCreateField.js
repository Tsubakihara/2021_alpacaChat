import React, { useState } from 'react';
import { TextField } from '@material-ui/core';

import {firestore, pushMessage} from '../../firebase';

const ChatCreateField = ({ inputEl, name, setText, text }) => {
    const [isComposed, setIsComposed] = useState(false);

    return (
        <TextField
            autoFocus
            fullWidth={true}
            inputRef={inputEl}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
                if (isComposed) return;

                const text = e.target.value;
                if (text === '') return;

                if (e.key === 'Enter') {
                    firestore.collection('rooms').add({ name, text });
                    setText('');
                    e.preventDefault();
                }
            }}
            onCompositionStart={() => setIsComposed(true)}
            onCompositionEnd={() => setIsComposed(false)}
            value={text}
        />
    );
};

export default ChatCreateField;

import React from 'react';
import { TreeItem } from '../';


export const TreeDirectory = ({ id, children, preview = '', currentChosenElement, changeCurrentElement }) => (
    <div style={{ paddingLeft: '16px' }}>
        <TreeItem
            id={id}
            preview={preview}
            currentChosenElement={currentChosenElement}
            changeCurrentElement={changeCurrentElement}
        />
        {children}
    </div>
)
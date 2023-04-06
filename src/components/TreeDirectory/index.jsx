import React from 'react';
import { TreeItem } from '../';


export const TreeDirectory = ({ id, children, preview = '' }) => (
    <div style={{ paddingLeft: '16px' }}>
        <TreeItem id={id} preview={preview} />
        {children}
    </div>
)
import React from 'react';
import { getPreviewIcon } from '../../utils';

export const TreeItem = ({ id, preview, currentChosenElement, changeCurrentElement }) => {
    const [name, type] = id?.split(':');

    return (
        <div
            style={{
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                fontWeight: currentChosenElement ===  id ? 'bold' : 'normal',
                cursor: 'pointer'
            }}
            onClick={changeCurrentElement}
            id={id}
        >
            <img src={getPreviewIcon(preview, type)} style={{ width: '20px', height: 'auto' }} alt={'icon'} />
            <p
                style={{
                    paddingLeft: '4px',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden'
                }}
            >
                {name}
            </p>
        </div> 
    )
};

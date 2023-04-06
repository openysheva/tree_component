import React, { useContext } from 'react';
import { getPreviewIcon } from '../../utils';
import { SideContext } from '../../contexts';

export const TreeItem = ({ id, preview }) => {
    const { currentElement, changeCurrentElement } = useContext(SideContext);
    const [name, type] = id?.split(':');

    return (
        <div
            style={{
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                fontWeight: currentElement ===  id ? 'bold' : 'normal',
                cursor: 'pointer'
            }}
            onClick={changeCurrentElement}
            id={id}
        >
            <img src={getPreviewIcon(preview, type)} style={{ width: '20px', height: 'auto' }} />
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

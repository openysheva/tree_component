import React, { useState } from 'react';
import { Tree, Content } from '../../components';
import { entityExample } from '../../constants';

export const EntityView = () => {
    const [currentChosenElement, setCurrentChosenElement] = useState(`${entityExample?.tours[0]?.name}:tour`);
    const changeCurrentElement = event => {
        setCurrentChosenElement(event?.currentTarget?.id)
    }

    return (
        <div style={{ display: 'flex' }}>
            <Tree data={entityExample} currentChosenElement={currentChosenElement} changeCurrentElement={changeCurrentElement} />
            <Content currentChosenElement={currentChosenElement} />
        </div>
    )
};
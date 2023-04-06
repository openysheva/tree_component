import React from 'react';
import { Tree, Content } from '../../components';
import { entityExample } from '../../constants';
import { SideContextProvider } from '../../contexts';

export const EntityView = () => (
    <SideContextProvider firstSideId={`${entityExample?.tours[0]?.name}:tour`}>
        <div style={{ display: 'flex' }}>
            <Tree data={entityExample} />
            <Content />
        </div>
    </SideContextProvider>
)
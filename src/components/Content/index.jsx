import React, { useContext } from 'react';
import { SideContext } from '../../contexts';

export const Content = (props) => {
    const { currentElement } = useContext(SideContext);

    return (
        <div style={{ flexGrow: 1, border: '1px solid red' }}>текущий выбранный контент - {currentElement}</div>
    );
}
import React from 'react';

export const Content = ({ currentChosenElement }) => (
    <div style={{ flexGrow: 1, border: '1px solid red' }}>
        текущий выбранный контент - {currentChosenElement}
    </div>
);
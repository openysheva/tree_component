import React, { createContext, useState } from 'react';

export const SideContext = createContext({});

export const SideContextProvider = ({ children, firstSideId }) => {
    const [currentChosenElement, setCurrentChosenElement] = useState(firstSideId);

    const changeCurrentElement = e => setCurrentChosenElement(e?.currentTarget?.id);

    return (
        <SideContext.Provider
            value={{
                currentElement: currentChosenElement,
                changeCurrentElement: changeCurrentElement,
            }}
        >
            {children}
        </SideContext.Provider>
    );
};

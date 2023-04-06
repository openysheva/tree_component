import React from 'react';
import { TreeDirectory } from '../';
import { SLIDE_TYPES } from '../../constants';

export const Tree = ({ data, currentChosenElement, changeCurrentElement }) => (
    <div style={{ width: '30%', border: '1px solid blue', padding: '8px' }}>
        <p style={{ margin: '8px 0 16px' }}>
            {data.name}
        </p>
        {data?.tours?.map(
            tour => (
                <TreeDirectory
                    key={tour?.name}
                    id={`${tour?.name}:${SLIDE_TYPES.TOUR}`}
                    currentChosenElement={currentChosenElement}
                    changeCurrentElement={changeCurrentElement}
                >
                    {tour?.rooms?.map(room => (
                        <TreeDirectory
                            key={room?.name}
                            id={`${room?.name}:${SLIDE_TYPES.ROOM}`}
                            currentChosenElement={currentChosenElement}
                            changeCurrentElement={changeCurrentElement}
                        >
                            {room?.panoramas?.map(panorama => (
                                <TreeDirectory
                                    key={panorama?.panorama_id}
                                    id={`${panorama?.panorama_id}:${SLIDE_TYPES.PANORAMA}`}
                                    preview={panorama?.photo_url}
                                    currentChosenElement={currentChosenElement}
                                    changeCurrentElement={changeCurrentElement}
                                >
                                    {panorama?.pointers?.map(pointer => (
                                        <TreeDirectory
                                            key={pointer?.pointer_id}
                                            id={`${pointer?.pointer_id}:${SLIDE_TYPES.POINTER}`}
                                            currentChosenElement={currentChosenElement}
                                            changeCurrentElement={changeCurrentElement}
                                        />
                                    ))}
                                </TreeDirectory>
                            ))}
                        </TreeDirectory>
                    ))}
                </TreeDirectory>
            )
        )}
    </div>
);
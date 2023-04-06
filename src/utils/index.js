import folder from '../assets/folder.svg';
import file from '../assets/file.svg';
import { SLIDE_TYPES } from '../constants';

export const getPreviewIcon = (preview, type) => {
    if (preview) {
        return preview;
    }

    return type === SLIDE_TYPES.POINTER ? file : folder;
};
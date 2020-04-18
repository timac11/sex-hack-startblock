import React from 'react';
import './Portrait.less';

interface IPortrait {
    src: string
}

export const Portrait: React.FC<IPortrait> = ({src}) => {
    return <img src={src} alt={'portrait'} className={'ux-portrait'} />
};

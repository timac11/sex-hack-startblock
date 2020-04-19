import React from 'react';
import maleSrc from './male.png';
import femaleSrc from './female.png';

export const Male: React.FC = (props) => {
    return <img src={maleSrc} alt={'male'} />
};

export const Female: React.FC = (props) => {
    return <img src={femaleSrc} alt={'female'} />
};


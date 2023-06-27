// 메인페이지

import React from 'react';
import { Wrap } from '../styled/TamraStyled';
import TamraVisual from './TamraVisual';
import TamraMain from './TamraMain';
import Header from './Header';

const Tamra = () => {
    return (
        <Wrap>
            <TamraVisual/>
            <TamraMain/>
        </Wrap>
    );
};

export default Tamra;

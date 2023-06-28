import React from 'react';
import { MainVisual } from '../styled/TamraStyled';

const Visual = () => {
    return (
        <MainVisual>
            <img src="./images/main_slider_1.jpg" alt="전기차" />
            <div className="text">
                <h2>탐라는 전기차</h2>
                <p>전기차와 함께 제주 여행을 준비하는 당신에게<br/>필요한 모든 정보와 꿀팁!</p>
            </div>
            <span className='arrow'></span>
        </MainVisual>
    );
};

export default Visual;
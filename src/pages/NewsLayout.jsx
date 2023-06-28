import React from 'react';
import { Outlet } from 'react-router-dom';
import { NewsLayoutWrap } from '../styled/TamraStyled';

const NewsLayout = () => {
    
    return (
        <NewsLayoutWrap>
            <div  style={{paddingTop:'100px', width: '1200px', margin: "auto", position: 'relative', boxSizing: 'border-box'}}>
                <h2>JEJU 전기차 관련 소식</h2>
                <p className='newsP'>제주도의 전기차 관련 정보와 다양한 관광 소식을 확인해보세요.</p>
            </div>
            <Outlet/>
        </NewsLayoutWrap>
    );
};

export default NewsLayout;
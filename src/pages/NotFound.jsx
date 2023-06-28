import React from 'react';
import { NotFoundWrap } from '../styled/TamraStyled';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <NotFoundWrap>
            <div className="inner">
                <h2>페이지를 찾을 수 없습니다.</h2>
                <p>요청하신 페이지를 처리하는 도중 예기치 못한 에러가 발생했습니다</p>
                <p>잠시 후 다시 시도해주세요</p>
                <p>
                <button onClick={()=>navigate('/')}>홈으로 가기</button>

                </p>
            </div>
            
        </NotFoundWrap>
    );
};

export default NotFound;
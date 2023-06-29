import React from 'react';
import { Main } from '../styled/TamraStyled';
import Visual from '../components/Visual';
import MainList from '../components/MainList';

const Home = ({ setIsOnOff}) => {
    return (
        <Main >
            <Visual/>
            <div className="inner">
                <h3 className='title'>전기차 이용법부터 알찬 꿀팁까지 모두 알려드려요!</h3>
                <MainList setIsOnOff={setIsOnOff}/>
            </div>
        </Main>
    );
};

export default Home;
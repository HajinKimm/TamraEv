import React from 'react';
import Map from '../components/Map';
import { EvchargingWrap } from '../styled/TamraStyled';
import { Navigation } from 'swiper';
import { useNavigate } from 'react-router-dom';

const Evcharging = () => {
    const navigation = useNavigate() 
    return (
        <EvchargingWrap>
            <div className="inner">
                <h2>전기차 충전소</h2>
                <Map/>
                <p>
                <button onClick={()=>navigation('/')}>Home</button>

                </p>
            </div>

        </EvchargingWrap>
    );
};

export default Evcharging;
import React from 'react';
import Map from '../components/Map';
import { EvchargingWrap } from '../styled/TamraStyled';

const Evcharging = () => {
    return (
        <EvchargingWrap>
            <div className="inner">
                <h2>전기차 충전소</h2>
                <Map/>
            </div>

        </EvchargingWrap>
    );
};

export default Evcharging;
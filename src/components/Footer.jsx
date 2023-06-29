import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrap } from '../styled/TamraStyled';

const Footer = ({ setIsOnOff}) => {
    const onUp=(bool)=>{
        window.scrollTo({ top: 0});
        setIsOnOff(bool)
    }
    return (
        <FooterWrap>
            <div className="inner">
                <h2><img src="./images/logo.png" alt="탐라는 전기차" /></h2>
                <div className="link">
                    <ul>
                        <li><Link to={'/'} onClick={()=>onUp(true)}>탐라는 전기차</Link></li>
                        <li><Link to={'/evchaging'} onClick={()=>onUp(false)}>전기차 충전소 위치</Link></li>
                        <li><Link to={'/news'} onClick={()=>onUp(false)}>JEJU 전기차 관련 소식</Link></li>
                        <li><Link to={'/terms'} onClick={()=>onUp(false)}>이용약관</Link></li>
                        <li><Link to={'/userinfo'} onClick={()=>onUp(false)}>개인정보처리방침</Link></li>
                    </ul>
                </div>
                <p>COPYRIGHT ⓒ All rights RESERVED.</p>

            </div>
        </FooterWrap>
    );
};

export default Footer;
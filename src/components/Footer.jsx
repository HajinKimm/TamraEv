import React from 'react';
import { Link } from 'react-router-dom';
import { FooterWrap } from '../styled/TamraStyled';

const Footer = () => {
    const onUp=()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <FooterWrap>
            <div className="inner">
                <h2><img src="./images/logo.png" alt="탐라는 전기차" /></h2>
                <div className="link">
                    <ul>
                        <li><Link to={'/'} onClick={onUp}>탐라는 전기차</Link></li>
                        <li><Link to={'/evchaging'}>전기차 충전소 위치</Link></li>
                        <li><Link to={'/news'}>JEJU 전기차 관련 소식</Link></li>
                        <li><Link to={'/terms'}>이용약관</Link></li>
                        <li><Link to={'/userinfo'}>개인정보처리방침</Link></li>
                    </ul>
                </div>
                <p>COPYRIGHT ⓒ All rights RESERVED.</p>

            </div>
        </FooterWrap>
    );
};

export default Footer;
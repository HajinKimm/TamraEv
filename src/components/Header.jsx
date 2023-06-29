import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../styled/TamraStyled';
import MenuSwiper from './MenuSwiper';


const navList = [
    { id: 1, path: "", title: "HOME" },
    { id: 2, path: "ev", title: "탐라는 전기차" },
    { id: 3, path: "evchaging", title: "전기차 충전소 위치" },
    { id: 4, path: "news", title: "JEJU 전기차 관련 소식" },
]

const Header = ({isOnOff, setIsOnOff}) => {
    const [navBar, setNavBar] = useState(false)
    const navigate = useNavigate()
    return (
        <HeaderContainer>
            <div className="header">
                <div className="inner">
                    <h1 onClick={()=>{navigate('/') , setIsOnOff(true)}}><img src={`${isOnOff?"./images/logo.png":"./images/logo_b.png"}`} alt="탐라는 전기차" /></h1>
                    <p className='allMenu' onClick={() =>{setNavBar(true)}}><i className='xi-bars' style={{color:`${isOnOff?'#fff':'#000'}`}}></i></p>
                </div>
                <div className="navBarWrap">
                    <div className={`${navBar ? 'bg' : ''}`} onClick={() =>{setNavBar(false)}}></div>
                    <nav className={navBar ? 'on' : ''}>
                        <div className='navLeftWrap'>
                            <MenuSwiper/>
                        </div>
                        <div className="navRightWrap">
                            <span onClick={() =>{setNavBar(false)}}><i className='xi-close'></i></span>
                            <ul className="gnb">
                                {navList.map(item => <li key={item.id}><Link to={`/${item.path}`} onClick={() =>{setNavBar(false), item.title === "HOME"?setIsOnOff(true):setIsOnOff(false)}}>{item.title}</Link></li>)}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
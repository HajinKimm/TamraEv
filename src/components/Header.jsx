import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../styled/TamraStyled';


const navList = [
    { id: 1, path: "", title: "HOME" },
    { id: 2, path: "ev", title: "탐라는 전기차" },
    { id: 3, path: "evchaging", title: "전기차 충전소 위치" },
    { id: 4, path: "news", title: "JEJU 전기차 관련 소식" },
]

const Header = () => {
    const [navBar, setNavBar] = useState(false)
    const [currentPath, setCurrentPath] = useState(1)
    const navigate = useNavigate()
    const onToggle = (nav, id) => {
        setNavBar(nav)
        setCurrentPath(navList.find(item=>item.id===id).id)
    }
    return (
        <HeaderContainer>
            <div className="header">
                <div className="inner">
                    {/* <h1 onClick={()=>{navigate('/') , setCurrentPath(1)}}><img src={`${currentPath===1?"./images/logo.png":"./images/logo_b.png"}`} alt="탐라는 전기차" /></h1> */}
                    <h1 onClick={()=>{navigate('/') , setCurrentPath(1)}}><img src={`${currentPath===1?"./images/logo_b.png":"./images/logo_b.png"}`} alt="탐라는 전기차" /></h1>
                    <p className='allMenu' onClick={() => onToggle(true,1)}><i className='xi-bars' style={{color:`${currentPath===1?'#000':'#000'}`}}></i></p>
                </div>
                <div className="navBarWrap">
                    <div className={`${navBar ? 'bg' : ''}`} onClick={() => onToggle(false,1)}></div>
                    <nav className={navBar ? 'on' : ''}>
                        <div className='navLeftWrap'>
                            <img src="./images/gnb_slider_1.jpg" alt="전기차" />
                        </div>
                        <div className="navRightWrap">
                            <span onClick={() => onToggle(false,1)}><i className='xi-close'></i></span>
                            <ul className="gnb">
                                {navList.map(item => <li key={item.id}><Link to={`/${item.path}`} onClick={() => onToggle(false,item.id)}>{item.title}</Link></li>)}
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </HeaderContainer>
    );
};

export default Header;
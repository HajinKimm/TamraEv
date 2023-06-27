import React, { useState } from 'react';
import { HeaderBox } from '../styled/TamraStyled';
import { Outlet } from 'react-router-dom';


const navMenuList = [
    {id:1, menu: "home", title:"Home"},
    {id:1, menu: "ev", title:"탐라는 전기차"},
    {id:1, menu: "evcharging", title:"전기차 충전소 위치"},
    {id:1, menu: "news", title:"JEJU 전기차 관련 소식"},
]

const Header = () => {
   const [navBar,setNavBar] = useState(false)
   const [menu, setMenu] = useState(navMenuList)
   const onToggle = (nav)=>{
    setNavBar(nav)
   }
    return (
        <HeaderBox>
            <div className="inner">
                <h1><img src="./images/logo.png" alt="탐라는 전기차" /></h1>
                <p className='allMenu' onClick={()=>onToggle(true)}><i className='xi-bars'></i></p>
            </div>
            
            <Outlet />
        </HeaderBox>
    );
};

export default Header;
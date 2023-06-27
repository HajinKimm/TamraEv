// 최상단 레이아웃
// 상단로고, 메뉴바 


import React from 'react';
import { Wrap } from '../styled/TamraStyled';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <Wrap>
            <div className='header'>
                <div className="inner">
                    <h1><Link to={'/'}><img src="./images/logo.png" alt="" /></Link></h1>
                    <i className='xi-bars'></i>
                </div>
            </div>
        </Wrap>
    );
};

export default Layout;
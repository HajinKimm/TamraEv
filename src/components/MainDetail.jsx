import React, { useState } from 'react';
import { PopupWrap } from '../styled/TamraStyled';
import PopupImgSwiper from './PopupImgSwiper';

const MainDetail = ({onlike, clickData, onPopupClose}) => {
    const {id,img,coverImg ,MainTitle,category,like,hashTag, islike} = clickData
    const filterTag = hashTag.split('#').filter((item,idx)=>idx !== 0)

    return (
        <PopupWrap>
            <div className="bg" onClick={onPopupClose}></div>
            <div className="popup">
                <div className="media_area">
                    <PopupImgSwiper img={img} MainTitle={MainTitle}/>
                </div>
                <div className='content_area'>
                    <button onClick={onPopupClose}><i className='xi-close'></i></button>
                    <h2>{category}</h2>
                    <h3>{MainTitle}</h3>
                    <p className='likes' onClick={()=>onlike(id)} style={{cursor:'pointer'}}><i className={islike?'xi-heart':'xi-heart-o'}></i><span>{like}</span></p>
                    <p className='tags'>{filterTag.map((item,idx)=><span key={idx}>#{item}</span>)}</p>
                    <div className='share'>
                        <div className="shartext">
                            <i className='xi-share-alt'></i>
                            <span>공유하기</span>
                        </div>
                        <div className='img'>
                            <img src="./images/icon_blog.png" alt="" />
                            <img src="./images/icon_kakao.png" alt="" />
                            <img src="./images/icon_facebook.png" alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </PopupWrap>
    );
};

export default MainDetail;
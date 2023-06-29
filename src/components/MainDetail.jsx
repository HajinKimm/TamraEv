import React, { useEffect, useState } from 'react';
import { PopupWrap } from '../styled/TamraStyled';
import PopupImgSwiper from './PopupImgSwiper';

const MainDetail = ({ clickData, onPopupClose, setData, data}) => {
    const {id,img,coverImg ,MainTitle,category,like,hashTag, islike} = clickData
    const filterTag = hashTag.split('#').filter((item,idx)=>idx !== 0)
    //MainDetail 좋아요
    const [clickLike,setClickLike] = useState(like)
    const [heart, setHeart] = useState(false)

    const onlike=(id)=>{
        setData(data.map(item=>item.id===id?{...item,islike:true, like:item.like+1}:item))
        setClickLike(clickLike+1)
        setHeart(true)
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setHeart (false)
        },300)
        return(()=>{
            clearInterval(timer)   
        })
    },[heart])
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
                    <p className='likes' onClick={()=>onlike(id)} style={{cursor:'pointer'}}>
                        { !heart &&<i className='xi-heart-o'></i> }
                        { heart && <i className='xi-heart'></i> }
                        {/* <i className={islike?'xi-heart':'xi-heart-o'}></i> */}
                        
                        <span>{clickLike}</span></p>
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
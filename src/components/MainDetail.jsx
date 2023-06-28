import React from 'react';
import { PopupWrap } from '../styled/TamraStyled';

const MainDetail = ({clickData, onPopupClose}) => {
    const {id,img,coverImg ,MainTitle,category,like,hashTag} = clickData
    const filterTag = hashTag.split('#').filter((item,idx)=>idx !== 0)
    // console.log(filterTag.filter((item,idx)=>idx !== 0).map(item=>'#'+item))
    return (
        <PopupWrap>
            <div className="bg" onClick={onPopupClose}></div>
            <div className="popup">
                <div className="media_area">
                    <img src={coverImg} alt={MainTitle} />
                </div>
                <div className='content_area'>
                    <button onClick={onPopupClose}><i className='xi-close'></i></button>
                    <h2>{category}</h2>
                    <h3>{MainTitle}</h3>
                    <p className='likes'><i className='xi-heart-o'></i><span>{like}</span></p>
                    <p className='tags'>{filterTag.map(item=><span>#{item}</span>)}</p>
                    <p className='share'>
                        <div className="text">
                            <i className='xi-share-alt'></i>
                            <span>공유하기</span>
                        </div>
                        <div className='img'>
                            <img src="./images/icon_blog.png" alt="" />
                            <img src="./images/icon_kakao.png" alt="" />
                            <img src="./images/icon_facebook.png" alt="" />
                        </div>
                        
                    </p>
                </div>
            </div>
        </PopupWrap>
    );
};

export default MainDetail;
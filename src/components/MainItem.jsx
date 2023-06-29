import React, { useState } from 'react';
import { Posts } from '../styled/TamraStyled';
import MainDetail from './MainDetail';

const MainItem = ({data, onlike}) => {
    
    const [popup, setPopup] = useState(false)
    const [clickData, setClickData] = useState([])
    const onPopup =(id)=>{
        setClickData(data.find(item=>item.id===id))
        setPopup(true)
    }
    const onPopupClose = ()=>{
        setPopup(false)
    }
    return (
        <Posts>
            <div className='postsWrap'>
                {data.map(item=><div key={item.id} onClick={()=>onPopup(item.id)}><img src={item.coverImg} alt={item.MainTitle} /></div>)}
            </div>
            {popup && <MainDetail onlike={onlike} clickData={clickData} onPopupClose={onPopupClose}/>}
        </Posts>
    );
};

export default MainItem;
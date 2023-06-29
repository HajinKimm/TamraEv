import React, { useState } from 'react';
import { Posts } from '../styled/TamraStyled';
import MainDetail from './MainDetail';

const MainItem = ({filterPosts, data, setData}) => {
    
    const [popup, setPopup] = useState(false)
    const [clickData, setClickData] = useState([])
    const onPopup =(id)=>{
        setClickData(filterPosts.find(item=>item.id===id))
        setPopup(true)
    }
    const onPopupClose = ()=>{
        setPopup(false)
    }
    return (
        <Posts>
            <div className='postsWrap'>
                {filterPosts.map(item=><div key={item.id} onClick={()=>onPopup(item.id)}><img src={item.coverImg} alt={item.MainTitle} /></div>)}
            </div>
            {popup && <MainDetail data={data} clickData={clickData} onPopupClose={onPopupClose} setData={setData}/>}
        </Posts>
    );
};

export default MainItem;
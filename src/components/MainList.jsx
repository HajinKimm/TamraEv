import React, { useCallback, useEffect, useState } from 'react';
import { Content } from '../styled/TamraStyled';
import { useAxios } from '../hook/useAxios';
import MainItem from './MainItem';
import { useNavigate } from 'react-router-dom';

const categotyList = [
    {id:1, title:"인기 콘텐츠" , category:"popular", isOn:true},
    {id:2, title:"전기차 소개" , category:"evInfo", isOn:false},
    {id:3, title:"슬기로운 전기차 여행" , category:"evTravel", isOn:false},
    {id:4, title:"충전 및 문제 대처법" , category:"manual", isOn:false},
    {id:5, title:"FAQ" , category:"faq", isOn:false},
    {id:6, title:"제주 전기차 충전소 찾기" , category:"evCharging", isOn:false},
    {id:7, title:"제주 전기차 뉴스" , category:"evNews", isOn:false},
]
const MainList = () => {
    const {stateList: dataList, state : data, setState: setData, loading, error} = useAxios(`https://gist.githubusercontent.com/HajinKimm/8b219f293cb8bd72dff08399ab86cf75/raw/257feb95c7d0dba6373efe72a6e62d09e7943af5/Tamra.json`)
    // const [searchData, setSearchData] = useState(data)
    
    const [searchBtn, setSearchBtn] = useState(false)
    const [text,setText] = useState('')
    const [currentCategory, setCurrentCategory] = useState(categotyList)
    const [currentPosts, setCurrentPosts] = useState(6)
    const filterPosts = data.slice(0, currentPosts)
    // console.log(data.slice(0, currentPosts).map(itme=>(...item, item.isLikes:false)))
    const navigate = useNavigate()
    //검색함수
    const onsubmit =useCallback((e)=>{
        e.preventDefault()
        if(!text) return
        setData(dataList.filter(item=>item.MainTitle.includes(text)))
        setText('')
    },[text])

    //카테고리 클릭
    const onCategoty =useCallback((title)=>{
        setCurrentPosts(6)
        if(title==="인기 콘텐츠"){
            setData(dataList)
            setCurrentCategory(currentCategory.map(item=>item.title===title?{...item, isOn:true}:{...item, isOn:false}))
        }else if(title==="제주 전기차 뉴스"){
            navigate('/news')
        }else{
            setData(dataList.filter(item=>item.category===title))
            setCurrentCategory(currentCategory.map(item=>item.title===title?{...item, isOn:true}:{...item, isOn:false}))
        }
    },[data])

    //더보기 클릭
    const onAddPosts=()=>{
        setCurrentPosts(currentPosts+6)
    }

    return (
        <Content>
            <div className="categoryMenu">
                <ul>
                    {
                        currentCategory.map(item=><li key={item.id} className={item.isOn?'on':''} onClick={()=>onCategoty(item.title)}>{item.title}</li>)
                    }
                </ul>
                <span className='slideBar'></span>
                <button onClick={()=>setSearchBtn(!searchBtn)}><i className={searchBtn?'xi-close':'xi-search'}></i><span>{searchBtn?'닫기':'검색'}</span></button>
            </div>
            <form className='searchBox' style={searchBtn?{display:'block'}:{display:'none'}} onSubmit={onsubmit}>
                <div className="inputBox">
                    <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
                    <button className='btnClear' type='button' onClick={()=>setText('')}></button>
                </div>
                <button className='btnSearch' type='submit'></button>
            </form>
            <MainItem data={filterPosts}/>
            <p className='plusBtnWrap'>
            <button onClick={onAddPosts} className='plusBtn'><i className='xi-plus'></i><span>더보기</span></button>

            </p>
        </Content>
    );
};

export default MainList;
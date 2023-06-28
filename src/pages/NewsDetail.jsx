import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { NewsDetailWrap } from '../styled/TamraStyled';
import { useAxios } from '../hook/useAxios';

const NewsDetail = () => {
    const { state : newsData} = useAxios('https://gist.githubusercontent.com/HajinKimm/da271481d15913d94a33ed954d90716b/raw/38771bfbb24ea89e627b8e226895561001104b4c/TamraNews.json')

    const navigate = useNavigate()
    const {newsID} = useParams()
    const pageNum = Number(newsID)
    // const currentNews = newsData.find(item=item.id===pageNum)
    console.log(newsData.filter(item=>item.id===pageNum).map(item=>item))
           
    return (
        <NewsDetailWrap>
            <div className="inner">
                {
                    newsData.filter(item=>item.id===pageNum).map(item=><div className='detail'>
                        <h3>{item.title}</h3>
                        <span>{item.date}</span>
                        <img src={item.img[0]} alt="" />
                        <p>{item.desc}</p>
                    </div>)
                }
                {
                    pageNum === 1 ?
                    <button disabled >이전글</button> : <button onClick={()=>navigate(`/news/${pageNum-1}`)}>이전글</button> 

                }
                <button onClick={()=>navigate('/news')} >목록보기</button>
                {
                    pageNum === 5 ?
                    <button disabled >다음글</button> : <button onClick={()=>navigate(`/news/${pageNum+1}`)}>다음글</button>
                }

            </div>
        </NewsDetailWrap>
    );
};

export default NewsDetail;
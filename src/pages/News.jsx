import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NewsWrap } from '../styled/TamraStyled';
import { AiOutlineRight ,AiOutlineLeft} from "react-icons/ai";
import { useAxios } from '../hook/useAxios';



const News = () => {
    const { state : newsData} = useAxios('https://gist.githubusercontent.com/HajinKimm/da271481d15913d94a33ed954d90716b/raw/38771bfbb24ea89e627b8e226895561001104b4c/TamraNews.json')
    const newsList = [...newsData].reverse();

    const [currentPage, setCurrenPage] = useState(1)
    const pagePosts = 4
    const firstPost = (currentPage-1) * pagePosts
    const lastPost = firstPost + pagePosts
    const lastPageNum = Math.ceil(newsList.length /pagePosts)
    const perPosts = newsList.slice(firstPost,lastPost)
    
    const pageNum = [...Array(lastPageNum).keys()].map(item=>item+1)
    const onPrevPage = ()=>{
        if(currentPage>1){
            
            setCurrenPage(currentPage-1)
        }
    }
    const onNextPage = ()=>{
        if(currentPage<lastPageNum){
            setCurrenPage(currentPage+1)
            
        }

    }
     return (
        <NewsWrap>
            <div  className='inner'>
                <table>
                    <colgroup>
                        <col className='w1'/>
                        <col className='w2'/>
                        <col className='w3'/>
                        <col className='w4'/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th>NO</th>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                    <tbody>
                        {perPosts.map(item=><tr key={item.id}>
                            <td>{item.id}</td>
                            <td><Link to={`/news/${item.id}`}>{item.title}</Link></td>
                            <td>{item.date}</td>
                            <td>{item.hits}</td>
                            </tr>)}

                    </tbody>
                </table>
                <p className='paging'>
                <i onClick={onPrevPage} ><AiOutlineLeft/></i>
                    {pageNum.map(item=><a href='#' onClick={()=>setCurrenPage(item)} key={item} style={item===currentPage?{color:"#fff", background:"pink",border:'none'}:{}}>{item}</a>)}
                    <i onClick={onNextPage}><AiOutlineRight/></i>
                </p>
            </div>
            {/* <NewsDetail/> */}
        </NewsWrap>
    );
};

export default News;
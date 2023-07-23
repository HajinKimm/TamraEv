# 탐라는 전기차(웹사이트) 구현
- '탐라는 전기차' 사이트 [React JS]로 구현
---
## 1. 파일구조
### 1.1 작업방식
- Vite [ React JS ] 로 작성
- styled components 
- router 
- hooks (사용자 정의 훅)
### 1.2 파일구조
<img src="./md_image/file1.png">
    
---
## 2. 화면출력
- 결과물
<img src="./md_image/output.gif">
---

## 3. code 설명
- 게시글 제목과 같은 단어를 찾아 검색가능하도록 구현
    ```js
    const onsubmit =useCallback((e)=>{
        setData(dataList.filter(item=>item.MainTitle.includes(text)))
    },[text])
    ```
- 카테고리에 맞는 게시물만 출력 
    ```js
    const onCategoty =useCallback((title)=>{
        setCurrentPosts(6)
        if(title==="인기 콘텐츠"){
            setData(dataList)
            setCurrentCategory(currentCategory.map(item=>item.title===title?{...item, isOn:true}:{...item, isOn:false}))
        }else if(title==="제주 전기차 뉴스"){
            navigate('/news')
            setIsOnOff(2)
        }else if(title==="제주 전기차 충전소 찾기"){
            navigate('/evchaging')
            setIsOnOff(2)
        }else{
            setData(dataList.filter(item=>item.category===title))
            setCurrentCategory(currentCategory.map(item=>item.title===title?{...item, isOn:true}:{...item, isOn:false}))
        }
    },[data])

    ```
- [좋아요 버튼] 숫자증가
    ```js
    const onlike=(id)=>{
        setData(data.map(item=>item.id===id?{...item,islike:true, like:item.like+1}:item))
        setClickLike(clickLike+1)
        setHeart(true)
    }
    ```
- [더보기 버튼] 클릭시 게시물이 6개씩 추가로 출력
    ```js
    const [currentPosts, setCurrentPosts] = useState(6)
    const filterPosts = data.slice(0, currentPosts)

    const onAddPosts=()=>{
        setCurrentPosts(currentPosts+6)
    }
    ```

- paging 구현
    ```js
    const [currentPage, setCurrenPage] = useState(1)
    const pagePosts = 4
    const firstPost = (currentPage-1) * pagePosts
    const lastPost = firstPost + pagePosts
    const lastPageNum = Math.ceil(newsList.length /pagePosts)
    const perPosts = newsList.slice(firstPost,lastPost)
    
    const pageNum = [...Array(lastPageNum).keys()].map(item=>item+1)
    const onPrevPage = ()=>{
        if(currentPage>1) setCurrenPage(currentPage-1)
    }
    const onNextPage = ()=>{
        if(currentPage<lastPageNum) setCurrenPage(currentPage+1)
    }
    ```
- hooks - axios를 사용하여 비동기처리
    ```js
    import axios from 'axios';
    import React, { useEffect, useState } from 'react';

    export const useAxios = (url=[]) => {
        const [state, setState] = useState([]) 
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(null)
        const [stateList, setStateList] = useState([])

        useEffect(()=>{
            axios.get(url)
                .then(res=>{
                    setStateList(res.data)
                    setState(res.data)
                    setLoading(true)
                    setError(null)
                }).catch(error=>{
                    setStateList([])
                    setState([])
                    setLoading(false)
                    setError('error발생')
                })
        },[url])

        return {stateList, state, setState, loading,error}
    };
    ```

import { keyframes, styled } from "styled-components";
const mainColor="#007fa8"
const subColor='#e1d6b9'

const inner = {
    width: '1200px',
    margin: "auto",
    position: 'relative',
    boxSizing: 'border-box'
}

export const HeaderContainer = styled.div`
    .header{
        .inner{
            ${inner}
            h1{
                cursor: pointer;
                z-index: 1;
                position: absolute;
                top: 30px;
                left: 0px;
            }   
            p{
                z-index: 1;
                position: absolute;
                top: 30px;
                right: 0px;
                i{
                    font-size: 35px;
                }
            }
        }
        .navBarWrap{
            .bg{
                    position: fixed; 
                    width: 100%; 
                    height: 100%; 
                    left: 0; 
                    top: 0; 
                    background-color: #000; 
                    opacity: 0.7;
                    z-index: 100;
                }
            nav{
                width: 100%;
                height: 0;
                overflow: hidden;
                display: flex;
                position: fixed;
                background: #fff;
                z-index: 200;
                transition: 0.5s;
                &.on{
                    height: 700px;
                }
                
                .navLeftWrap{
                    width: 50%;
                    img{
                        width: 100%;
                    }
                }
                .navRightWrap{
                    
                    span{
                        display: block;
                        margin: 30px 0px 0px 560px;
                        i{
                            font-size: 35px;
                        }
                    }
                    .gnb{
                        width: 50%;
                        padding: 30px 0px 0px 150px;
                        li{
                            font-size: 35px;
                            padding: 40px 30px;
                            width: 390px;
                            border-bottom: 1px solid #ccc;
                            position: relative;
                            &:last-child{
                                border-bottom:none;
                            }
                            &.on, &:hover{
                                &::after{
                                    display: block;
                                    content: "";
                                    position: absolute;
                                    top: 50px;
                                    left: 5px;
                                    width: 10px;
                                    height: 10px;
                                    background: ${mainColor};
                                    border-radius: 50%;
                                }
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }
    }
`
export const Main = styled.div`
    .inner{
        ${inner}
        .title{
            margin: 20px 0px 40px;
            text-align: center;
            font-size: 42px;
            font-weight: 700;
        }
    }
`

export const MainVisual = styled.div`
    position: relative;
    overflow: hidden;
    img{
        transform: scale(1.2);
    }
    .text{
        position: absolute;
        top: 170px;
        left: 360px;
        color: #fff;
        h2{
            font-size: 52px;
            font-weight: 700;
            margin-bottom: 10px;
        }
        p{
            font-size: 22px;
        }
    }
    .arrow{
        z-index: 50;
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 32px;
        height: 20px;
        margin-left: -16px;
        background: url(../public/images/main_slider_arrow.png) no-repeat;
        &::before, &::after{
            content: '';
            position: absolute;
            bottom: 0;
            display: block;
            width: 1920px;
            height: 20px;
            background: #fff;
        }
        &::before{
            left: 100%;

        }
        &::after{
            right: 100%;
        }
    }
`

export const Content = styled.div`
    .categoryMenu{
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
    
        ul{
            width: 90%;
            display: flex;
            justify-content: space-between;
            padding-left: 10px;
            li{
                padding: 10px 0px;
                line-height: 40px;
                cursor: pointer;
                &.on{
                    border-bottom: 3px solid ${mainColor};
                }
            }
        }
        
        
        span{
        /* border-bottom: 3px solid ${mainColor}; */
        }
        button{
            border-radius: 30px;
            background: ${subColor};
            padding: 10px 15px;
            margin: 10px 0px;
            border: none;
            i{
                font-size: 20px;
                vertical-align: middle;
            }
        }

    }
    .searchBox{
        z-index: 10;
        position: relative;
        left: 0;
        top: 100%;
        width: 100%;
        font-size: 0;
        text-align: center;
        padding: 45px 0;
        background:${subColor};
        .inputBox{
            position: relative;
            display: inline-block;
            input{
                width: 640px;
                height: 60px;
                font-family: 'ht_r';
                font-size: 21px;
                padding: 0 40px 0 24px;
                outline: 0;
                border: none;
            }
            .btnClear{
                position: absolute;
                right: 25px;
                top: 50%;
                width: 12px;
                height: 12px;
                font-size: 0;
                margin-top: -6px;
                background: url(../public/images/btn_clear.png) no-repeat;
                border: none;
            }
        }
        .btnSearch{
            display: inline-block;
            width: 60px;
            height: 60px;
            font-size: 0;
            vertical-align: top;
            background:${mainColor} url(../public/images/btn_search_result.png) center center no-repeat;
            border:none;
        }
    }
    .plusBtnWrap{
        text-align: center;
        margin-top: 30px;
        margin-bottom: 80px;
        .plusBtn{
            background: transparent;
            border: none;
            i{
                display: block;
                font-size: 40px;
                margin-bottom: 5px;
            }
            span{
                font-size: 16px;
                font-weight: 600;
            }
        }
    }
    
`

export const Posts = styled.div`
    .postsWrap{
        margin-top: 40px;
        display: flex;
        flex-wrap: wrap; 
        /* justify-content: space-between; */
        div{
            margin-right: 30px;
            margin-bottom: 20px;
            width: 380px;
            cursor: pointer;
            img{
                width:100%;

            }
            &:nth-child(3n){
                margin-right: 0;
            }
        }
    }
`

export const PopupWrap = styled.div`
    .bg{
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: #000;
        opacity: 0.7;
        z-index: 100;
    }
    .popup{
        display: flex;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 1200px;
        height: 720px;
        z-index: 200;
        background: #fff;
        .media_area{
            width: 720px;
            height: 100%;
            box-sizing: border-box;
            img{
                /* margin: auto; */
                width: 580px;
                
            }
        }
        .content_area{
            background: ${subColor};
            width: 480px;
            height: 100%;
            position: relative;
            padding: 80px;
            box-sizing: border-box;
            button{
                position: absolute;
                top: 20px;
                right: 20px;
                border: none;
                background: transparent;
                i{
                    font-size: 30px;
                }
            }
            h2{
                color: ${mainColor};
                font-size: 21px;
            }
            h3{
                font-size: 40px;
                font-weight: 700;
                margin: 20px 0px 40px ;
                line-height: 1.2;
                
            }
            .likes{
                margin-bottom: 80px;
                i{
                    font-size: 30px;
                    vertical-align: middle;
                }
                span{
                    padding-left: 15px;
                }
            }
            .tags{
                margin-bottom: 20px;
                span{
                    display: inline-block;
                    margin-right: 20px;
                }

            }
            .share{
                border-top: 1px solid #ccc;
                padding-top: 20px;
                display: flex;
                justify-content:space-between;
                .text{
                    margin-top: 15px;
                }
                .img{
                    img{
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`

export const FooterWrap = styled.div`
    background: #303030;
    padding: 65px;
    color: #fff;
.inner{
${inner}
    h2{
        text-align: center;
        img{

        }
    }
    .link{
        ul{
            margin-left: 220px;
            margin-top: 30px;
            width: 750px;
            text-align: center;
            display: flex;
            justify-content: center;
            position: relative;
            li{
                margin-right: 30px;
                position: relative;
                &::after{
                    content: "";
                    display: block;
                    position: absolute;
                    width: 4px; height: 4px;
                    background: #999;
                    top: 50%;
                    right: -20px;
                    transform: translateY(-50%);
                    border-radius: 50%;
                }
                a{
                    color: #999;
                }
                &:last-child{
                    margin-right: 0;
                    &::after{
                        display: none;
                    }
                }
            }
        
            &::after, &::before{
                content: "";
                display: block;
                position: absolute;
                top: 13px;
                height: 1px;
                width: 1920px;
                background: #999;
            }
            &::before{
                right: 100%;
            }
            &::after{
                left: 100%;
            }
        }
    }
    p{
        color: #999;
        text-align:center;
        margin-top: 40px;
        font-size: 13px;
    }
}
`

export const NewsLayoutWrap = styled.div`
    h2{
        font-size: 40px;
        line-height: 68px;
        font-family: 'hh_r';
        text-align: center;
    }
    .newsP{
        font-size: 18px;
        line-height: 30px;
        color: #666;
        text-align: center;
        margin-bottom: 50px;
    }
`


export const NewsWrap = styled.div`
.inner{
    ${inner}
    table{
        margin-bottom: 70px;
        width: 100%;
        .w1{width:10%}
        .w2{width:auto}
        .w3{width:30%}
        .w4{width:10%}
        tr{
            th{
                height: 46px;
                line-height: 46px;
                color: #000;
                border-bottom: 1px solid #000;
                border-top: 1px solid #000;
                font-size: 16px;
                font-weight: 700;
            }
            td{
                height: 46px;
                line-height: 46px;
                color: #000;
                font-size: 16px;
                border-bottom: 1px solid #999;
                text-align: center;
                padding: 20px 0px;
                &:nth-child(2){
                    text-align: start;
                    font-weight: 700;
                }
                
            }
            &:last-child{
            border-bottom: 1px solid #000;
            }

        }
    }
    .paging{
        a{
            line-height: 1.3;
        }

        
        i, a{
            vertical-align: middle;
            cursor: pointer;
            border: 1px solid #ccc;
            font-size: 20px;
            box-sizing: border-box;
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: 10px;
        }
    }
}
`
export const NewsDetailWrap = styled.div`
.inner{
    ${inner}
    h3{
        font-size: 30px;
        text-align: center;
        border-top: 1px solid #999;
        padding-top: 30px;
    }
    span{
        display: block;
        text-align: center;
        padding-bottom: 30px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 50px;
    }
    img{
        width: 1100px;
    }
    p{
        margin: 50px 0px;
    }
    button{
        
    }
}
`

export const NotFoundWrap = styled.div`
    .inner{
        ${inner}
        padding-top:100px;
        padding-bottom: 200px;
        h2{
            border-top: 1px solid #ccc;
            padding-top: 150px;
            text-align: center;
            font-weight: 700;
            font-size: 40px;
            margin-bottom: 30px;
        }
        p{
            font-size: 20px;
            text-align: center;
            button{
                /* display: block; */
                border: none;
                background: #000;
                color: #fff;
                font-size: 18px;
                padding: 10px 30px;
                margin-top: 50px;
            }
        }
    }
`
import { keyframes, styled } from "styled-components";

const inner = {
    width:'1200px',
    margin:"auto",
    position:'relative',
}

const menuframe = keyframes`
    0%{opacity:0}
    25%{opacity:1}
    30%{opacity:0}
    100%{opacity:0}
`

export const Wrap = styled.div`
    width: 100%;
    background: #dcdcdc;
    h2{
        font-size: 50px;
    }



`
export const Visual = styled.section`
    background: pink;
    img{
    }

`
export const Contaniner = styled.div`
    background: #999;
`
export const HeaderBox = styled.div`
    background: tomato;
    .inner{
            ${inner}
            border: 1px solid #000;
            display: flex;
            justify-content: space-between;
            padding: 30px;
        }
        h1{
            img{

            }
        }
        .allMenu{
            i{
                font-size: 40px; 
                color: #fff;
            }
        }
`
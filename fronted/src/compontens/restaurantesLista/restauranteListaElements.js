import styled from "styled-components";
import  {Link as linkR} from 'react-router-dom';

export const ListContainer = styled.div`
    border : 1px solid #01060;
    width : 700px;
    margin : 15px auto;
    display : grid;
`
export const ListCard = styled.div` 
    widht : 100%;
    height : 80px;
    margin : 5px 0;
    border-radius : 10px;
    border : 1px solid #D1D1D1;
    box-shadow: 1px 2px 5px 1px #D5D5D5;
    display : grid;
    grid-template-columns : 1fr 1fr 1fr 1fr ;
    grid-template-areas : 'info info info btn'

`

export const ListInfo = styled.div`
    color : #010606;
    padding : 1rem;
    display : block;
` 

export const ListBtn = styled(linkR)`
   background : #4c6bee;
   color : white;
   font-weight : bold;
   width : 100px;
   height : 25px; 
   text-align : center;
   justify-content : center;
   align-items : center;
   display : flex;
   grid-area : btn;
   padding : 10px 20px;
   margin-top : 17px;
   border-radius : 10px;
   box-shadow: 1px 2px 5px 1px #D5D5D5;

    &:hover{
        background : #fff;
        color : #4c6bee;
        border :1px solid #4c6bee;
        transition : all .2s ease-in-out;
    }
`

export const ListInfoName = styled.h4`
    color : #010606;
    font-weight : bold;
    font-size : 22px;
`

export const ListInfoAdress = styled.p`
    color : #010606;
`
import styled from "styled-components";
import {Link as links} from 'react-scroll';
import {Link as linkR} from 'react-router-dom';

export const Nav = styled.nav`
    background : #4c6bee;
    display : flex;
    justify-content : center;
    font-size : 1rem;
    position : sticky;
    top : 0;
    z-indez : 10;

    @media screen and (max-width: 960px){
        transition : .8s all ease ;
    }
`
export const NavbarLogo = styled(linkR)`
    color : #fff;
    justify-self : flex-start;
    cursor : pointer;
    display : flex;
    align-items : center;
    margin-left : 15px;
    font-weight : bold;
    text-decoration : none;
    font-size : 1.3rem;

    @media screen and (max-width : 768px){
        margin : 0 auto;
    }

`

export const MobileIcon = styled.div`
    display : none;

    @media screen and (max-width : 768px){
        display : block;
        position : absolute;
        top : 0;
        right : 0;
        transform : translate(-100% , 60%);
        font-size : 1.3rem;
        cursor : pointer;
        color : #fff;
    }
`

export const NavbarContainer = styled.div` 
    display : flex;
    justify-content : space-betweeen;
    height : 60px;
    z-index : 1px;
    width : 100%;
    padding : 0 24px;

`
export const NavbarMenu = styled.ul` 
    display : flex;
    list-style : none;
    margin : 0 auto; 

    @media screen and (max-width : 768px ){
        display : none;
    }
`

export const NavbarItem = styled.li` 
    padding : 20px 24px;
    height : 80px;
    cursor : pointer;
    font-weight : 500;
`

export const NavbarLink = styled(links)` 
    color : #fff;
`

export const NavbarListRestaurants = styled(linkR)`
    color : #fff;
`


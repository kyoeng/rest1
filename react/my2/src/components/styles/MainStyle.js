import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const IndexMainContainer = styled.main`
    margin: 90px 0 0;
    @media screen and (max-width: 1024px) {
        margin: 50px 0 0;
    }
`


// index 메인 네비 버튼 부분 =============================
export const IdxMainCateContainer = styled.div`
    width: 1024px;
    height: 100px;
    margin: 30px auto 0;
    background-color: #87CEFA;
    border-radius: 50px;
    padding: 15px 50px;
    display: flex;
    @media screen and (max-width: 1024px) {
        width: 100%;
        height: 10vw;
        border-radius: 0;
        margin: 0;
    }
    @media screen and (max-width: 850px) {
        height: 20vw;
        flex-wrap: wrap;
        padding: 10px;
    }
`

export const IdxMainCateBox = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 10px;
    &:hover {
        box-shadow: 0 0 10px white;
    }
    @media screen and (max-width: 850px) {
        width: 50%;
        height: 50%;

    }
`

export const IdxMainCateImage = styled.img`
    display: block;
    width: 35px;
    height:35px;
    @media screen and (max-width: 850px) {
        width: 20px;
        height: 20px;
    }
`

export const IdxMainCateText = styled.span`
    width: 100px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    font-size: 1.4rem;
    color: white;
    @media screen and (max-width: 850px) {
        font-size: 1.2rem;
    }
`



// 축제 정보 부분 =============================
export const PartyContainer = styled.div`
    width: 1024px;
    margin: 100px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 50px 0 0;
    }
`

export const PartyTitleBox = styled.h3`
    width: 100%;
    height: 50px;
    position: relative;
    @media screen and (max-width: 800px) {
        height: 30px;
    }
`

export const PartyTitleLine = styled.div`
    width: 100%;
    height: 25px;
    border-bottom: 3px dashed #87CEFA;
    @media screen and (max-width: 800px) {
        height: 15px;
        border-bottom: 2px dashed #87CEFA;
    }
`

export const PartyTitleText = styled.span`
    width: 300px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: calc((100% - 300px) / 2);
    font-size: 2rem;
    color: #87CEFA;
    background-color: white;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        width: 200px;
        left: calc((100% - 200px) / 2);
        line-height: 30px;
        font-size: 1.6rem;
    }
`

export const PartyContentBox = styled.div`
    width: 100%;
    height: 200px;
    margin-top: 30px;
    position: relative;
    `

export const PartyContents = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 12px;
`

export const PartyContentValue = styled.div`
    width: 490px;
    height: 100%;
    display: flex;
    position: relative;
`

export const PartyContentData = styled.div`
    width: 350px;
    height: 100%;
`

export const PartyContentImg = styled.img`
    display: block;
    width: 140px;
    height: 100%;
`

export const PartyLink = styled(Link)`
    position: absolute;
    width: 100%;
    height: 100%;
    &:hover {
        box-shadow: 0 0 10px #87CEFA;
    }
`



// 추천 여행지 부분 =============================
export const RecommendContainer = styled.div`
    width: 1024px;
    margin: 100px auto 0;
    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 50px 0 0;
    }
`

export const RecommendTitle = styled.h3`
    width: 100%;
    height: 50px;
    position: relative;
    @media screen and (max-width: 800px) {
        height: 30px;
    }
`

export const RecommendTitleLine = styled.div`
    width: 100%;
    height: 25px;
    border-bottom: 3px dashed #87CEFA;
    @media screen and (max-width: 800px) {
        height: 15px;
        border-bottom: 2px dashed #87CEFA;
    }
`

export const RecommendTitleText = styled.span`
    width: 300px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 0;
    left: calc((100% - 300px) / 2);
    font-size: 2rem;
    color: #87CEFA;
    background-color: white;
    font-weight: bold;
    @media screen and (max-width: 800px) {
        width: 200px;
        left: calc((100% - 200px) / 2);
        line-height: 30px;
        font-size: 1.6rem;
    }
`

// 추천 여행지 지역명 박스
export const RecommendAreaBox = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 10px;
`


// 추천 여행지 컨텐츠 박스
export const ContentContainer = styled.div`
    width: 1024px;
    height: 600px;
    margin: 30px auto 0;
    display: flex;
    position: relative;
    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

// 추천 여행지 정보 박스
export const ContentBox = styled.div`
    width: 424px;
    height: 100%;
    border: 1px solid black;
    overflow: auto;
    @media screen and (max-width: 1024px) {
        width: 40%;
    }
    @media screen and (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
    }
`

// 추천 여행지 지도 박스
export const ContentMap = styled.div`
    width: 600px;
    height: 100%;
    visibility: visible;
    @media screen and (max-width: 1024px) {
        width: 60%;
    }
    @media screen and (max-width: 800px) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        visibility: hidden;
    }
`

// 지도 리스트 전환 버튼
export const BoxMapChangeBtn = styled.button`
    width: 100px;
    height: 30px;
    display: none;
    position: absolute;
    bottom: 20px;
    right: 20px;
    background-color: #87CEFA;
    color: white;
    z-index: 100;
    &:hover {
        cursor: pointer;
    }
    @media screen and (max-width: 800px) {
        display: block;
    }
`
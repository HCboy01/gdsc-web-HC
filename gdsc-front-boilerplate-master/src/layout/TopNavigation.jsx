import React from "react";
import styled from "styled-components";
import { COLORS } from "../components/Colors";
import { Link } from "react-router-dom";

import mypage from "../assets/nav/mypage.png";
import search from "../assets/nav/search.svg";


const TopNavigationWrapper = styled.div`
  display: flex;
  background-color: white;

  .app-name{
    font-size: 10px;
    color: ${COLORS.red};
  }

  .school-name{
    font-size: 25px;
  }

  .Topnavigation-name{
    display: block;
  }

  .Topnavigation-items{
    display: flex;
    margin-left: 10px;
  }

  .link-item {
    width: 10%;
    height: 100%;
    img{
      width 24px;
      height 24px;
    } 
  }
`;

const mypage1 = mypage;
const search1 = search;


const TopNavigation = () => {
    return(
        <TopNavigationWrapper>
          <div ClassName= "Topnavigation-name">
            <p className= "app-name" >에브리타임</p>
            <p className= "school-name">서울과기대</p>
          </div>
          
          <div ClassName= "Topnavigation-items">
          <Link className="link-item" to="/Mypage">
            <img src={mypage1} alt="마이페이지" />
          </Link>
          <Link className="link-item" to="/Search">
            <img src={search1} alt="검색페이지" />
          </Link>
          </div>

         
        </TopNavigationWrapper>
    )
}

export default TopNavigation 

//컨텐츠 컨테이너에 에브리타임을 따로 올리자 !! 병렬 문제 해결, 후에 드래그시 에브리 타임 사라지는 기능 구현하기!!
import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import { Link } from "react-router-dom";

import icon_google from "../../../assets/icon/google.svg";
import icon_google_black from "../../../assets/icon/google_black.svg";
import icon_school from "../../../assets/icon/school.svg";
import icon_notice from "../../../assets/icon/notice.svg";

const TopGuidebox = styled.div`
  display flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  .Topguide-items {
      width: 100%;
      height: 100%;
      display: block;
     
      img{
          width: 24px;
          height: 24px;
        }
  }
`;


const TopGuide = () => {
    
    const googleIcon = icon_google;
    const google_blackIcon = icon_google_black;
    const schoolIcon = icon_school;
    const noticeIcon = icon_notice;
    
    return(
        <TopGuidebox>
            <Link className = "Topguide-items" to ="https://gdsc.community.dev/seoul-national-university-of-science-and-technology/">
               <img src={googleIcon}/>
            </Link>
            <Link className = "Topguide-items" to ="https://www.google.com/">
               <img src={google_blackIcon}/>
            </Link>
            <Link className = "Topguide-items" to ="https://www.seoultech.ac.kr/index.jsp">
               <img src={schoolIcon}/>
            </Link>
            <Link className = "Topguide-items" to ="https://www.seoultech.ac.kr/life/sch/common/">
               <img src={noticeIcon}/>
            </Link>
        </TopGuidebox>
    );
};

export default TopGuide

//이렇게 하면 링크 안되니까 링크 따로 연결해주기 필요함. 또 가운데 정렬은 왜 안 될까? 다시 체크해보기.
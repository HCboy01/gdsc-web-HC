import React from "react";
import styled from "styled-components";
import { COLORS } from "../../../components/Colors";
import { Link } from "react-router-dom";
import { dummyMyboard } from "../../../components/dummyData";
import newIcon from "../../../assets/icon/new.svg";

import vectorRight from "../../../assets/vector/vectorRightRed.svg"

const MyBoardWrapper = styled.div`
  
  margin : 12px 16px;

  .MyBoard-Wrapper{
    margin: 25px 8px 0px;

    border: solid ${COLORS.grey_300};
    border-radius: 5px;
  }

  .MyBoard-titles{
    margin 12px 16px;
    display: block;
  }
  .title-name{
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  
  .link-seemore{
    display: flex;
    img{
      width: 10px;
      height: 10px;
      margin-left:4px;
    }
    p{
      color: ${COLORS.red};
      font-size: 12px;
    }
  }
  
  .seemore-text{

  }
  
  .MyBoard-title {
    display = flex;
    align-items: center;
    justify-content: space-between;
  }

  .MyBoard-pagetitle {
    display = block;
    height: 12px;
    margin-top: 12px;
  }

  .MyBoard-pagetitles{
    display = block;
  }
`;


const MyBoardBox = ({MyBoard_name}) => {
  const hasNewIcon = dummyMyboard.isNew?newIcon:''; 
  return(
    <MyBoardWrapper>
      <div className= "MyBoard-Wrapper">
        <div className = "MyBoard-titles">
          <div className = "title-name">
            <h2>즐겨찾기 게시판</h2>
            <Link className = "link-seemore" to= "/board">
              <p>더 보기</p>
              <img src = {vectorRight} ></img>
            </Link>
          </div>
          <div className="MyBoard-pagetitles">
            <MyBoard-pagetitle>
            {dummyMyboard.map((category, title) =>
              <h1 className= "board-title">{category}</h1>
              <p className= "board-content">{title}</p>
              <img className="new-icon" src={hasNewIcon}/>
            );
            }
            </MyBoard-pagetitle>          
          </div>  
            

          </div>
        </div>
      </div>
    </MyBoardWrapper>
  )
}

export default MyBoardBox;
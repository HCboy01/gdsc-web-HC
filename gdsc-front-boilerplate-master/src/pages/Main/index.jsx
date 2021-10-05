import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";
import TopNavigation from "../../layout/TopNavigation";
import TopGuide from "../Main/components/TopGuide";
import MyBoardBox from "./components/MyBoardbox";
import PopularBoardBox from "./components/PopularBoardbox";
import RealtimeBoardBox from"./components/RealtimeBoardbox";

const Index = () => {
    return (
        <div>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={1} />
            </div>
            <div ClassName="Top-navigation">
                <TopNavigation/>
            </div>
            <div ClassName="Top-Guide">
                <TopGuide/>
            </div>
            <div ClassName="My-Board">
                <MyBoardBox/>
            </div>
            <div className="Realtime-Board">
                <RealtimeBoardBox/>
            </div>
            <div className="Popular-Board">
                <PopularBoardBox/>
            </div>
        </div>
    );
};

export default Index;

//보드 박스에 함숫값으로 문자열을 넣고 싶다. ==> 오류 발생! 변수의 자료형을 따로 설정해줘야 하나? 그렇다면 위의 activeNum 은 왜 된걸까
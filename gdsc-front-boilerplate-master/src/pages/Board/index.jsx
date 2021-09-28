import React from 'react';
import styled from "styled-components";

import BottomNavigation from '../../layout/BottomNavigation';
import TopNavigation from "../../layout/TopNavigation";

const Index = () => {
    return (
        <div>
            <div className="bottom-navigation">
                <BottomNavigation activeNum={2} />
            </div>
            <div ClassName="Top-navigation">
                <TopNavigation/>
            </div>
        </div>
    );
};

export default Index;
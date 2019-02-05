import React from "react";
import styled from "styled-components";



const HeaderLayout = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
    
    
    margin-bottom: 1rem;
    color: white;
    background-color: #ff6600;
  
`;

const HeaderTitle = styled.h1`
  flex-grow: 1;
  margin: 10px;
`;

const HeaderTitle2 = styled.h1`
  flex-grow: 1;
  margin: 10px;
`;

const Header = () => (
    <HeaderLayout>
        <HeaderTitle>Hacker News</HeaderTitle>



    </HeaderLayout>
);

export default Header;

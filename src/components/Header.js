import React from "react";
import styled from "styled-components";



const HeaderLayout = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
    border-bottom: 10px #f4f4f4;
    border-radius: 10px;
    margin-bottom: 2rem;
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
        <HeaderTitle>HackerNews</HeaderTitle>



    </HeaderLayout>
);

export default Header;

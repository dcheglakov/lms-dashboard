import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import SiteLogo from './logo';

const HeaderContainer = styled.header`
  ${tw`bg-gray-800 p-4 flex justify-between`}
`;


function Header() {
  return (
    <HeaderContainer>
      <SiteLogo />
    </HeaderContainer>
  );
}

export default Header;
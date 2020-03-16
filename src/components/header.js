import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import SiteLogo from './logo'
import Nav from './nav'
import User from './user'

const HeaderContainer = styled.header`
  ${tw`flex justify-between flex-wrap bg-gray-700 border-t-4 border-teal-400 text-white shadow-md px-3 pt-2`}
`

function Header() {
  return (
    <HeaderContainer>
      <SiteLogo />
      <Nav />
      <User />
    </HeaderContainer>
  )
}

export default Header

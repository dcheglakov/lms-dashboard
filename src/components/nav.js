import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import tw from 'twin.macro'

const NavBar = styled.nav`
  ${tw`flex flex-wrap flex-grow md:flex-grow-0 order-last md:order-none`}
`
const NavBarLink = styled(NavLink)`
  ${tw`flex-grow md:flex-grow-0 md:mr-4 last:mr-0 text-center whitespace-no-wrap text-white active:text-teal-300 transition-all duration-500`}
  &:hover {
    ${tw`text-teal-400`}
  }
  &::after {
    content: '';
    transform: scale(0);
    ${tw`border-b-2 block mt-2 transition-all duration-500`}
  }
  &.active::after {
    content: '';
    transform: scale(1);
    ${tw`border-teal-400`}
  }
`
function Nav() {
  return (
    <NavBar>
      <NavBarLink activeClassName="active" exact to="/">
        Courses
      </NavBarLink>
      <NavBarLink activeClassName="active" exact to="/submissions">
        Code Review
      </NavBarLink>
      <NavBarLink activeClassName="active" exact to="/admin">
        Admin
      </NavBarLink>
    </NavBar>
  )
}

export default Nav

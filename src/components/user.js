import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { Notifications, Search, Contact } from 'emotion-icons/ion-ios'

const UserContainer = styled.div`
  ${tw`mb-2`}
  svg {
    ${tw`ml-2`}
  }
`
const iconSize = 24

function User() {
  return (
    <UserContainer>
      <Search size={iconSize} />
      <Notifications size={iconSize} />
      <Contact size={iconSize} />
    </UserContainer>
  )
}

export default User

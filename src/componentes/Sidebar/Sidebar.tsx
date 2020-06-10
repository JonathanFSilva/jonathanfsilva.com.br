import React from 'react'

import Brand from '../Brand'
import Navigation from '../Navigation'
import SocialLinks from '../SocialLinks'

import Styled from './Styled'

const Sidebar: React.FC = () => {
  return (
    <Styled.SidebarWrapper>
      <Brand />
      <Navigation />
      <SocialLinks />
    </Styled.SidebarWrapper>
  )
}

export default Sidebar

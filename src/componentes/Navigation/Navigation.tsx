import React from 'react'

import Styled from './Styled'

import contents, { Content, Link } from './contents'

const Navigation: React.FC = () => {
  const { links }: Content = contents

  return (
    <Styled.NavigationWrapper>
      {links &&
        links.map(({ label, url, icon: Icon }: Link) => (
          <Styled.NavigationLink
            key={label}
            to={url}
            title={label}
            activeClassName="active"
          >
            <Styled.LinkText>{label}</Styled.LinkText>
            <Styled.IconWrapper>
              <Icon />
            </Styled.IconWrapper>
          </Styled.NavigationLink>
        ))}
    </Styled.NavigationWrapper>
  )
}

export default Navigation

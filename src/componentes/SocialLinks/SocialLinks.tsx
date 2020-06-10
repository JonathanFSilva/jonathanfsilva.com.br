import React from 'react'

import Styled from './Styled'

import contents, { Content, Link } from './contents'

const SocialLinks: React.FC = () => {
  const { links }: Content = contents

  return (
    <Styled.SocialLinksWrapper>
      {links &&
        links.map(({ label, url, icon: Icon }: Link) => (
          <Styled.SocialLink
            href={url}
            title={label}
            target="_blank"
            rel="noopener noreferrer"
            key={label}
          >
            <Styled.IconWrapper>
              <Icon />
            </Styled.IconWrapper>
          </Styled.SocialLink>
        ))}
    </Styled.SocialLinksWrapper>
  )
}

export default SocialLinks

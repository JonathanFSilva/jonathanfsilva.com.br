import styled from 'styled-components'

const SocialLinksWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.palette.text.secondary};
  transition: ${({ theme }) => theme.transitions.ease};

  & + & {
    margin-top: ${({ theme }) => theme.gutters.sm};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.primary};
  }
`

const IconWrapper = styled.div`
  width: 1.125rem;
  height: 1.125rem;
`

export default { SocialLinksWrapper, SocialLink, IconWrapper }

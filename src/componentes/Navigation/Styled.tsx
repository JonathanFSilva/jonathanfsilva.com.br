import styled from 'styled-components'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const LinkText = styled.small`
  position: absolute;
  top: calc(50% - 0.5rem);
  font-size: ${({ theme }) => theme.typography.xsmall.fontSize};
  color: ${({ theme }) => theme.palette.primary};
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transitions.ease};
  opacity: 0;
`

const NavigationLink = styled(Link)`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${({ theme }) => theme.palette.text.secondary};

  & + & {
    margin-top: ${({ theme }) => theme.gutters.md};
  }

  &.active {
    color: ${({ theme }) => theme.palette.primary};
  }

  svg {
    transition: ${({ theme }) => theme.transitions.ease};
  }

  &:hover {
    svg {
      opacity: 0;
    }

    ${LinkText} {
      opacity: 1;
    }
  }
`

const IconWrapper = styled.div`
  width: 2.125rem;
  height: 2.125rem;
`

export default { NavigationWrapper, NavigationLink, LinkText, IconWrapper }

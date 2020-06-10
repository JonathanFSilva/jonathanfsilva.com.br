import styled from 'styled-components'

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 100%;
  padding: ${({ theme }) => `${theme.gutters.md} ${theme.gutters.none}`};
  background-color: ${({ theme }) => theme.palette.background.sidebar};
`

export default { SidebarWrapper }

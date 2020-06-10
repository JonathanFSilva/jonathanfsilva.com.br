import styled from 'styled-components'

const Wrapper = styled.section`
  position: relative;
  display: flex;
  height: 100vh;
`
const Main = styled.main`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.default};
`

export default { Wrapper, Main }

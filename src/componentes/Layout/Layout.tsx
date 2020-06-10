import React from 'react'
import { ThemeProvider } from 'styled-components'

import Sidebar from '../Sidebar'

import Styled from './Styled'

import theme from '../../assets/styles/theme'
import GlobalStyles from '../../assets/styles/global'

const Layout: React.FC = ({ children }) => (
  <ThemeProvider theme={theme.dark}>
    <Styled.Wrapper>
      <Sidebar />

      <Styled.Main>{children}</Styled.Main>
    </Styled.Wrapper>

    <GlobalStyles />
  </ThemeProvider>
)

export default Layout

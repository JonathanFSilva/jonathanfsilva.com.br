import React from 'react'
import { PageProps, Link, graphql } from 'gatsby'

type DataProps = {
  site: {
    buildTime: string
  }
}

const Index: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <h1>Hello!</h1>
)

export default Index

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

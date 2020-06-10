import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const Brand: React.FC = () => {
  const query = graphql`
    query {
      brand: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `

  const { brand } = useStaticQuery(query)

  return (
    <Link to="/">
      <Image fixed={brand.childImageSharp.fixed} />
    </Link>
  )
}

export default Brand

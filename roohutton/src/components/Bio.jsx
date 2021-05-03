import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

const BioBlock = styled.div`
  color: #fff;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 1.5rem;
  h1 {
    color: #94d614;
    font-weight: 500;
    font-size: 2em;
    margin: 2rem 0 0 0;
  }
  p {
    margin: 0.5rem 0;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { section: { eq: "bio" } } }) {
        edges {
          node {
            html
          }
        }
      }
    }
  `)

  return (
    <BioBlock>
      {" "}
      <div
        dangerouslySetInnerHTML={{
          __html: data.allMarkdownRemark.edges[0].node.html,
        }}
      />
    </BioBlock>
  )
}

export default Bio

import React from "react"
import styled from "styled-components"

const SectionWrapper = styled.div`
  position: relative;
  width: 100vw;
`

const SectionHeading = styled.h1`
  font-size: 7rem;
  font-weight: 800;
  font-family: "Lexend";
  color: #cb14d6;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`

const SectionGroup = styled.div`
  width: 100%;
  background-color: #b80000;
  min-height: 100px;
`
const SectionGroupHeadingContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  font-size: 2rem;
  padding: 2rem 0;
`
const ContentSection = section => (
  <SectionWrapper>
    <SectionHeading>work</SectionHeading>
    <SectionGroup>
      <SectionGroupHeadingContent>
        BBC News Labs 2017 -
      </SectionGroupHeadingContent>
    </SectionGroup>
  </SectionWrapper>
)

export default ContentSection

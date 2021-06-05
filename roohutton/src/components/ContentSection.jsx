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
const SectionItem = styled.div``
const SectionGroupHeading = styled.div`
  width: 100%;
  background-color: #b80000;
  min-height: 100px;
`

const SectionGroupHeadingContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  font-size: 1.5rem;
  padding: 0.5rem 0;
`

const GroupLogo = styled.img``

const GroupDate = styled.p`
  margin: 0;
`
const ItemDescription = styled.p`
  margin: 0;
  font-size: 1.2rem;
  padding: 1rem;
  font-weight: 500;
  line-height: 1.7rem;
`

const ItemContentWrapper = styled.div`
  width: 100%;
  background-color: #4b4b4b;
  min-height: 100px;
`
const ItemContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`

const ContentSection = section => (
  <SectionWrapper>
    <SectionHeading>work</SectionHeading>
    <SectionItem>
      <SectionGroupHeading>
        <SectionGroupHeadingContent>
          <GroupLogo src="" alt="BBC News Labs" />
          <GroupDate>2017 -</GroupDate>
        </SectionGroupHeadingContent>
      </SectionGroupHeading>

      <ItemContentWrapper>
        <ItemContent>
          <ItemDescription>
            News Labs drives innovation for BBC News. I’ve had the opportunity
            to work on some amazing projects to help journalists work better,
            and trial new formats to reach underserved audiences. Here are some
            of the things I’ve worked on.
          </ItemDescription>
        </ItemContent>
      </ItemContentWrapper>
    </SectionItem>
  </SectionWrapper>
)

export default ContentSection

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
  font-weight: 400;
  line-height: 1.8rem;
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

const SkipToNextSection = styled.p`
  position: absolute;
  right: 0;
  top: 0;
  font-size: 1rem;

  &:before {
    content: "> ";
  }
`
const SkipSectionName = styled.span`
  font-weight: 600;
`

/** Projects */
const ProjectBlock = styled.div`
  display: grid;
  grid-template-columns: 6rem auto 0.3fr;
  grid-template-rows: auto auto auto auto;
  border-top: 2px solid #b80000;
  position: relative;

  p {
    line-height: 1.4rem;
  }
`

const ProjectTitleWrapper = styled.div`
  grid-row: 1;
  grid-column: 1 / span 2;
`

const ProjectTitle = styled.h1`
  display: inline-block;
  background-color: #b80000;
  font-weight: 500;
  font-size: 2.2rem;
  padding: 0.2rem 0.4rem;
  margin: 0;
`

const ProjectYear = styled.h2`
  display: inline-block;
  background-color: #202020;
  margin: 0;
  grid-row: 2;
  grid-column: 1;
  font-weight: 500;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.3rem;
  padding: 0.2rem 0.4rem;
`

const ProjectContent = styled.div`
  grid-row: 2/3;
  grid-column: 2;
`

const ProjectContentLeadPar = styled.p`
  font-weight: 600;
  margin-top: 0.5rem;
`

const ProjectMedia = styled.div`
  width: 100%;
  height: 100%;
  grid-row: 1 / span 3;
  grid-column: 3;

  & iframe {
    border-right: 4px solid #b80000;
  }
`
const ProjectReadMore = styled.div`
  background-color: #b80000;
  padding: 0.5rem 1rem;
`

const ReadMoreHeading = styled.h3`
  text-transform: uppercase;
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
`

const ReadMoreLink = styled.p`
  margin: 0.5rem 0;
  &:after {
    content: " >";
  }
`

const ContentSection = section => (
  <SectionWrapper>
    <SectionHeading>work</SectionHeading>
    <SectionItem>
      <SectionGroupHeading>
        <SectionGroupHeadingContent>
          <GroupLogo src="" alt="BBC News Labs" />
          <GroupDate>2017 -</GroupDate>
          <SkipToNextSection>
            Skip to <br />
            <SkipSectionName>Open University</SkipSectionName>
          </SkipToNextSection>
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

          <ProjectBlock>
            <ProjectTitleWrapper>
              <ProjectTitle>Editorially curated personalisation</ProjectTitle>
            </ProjectTitleWrapper>
            <ProjectYear>2021</ProjectYear>
            <ProjectContent>
              <ProjectContentLeadPar>
                A lot of online platforms and websites are using machine
                learning recommendations to create personalised experiences.
                This project takes a completely different approach by testing if
                we can create a better audience experience by putting editors in
                control of personalisation?
              </ProjectContentLeadPar>
              <p>
                A lot of online platforms and websites are using machine
                learning recommendations to create personalised experiences.
                This project takes a completely different approach by testing if
                we can create a better audience experience by putting editors in
                control of personalisation?
              </p>
            </ProjectContent>
            <ProjectMedia>
              <iframe
                width="320"
                height="180"
                src="https://www.youtube.com/embed/JdAJJokYeFA"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <ProjectReadMore>
                <ReadMoreHeading>Read more</ReadMoreHeading>
                <ReadMoreLink href="https://bbcnewslabs.co.uk">
                  bbcnewslabs.co.uk
                </ReadMoreLink>
              </ProjectReadMore>
            </ProjectMedia>
          </ProjectBlock>
        </ItemContent>
      </ItemContentWrapper>
    </SectionItem>
  </SectionWrapper>
)

export default ContentSection

import React, { useState } from "react"
import styled, { keyframes } from "styled-components"

const CenteredNavigation = styled.div`
  text-align: center;
`

const NameHeader = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  font-family: "Lexend";
  display: inline-block;
  position: relative;
`

const NameHeaderSurname = styled.span`
  color: #bababa;
`

let HeaderUnderlineSlide = keyframes`
  from {
    width: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
  }

  to {
    width: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
  }
`

const refreshSlideAnimation = () => keyframes`

0% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

12% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

25% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

37% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

50% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

62% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

75% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

87% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}

100% {
  width: ${Math.random() * 100}%;
  left: ${Math.random() * 100 - 25}%;
}
`

const getNewHeaderUnderline = () => styled.div`
  /* width: ${Math.random() * 100}%; */
  height: 6px;
  background-color: ${props => props.color};
  position: absolute;
  transform: translate3d(0, 0, 0);

  animation: ${refreshSlideAnimation()} ${Math.random() * 70 + 20}s ease-in-out
    alternate-reverse infinite;
`

let HeaderUnderline = getNewHeaderUnderline()
let HeaderUnderline2 = getNewHeaderUnderline()
let HeaderUnderline3 = getNewHeaderUnderline()

const Navigation = () => {
  const [headerUnderline1, setHeaderUnderline1] = useState(HeaderUnderline)
  const [headerUnderline2, setHeaderUnderline2] = useState(
    getNewHeaderUnderline()
  )

  return (
    <CenteredNavigation>
      <NameHeader>
        roo<NameHeaderSurname>hutton</NameHeaderSurname>
        <HeaderUnderline2 color="#cb14d6" />
        <HeaderUnderline color="#94d614" />
        <HeaderUnderline3 color="#14a2d6" />
      </NameHeader>
    </CenteredNavigation>
  )
}

export default Navigation

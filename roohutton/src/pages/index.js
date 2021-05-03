import React from "react"
import styled, { createGlobalStyle } from "styled-components"

import Navigation from "../components/Navigation"
import Bio from "../components/Bio"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #171717;
    color: #fff;
    font-family: "IBM Plex Sans";
    margin: 0;
  }
`

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Navigation />
      <Bio />
      <MainContent />
      <Footer />
    </div>
  )
}

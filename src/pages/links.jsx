import React from "react"
import {
  ButtonText,
  BasicButtonExternal,
  Container,
} from "../styles/primary.js"
import Navbar from "../components/navbar/navbar.jsx"
import { LinksContainer } from "../styles/links.js"
import { externals } from "../constants/links"
import { BoldTitle } from "../styles/index.js"

export default function Links() {
  return (
    <LinksContainer>
      <Navbar theme="dark" page="Projects" />
      <Container>
        <BoldTitle>Links</BoldTitle>
        {externals.map(ext => (
          <BasicButtonExternal margin="10px" href={ext.url}>
            <ButtonText>{ext.label}</ButtonText>
          </BasicButtonExternal>
        ))}
      </Container>
    </LinksContainer>
  )
}
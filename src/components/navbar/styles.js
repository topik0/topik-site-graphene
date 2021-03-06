import styled from "styled-components"
import { Link } from "gatsby"

export const NavbarContainer = styled.div`
  height: 85px;
  width: 100%;
  display: flex;
  align-items: center;
  @media (orientation: portrait) {
    justify-content: center;
    position: static;
    top: 0;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    justify-content: ${props => props.page === "Home" ? "flex-start" : "center"};
  }
  position: ${props => (props.nonabsolute ? "static" : "absolute")};
  background-color: ${props =>
    props.theme === "dark" ? "#111" : "transparent"};
`
export const NavbarChild = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  position: absolute;
  max-width: 500px;
  @media (orientation: portrait) {
    margin-left: 0;
    justify-content: center;
  }
  @media only screen and (min-device-width: 480px) and (max-device-width: 900px) and (orientation: landscape) {
    margin-left: ${props => props.page === "Home" ? "70px" : "0"};
    justify-content: center;
  }
`
export const NavbarText = styled(Link)`
  text-align: center;
  font-size: 17px;
  color: ${props => (props.theme === "dark" ? "#fff" : "#222")};
  text-decoration: none;
  margin: 15px;
  font-weight: ${props => (props.weight ? props.weight : "500")};
  user-select: none;
  &:hover {
    color: ${props => (props.theme === "dark" ? "#e6e6e6" : "#3c3c3c")};
  }
`

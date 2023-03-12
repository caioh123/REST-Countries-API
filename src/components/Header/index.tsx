import { Container } from "./styles"
import {BsMoonStarsFill} from 'react-icons/bs'

export function Header() {
  return (
    <Container>
      <p>Where in the world?</p>
      <div>
      <BsMoonStarsFill size={20} color="black"/>
      <p>Dark Mode</p>
      </div>
    </Container>
  )
}

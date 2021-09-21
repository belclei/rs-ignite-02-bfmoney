import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="bf money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  )
}

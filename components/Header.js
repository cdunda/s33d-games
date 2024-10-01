import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: #121212;
  padding: 1rem;
`

const Logo = styled.h1`
  color: #32CD32;
  font-family: 'Poppins', sans-serif;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Logo>s33d Games</Logo>
    </HeaderWrapper>
  )
}

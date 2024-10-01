import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #000000;
  color: #FFFFFF;
  padding: 1rem;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <p>&copy; 2023 s33d Games</p>
    </FooterWrapper>
  )
}

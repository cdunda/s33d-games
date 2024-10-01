import styled from 'styled-components'

const ContactWrapper = styled.section`
  background-color: #121212;
  color: #FFFFFF;
  padding: 2rem;
`

const ContactTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #FFA500;
`

const ContactInfo = styled.p`
  font-family: 'Roboto', sans-serif;
`

export default function Contact() {
  return (
    <ContactWrapper>
      <ContactTitle>Contact Us</ContactTitle>
      <ContactInfo>Email: contact@s33d.io</ContactInfo>
      {/* Add social media icons here */}
    </ContactWrapper>
  )
}

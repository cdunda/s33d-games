import styled from 'styled-components'

const HeroWrapper = styled.section`
  background-color: #000000;
  color: #FFFFFF;
  padding: 4rem 2rem;
  text-align: center;
`

const HeroTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #00FF7F;
`

export default function Hero() {
  return (
    <HeroWrapper>
      <HeroTitle>Where Games Grow from Ideas</HeroTitle>
      {/* Add your hero image here */}
    </HeroWrapper>
  )
}

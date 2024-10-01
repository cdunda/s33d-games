import styled from 'styled-components';

const HeroWrapper = styled.div`
  background-image: url('/images/Ai Generated Nature Creature.jpg');
  background-size: cover;
  background-position: center;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.text};
`;

const TextContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.secondary};
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  color: ${props => props.theme.colors.text};
`;

export default function Hero() {
  return (
    <HeroWrapper>
      <TextContainer>
        <HeroTitle>Where Games Grow</HeroTitle>
        <HeroSubtitle>Bringing your game concepts to life with innovative technology and creative expertise</HeroSubtitle>
      </TextContainer>
    </HeroWrapper>
  )
}

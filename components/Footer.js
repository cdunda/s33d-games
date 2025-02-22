import Image from 'next/image';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const Copyright = styled.p`
  margin: 0;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.a`
  width: 24px;
  height: 24px;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Copyright>&copy; 2024 s33d Games</Copyright>
      <SocialIcons>
        <IconWrapper href="https://twitter.com/s33dgames" target="_blank" rel="noopener noreferrer">
          <Image src="/images/Video Game Night.svg" alt="Twitter" width={24} height={24} />
        </IconWrapper>
        <IconWrapper href="https://facebook.com/s33dgames" target="_blank" rel="noopener noreferrer">
          <Image src="/images/Gaming Recreation.svg" alt="Facebook" width={24} height={24} />
        </IconWrapper>
        <IconWrapper href="https://instagram.com/s33dgames" target="_blank" rel="noopener noreferrer">
          <Image src="/images/Playing Cards.svg" alt="Instagram" width={24} height={24} />
        </IconWrapper>
      </SocialIcons>
    </FooterWrapper>
  )
}

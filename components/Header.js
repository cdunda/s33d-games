import Image from 'next/image';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.colors.background};
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: auto;
`;

export default function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image src="/images/s33d-logo.png" alt="s33d Games Logo" width={150} height={50} layout="responsive" />
      </LogoWrapper>
    </HeaderWrapper>
  )
}

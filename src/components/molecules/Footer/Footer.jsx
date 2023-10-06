import styled from "styled-components";
import instagramLogo from "assets/redes/instagram.svg";
import facebookLogo from "assets/redes/facebook.svg";
import linkedinLogo from "assets/redes/linkedin.svg";
import tiktokLogo from "assets/redes/tiktok.svg";

const FooterWrapper = styled.footer`
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  height: 100px;
  width: 100%;
  padding: 50px 0;
`;

const LogoImg = styled.img`
  height: 24px;
  width: 24px;
  color: #096227;
`;

const LinksContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LinkRedes = styled.a`
  margin: 0 10px;
`;

const LogoEmpresa = styled.p`
  color: #096227;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: CENTER;
`;

const HorizontalLine = styled.hr`
  background-color: #096227;
  height: 3px;
  margin: 20px 120px 0 120px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoEmpresa>SkillMentor</LogoEmpresa>
      <LinksContainer>
        <LinkRedes
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoImg src={instagramLogo} alt="instagram page" />
        </LinkRedes>
        <LinkRedes
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoImg src={facebookLogo} alt="facebook page" />
        </LinkRedes>
        <LinkRedes
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoImg src={linkedinLogo} alt="linkedin page" />
        </LinkRedes>
        <LinkRedes
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noreferrer"
        >
          <LogoImg src={tiktokLogo} alt="tiktok page" />
        </LinkRedes>
      </LinksContainer>
      <HorizontalLine />
    </FooterWrapper>
  );
};

export default Footer;

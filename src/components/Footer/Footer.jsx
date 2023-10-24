import instagramLogo from "assets/redes/instagram.svg";
import facebookLogo from "assets/redes/facebook.svg";
import linkedinLogo from "assets/redes/linkedin.svg";
import tiktokLogo from "assets/redes/tiktok.svg";
import {
  FooterWrapper,
  HorizontalLine,
  LinksContainer,
  LinkRedes,
  LogoEmpresa,
  LogoImg
} from "./styles";

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

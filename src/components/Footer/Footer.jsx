import instagramLogo from "assets/redes/instagram.svg";
import facebookLogo from "assets/redes/facebook.svg";
import linkedinLogo from "assets/redes/linkedin.svg";
import tiktokLogo from "assets/redes/tiktok.svg";
import {
  FooterWrapper,
  HorizontalRule,
  LinksContainer,
  LinkRedes,
  LogoEmpresa,
  LogoImg
} from "./styles";

const Footer = () => {
  const redes = [
    {
      url: "https://www.instagram.com/",
      logo: instagramLogo,
      loglAltText: "instagram page"
    },
    {
      url: "https://www.facebook.com/",
      logo: facebookLogo,
      loglAltText: "facebook page"
    },
    {
      url: "https://www.linkedin.com/",
      logo: linkedinLogo,
      loglAltText: "linkedin page"
    },
    {
      url: "https://www.tiktok.com/",
      logo: tiktokLogo,
      loglAltText: "tiktok page"
    }
  ];

  return (
    <FooterWrapper>
      <LogoEmpresa>SkillMentor</LogoEmpresa>
      <LinksContainer>
        {redes.map((red) => {
          const { url, logo, loglAltText } = red;

          return (
            <LinkRedes key={url} href={url} target="_blank" rel="noreferrer">
              <LogoImg src={logo} alt={loglAltText} />
            </LinkRedes>
          );
        })}
      </LinksContainer>
      <HorizontalRule />
    </FooterWrapper>
  );
};

export default Footer;

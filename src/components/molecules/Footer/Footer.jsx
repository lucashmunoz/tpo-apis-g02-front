import styled from "styled-components";
import instagramLogo from "assets/redes/instagram.svg";
import facebookLogo from "assets/redes/facebook.svg";
import linkedinLogo from "assets/redes/linkedin.svg";
import tiktokLogo from "assets/redes/tiktok.svg";

const LogoImg = styled.img`
  height: 24px;
  width: 24px;
  color: #096227;
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
  margin: 10px 120px 0 120px;
`;

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 mt-auto">
      <LogoEmpresa>NOMBRE EMPRESA</LogoEmpresa>
      <div className="flex justify-center mt-4">
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
      </div>
      <HorizontalLine />
    </footer>
  );
};

export default Footer;

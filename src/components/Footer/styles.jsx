import styled from "styled-components";

export const FooterWrapper = styled.footer`
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

export const LogoImg = styled.img`
  height: 24px;
  width: 24px;
  color: #096227;
`;

export const LinksContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LinkRedes = styled.a`
  margin: 0 10px;
`;

export const LogoEmpresa = styled.p`
  color: #096227;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
`;

export const HorizontalLine = styled.hr`
  background-color: #096227;
  height: 3px;
  margin: 20px 120px 0 120px;
`;

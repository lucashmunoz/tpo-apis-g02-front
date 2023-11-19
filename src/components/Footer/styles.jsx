import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: #22c55e;
  border-top: 1px solid grey;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;
`;

export const LogoImg = styled.img`
  height: 24px;
  width: 24px;
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
  color: white;
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
`;

export const HorizontalRule = styled.hr`
  background-color: white;
  height: 3px;
  margin: 20px 120px 0 120px;
`;

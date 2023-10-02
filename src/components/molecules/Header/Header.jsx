import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "components/atoms/Button";
import logo from "assets/logo.png";
import BurgerMenuIcon from "assets/icons/menu-burger.svg";

const HeaderDesktop = styled.header`
  display: flex;
  padding: 16px 20px;
  margin: auto;
  background-color: #f3f4f6;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DesktopLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DesktopLinkItem = styled.li`
  margin: 0 10px;
`;

const DesktopLink = styled(Link)`
  font-weight: 600;
`;

const HeaderMobile = styled.header`
  display: none;
  padding: 16px 20px;
  margin: auto;
  background-color: #f3f4f6;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

const MobileBurgerIcon = styled.img`
  width: 40px;
  height: 40px;
`;

const Header = () => {
  return (
    <>
      <HeaderDesktop>
        <nav>
          <DesktopLinksList>
            <DesktopLinkItem>
              <DesktopLink to="/">
                <img src={logo} alt="ir a home" className="w-16" />
              </DesktopLink>
            </DesktopLinkItem>
            <DesktopLinkItem>
              <DesktopLink to="/sobrenosotros">Sobre Nosotros</DesktopLink>
            </DesktopLinkItem>
            <DesktopLinkItem>
              <DesktopLink to="/servicios">
                Servicios
                <span className="ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </DesktopLink>
            </DesktopLinkItem>
          </DesktopLinksList>
        </nav>
        <div>
          <Button buttonType="primary">Iniciar Sesion</Button>
        </div>
      </HeaderDesktop>

      <HeaderMobile>
        <MobileBurgerIcon src={BurgerMenuIcon} alt="mobile menu icon" />

        <Link to="/">
          <img src={logo} alt="ir a home" className="w-16" />
        </Link>
      </HeaderMobile>
    </>
  );
};

export default Header;

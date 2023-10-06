import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PrimaryButton from "components/atoms/PrimaryButton";
import logo from "assets/smlogo.png";
import BurgerMenuIcon from "assets/icons/menu-burger.svg";
import UserContext, { initialUserContextState } from "user-context";

const HeaderWrapper = styled.header`
  background-color: #f3f4f6;
  height: 96px;
`;

const HeaderDesktop = styled.div`
  position: relative;
  display: flex;
  padding: 16px 20px;
  margin: auto;
  justify-content: space-between;
  align-items: center;

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

const ProfileImg = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;

const SessionButtons = styled.div`
  display: flex;
  height: 40px;
  width: 200px;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

const ActionButton = styled(PrimaryButton)`
  height: 40px;
`;

const LoggedUserMenuContainer = styled.div`
  position: absolute;
  right: 20px;
  z-index: 20;

  display: ${(props) => (props.$isUserMenuVisible ? "flex" : "none")};

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;

  :not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const UserMenuButton = styled.button`
  padding: 8px;
  width: 100%;
  text-align: left;
`;

const HeaderMobile = styled.div`
  position: relative;
  display: none;
  padding: 16px 20px;
  margin: auto;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileBurgerIcon = styled.img`
  width: 48px;
  height: 48px;
`;

const MobileMenuItems = styled.div`
  position: absolute;
  left: 20px;
  z-index: 2;

  display: ${(props) => (props.$isMobileMenuItemsVisible ? "flex" : "none")};

  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  background-color: white;

  :not(:last-child) {
    border-bottom: 1px solid grey;
  }
`;

const MobileMenuItem = styled.button`
  padding: 8px;
  width: 100%;
  text-align: left;
`;

const Header = () => {
  const navigate = useNavigate();

  const [loggedUser, setLoggedUser] = useContext(UserContext);

  const [isLoggedUserMenuVisible, setIsLoggedUserMenuVisible] = useState(false);
  const [isMobileMenuItemsVisible, setIsMobileMenuItemsVisible] =
    useState(false);

  const goToHirings = () => {
    setIsLoggedUserMenuVisible(false);
    navigate(`/hirings`);
  };

  const goToMyServices = () => {
    setIsLoggedUserMenuVisible(false);
    navigate("/myservices");
  };

  const goToSobreNosotros = () => {
    setIsMobileMenuItemsVisible(false);
    navigate(`/about`);
  };

  const goToServicios = () => {
    setIsMobileMenuItemsVisible(false);
    navigate("/services");
  };

  const handleCerrarSesion = () => {
    setLoggedUser(initialUserContextState);
    setIsLoggedUserMenuVisible(false);

    // borramos la sesion
    window.sessionStorage.removeItem("loggedUser");

    setLoggedUser({ ...initialUserContextState, isUserLoggedIn: false });

    navigate(`/`);
  };

  return (
    <HeaderWrapper>
      <HeaderDesktop>
        <nav>
          <DesktopLinksList>
            <DesktopLinkItem>
              <DesktopLink to="/">
                <img src={logo} alt="ir a home" className="w-16" />
              </DesktopLink>
            </DesktopLinkItem>
            <DesktopLinkItem>
              <DesktopLink to="/about">Sobre Nosotros</DesktopLink>
            </DesktopLinkItem>
            <DesktopLinkItem>
              <DesktopLink to="/services">Servicios</DesktopLink>
            </DesktopLinkItem>
          </DesktopLinksList>
        </nav>
        {!loggedUser.isUserLoggedIn ? (
          <SessionButtons>
            <ActionButton onClick={() => navigate("/login")}>
              Iniciar Sesion
            </ActionButton>
          </SessionButtons>
        ) : (
          <button
            onClick={() => setIsLoggedUserMenuVisible(!isLoggedUserMenuVisible)}
          >
            <ProfileImg
              src={loggedUser.profilePhoto}
              alt="imagen de perfil del usuario"
            />
          </button>
        )}
      </HeaderDesktop>

      <HeaderMobile>
        <button
          onClick={() => setIsMobileMenuItemsVisible(!isMobileMenuItemsVisible)}
        >
          <MobileBurgerIcon src={BurgerMenuIcon} alt="mobile menu icon" />
        </button>

        <Link to="/">
          <img src={logo} alt="ir a home" className="w-16" />
        </Link>

        {!loggedUser.isUserLoggedIn ? (
          <SessionButtons>
            <ActionButton onClick={() => navigate("/login")}>
              Iniciar Sesion
            </ActionButton>
          </SessionButtons>
        ) : (
          <button
            onClick={() => setIsLoggedUserMenuVisible(!isLoggedUserMenuVisible)}
          >
            <ProfileImg
              src={loggedUser.profilePhoto}
              alt="imagen de perfil del usuario"
            />
          </button>
        )}
      </HeaderMobile>
      <MobileMenuItems $isMobileMenuItemsVisible={isMobileMenuItemsVisible}>
        <MobileMenuItem onClick={goToSobreNosotros}>
          Sobre Nosotros
        </MobileMenuItem>
        <MobileMenuItem onClick={goToServicios}>Servicios</MobileMenuItem>
      </MobileMenuItems>

      <LoggedUserMenuContainer $isUserMenuVisible={isLoggedUserMenuVisible}>
        <UserMenuButton onClick={goToHirings}>Contrataciones</UserMenuButton>
        <UserMenuButton onClick={goToMyServices}>Mis Cursos</UserMenuButton>
        <UserMenuButton onClick={handleCerrarSesion}>
          Cerrar sesión
        </UserMenuButton>
      </LoggedUserMenuContainer>
    </HeaderWrapper>
  );
};

export default Header;

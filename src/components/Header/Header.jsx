import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "assets/smlogo.png";
import BurgerMenuIcon from "assets/icons/menu-burger.svg";
import UserContext, { initialUserContextState } from "user-context";
import {
  ActionButton,
  DesktopLink,
  DesktopLinkItem,
  DesktopLinksList,
  HeaderDesktop,
  HeaderMobile,
  HeaderWrapper,
  LoggedUserMenuContainer,
  LogoImg,
  MobileBurgerIcon,
  MobileMenuItem,
  MobileMenuItems,
  ProfileImg,
  SessionButtons,
  UserMenuButton
} from "./styles";

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
                <LogoImg src={logo} alt="ir a home" />
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
              Iniciar Sesión
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
          <LogoImg src={logo} alt="ir a home" />
        </Link>

        {!loggedUser.isUserLoggedIn ? (
          <SessionButtons>
            <ActionButton onClick={() => navigate("/login")}>
              Iniciar Sesión
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

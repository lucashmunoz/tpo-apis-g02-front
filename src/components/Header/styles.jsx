import styled from "styled-components";
import PrimaryButton from "components/PrimaryButton";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: #f3f4f6;
  height: 96px;
`;

export const HeaderDesktop = styled.div`
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

export const DesktopLinksList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesktopLinkItem = styled.li`
  margin: 0 10px;
`;

export const DesktopLink = styled(Link)`
  font-weight: 600;
`;

export const LogoImg = styled.img`
  height: 64px;
  width: 64px;
`;

export const ProfileImg = styled.img`
  height: 56px;
  width: 56px;
  border-radius: 50%;
`;

export const SessionButtons = styled.div`
  display: flex;
  height: 40px;
  width: 200px;

  @media (max-width: 768px) {
    width: 140px;
  }
`;

export const ActionButton = styled(PrimaryButton)`
  height: 40px;
`;

export const LoggedUserMenuContainer = styled.div`
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

export const UserMenuButton = styled.button`
  padding: 8px;
  width: 100%;
  text-align: left;
`;

export const HeaderMobile = styled.div`
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

export const MobileBurgerIcon = styled.img`
  width: 48px;
  height: 48px;
`;

export const MobileMenuItem = styled.button`
  padding: 8px;
  width: 100%;
  text-align: left;
`;

export const MobileMenuItems = styled.div`
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

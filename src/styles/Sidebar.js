import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const SideBar = styled.div`
  background: ${colors.sidebarBg};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 4vw;
  min-width: 40px;
  height: calc(100vh - 30px - 25px);
`;

export const IconContainer = styled.div`
  cursor: pointer;
  width: 100%;
  &:hover,
  &:focus {
    background: ${colors.sidebarHoverBg};
  }
`;

export const ActiveIconContainer = styled.div`
  cursor: pointer;
  width: 100%;
  background: ${colors.explorerBg};
  border-left: 2px solid ${colors.offwhite};
`;

export const Icon = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

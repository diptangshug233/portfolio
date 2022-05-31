import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const BottomBar = styled.div`
  background: ${colors.bottombarBg};
  height: 25px;
  border-top: 1px solid ${colors.bottombarBorder};
  color: ${colors.titleGrey};
  padding: 0 0.5rem;
  display: flex;
  margin-bottom: 0;
  padding-bottom: 0;
  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  a {
    color: ${colors.titleGrey};
    text-decoration: none;
    display: flex;
    align-items: center;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Section = styled.div`
  display: flex;
  margin-right: 0.5rem;
  height: 24px;
  align-items: center;
  padding: 0 0.2rem;
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${colors.bottombarHoverBg};
  }
`;
export const Icon = styled.div`
  margin-right: 4px;
`;

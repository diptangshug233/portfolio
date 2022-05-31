import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Tabs = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  background: ${colors.tabsBg};
  overflow-x: auto;
  height: 40px;
  .active {
    height: 100%;
    border-top: 1px solid ${colors.blue};
    background: ${colors.tabActiveBg};
    border-bottom: none;
  }
`;

import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const TitleBar = styled.div`
  background: ${colors.titlebarBg};
  height: 30px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.titleGrey};
  font-family: "Roboto", sans-serif;

  font-size: 0.85rem;
  border-bottom: 1px solid ${colors.titlebarBorder};
`;

export const Items = styled.div`
  flex: 1;
  display: flex;
  margin-right: auto;
  margin-left: 0.5rem;
  p {
    padding: 0 0.5rem;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  flex: 1;
  text-align: center;
`;

export const WindowButtons = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: auto;
  * {
    margin-left: 0.5rem;
    height: 13px;
    width: 13px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const Item = styled.p`
  &:hover,
  &:focus {
    color: ${colors.blue};
  }
`;

export const Minimize = styled.span`
  background: ${colors.yellow};
  margin-left: auto;
`;

export const Maximize = styled.span`
  background: ${colors.green};
`;

export const Close = styled.span`
  background: ${colors.red};
`;

export const Image = styled.img`
  height: 25px;
  width: 25px;
`;

import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: rgb(225, 228, 232);
  font-family: "Roboto", sans-serif;
`;
export const TextBox = styled.div`
  display: grid;
  margin-top: 3rem;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  width: 100%;
  p {
    font-size: 0.875rem;
    font-weight: 200;
    letter-spacing: 0.7px;
    margin-top: 0.8rem;
    margin-bottom: 0px;
  }
`;
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const BlankSpan = styled.span`
  background-color: ${colors.bottombarHoverBg};
  font-size: 0.675rem;
  padding: 0.2rem 0.3rem;
  border-radius: 15%;
`;

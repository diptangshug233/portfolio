import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Container = styled.div`
  margin: 1rem 0 0 0;
  padding: 0;
`;
export const Blue = styled.span`
  color: ${colors.blue};
`;
export const Tag = styled.span`
  color: ${colors.cssRed};
`;
export const Text = styled.span`
  color: ${colors.cssText};
`;
export const Green = styled.span`
  color: ${colors.textGreen};
`;
export const Prop = styled.span`
  color: ${colors.purple};
  font-style: italic;
`;
export const Line = styled.span`
  color: ${colors.line};
`;

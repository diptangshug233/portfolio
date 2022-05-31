import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Line = styled.span`
  color: ${colors.line};
`;
export const Container = styled.div`
  margin: 1rem 0 0 0;
  padding: 0;
`;
export const Purple = styled.span`
  color: ${colors.purple};
`;
export const Red = styled.a`
  text-decoration: none;

  color: ${colors.cssVal};
`;
export const Text = styled.span`
  color: ${colors.cssText};
`;
export const Blue = styled.span`
  color: ${colors.blue};
`;
export const Green = styled.span`
  color: ${colors.textGreen};
`;
export const Orange = styled.span`
  color: ${colors.cssClass};
`;

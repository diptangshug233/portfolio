import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Container = styled.div`
  margin: 1rem 0 0 0;
  padding: 0;
`;
export const Text = styled.span`
  color: ${colors.cssText};
`;
export const Line = styled.span`
  color: ${colors.line};
`;
export const Purple = styled.span`
  color: ${colors.purple};
`;
export const Blue = styled.span`
  color: ${colors.blue};
`;
export const DeepBlue = styled.span`
  color: ${colors.deepBlue};
`;
export const Yellow = styled.span`
  color: ${colors.cssYellow};
`;
export const Green = styled.span`
  color: ${colors.textGreen};
`;
export const Orange = styled.a`
  text-decoration: none;

  color: ${colors.cssClass};
`;

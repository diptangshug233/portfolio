import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Class = styled.span`
  font-style: italic;
  color: ${colors.cssClass};
`;
export const Container = styled.div`
  margin: 1rem 0 0 0;
  padding: 0;
`;

export const Blue = styled.span`
  color: ${colors.blue};
`;
export const Purple = styled.span`
  color: ${colors.purple};
`;
export const Yellow = styled.span`
  color: ${colors.cssYellow};
`;
export const Prop = styled.span`
  color: ${colors.cssText};
`;
export const Val = styled.a`
  text-decoration: none;
`;
export const Red = styled.span`
  color: ${colors.cssVal};
`;
export const Line = styled.span`
  color: ${colors.line};
`;

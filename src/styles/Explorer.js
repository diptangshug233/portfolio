import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Explorer = styled.div`
  background: ${colors.explorerBg};
  width: 16vw;
  color: ${colors.titleGrey};
  font-family: "Roboto", sans-serif;
  border-right: 1px solid ${colors.explorerBorder};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0.6rem 0 0.8rem 0;
  p {
    padding: 0 0 0 1.2rem;
    font-weight: 500;
    margin: 0;
    text-transform: uppercase;
    font-size: 0.7rem;
    letter-spacing: 0px;
    color: ${colors.white};
  }
  .option {
    margin: auto;
    cursor: pointer;

    &:hover,
    &:focus {
      background: ${colors.bottombarHoverBg};
      border-radius: 10%;
    }
  }
`;

export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
`;

export const Heading = styled.label`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 0.5rem 0 0.25rem;
  .hidden {
    visibility: hidden;
  }
  .hide {
    visibility: hidden;
  }
  .option {
    margin: auto;
    padding: 0 0.07rem;
    &:hover,
    &:focus {
      background: ${colors.bottombarHoverBg};
      border-radius: 10%;
    }
  }
  &:hover,
  &:focus {
    .hidden {
      visibility: visible;
    }
  }
`;

export const Files = styled.div`
  padding: 0.5rem 0;
  cursor: pointer;
`;
export const File = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  height: 19px;
  align-items: center;
  font-size: 0.875rem;
  p {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    background: ${colors.explorerHoverBg};
    p {
      color: ${colors.blue};
    }
  }
`;

export const LabelDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

import blank from "../icons/vscode_filler.svg";
import {
  BlankSpan,
  Container,
  Left,
  Right,
  TextBox,
} from "../styles/BlankStyle";

const Blank = () => {
  return (
    <>
      <Container>
        <img src={blank} alt="Visual Studio Code" height={250} width={250} />
        <TextBox>
          <Left>
            <p>Show All Commands</p>
            <p>Go to File</p>
            <p>Find in Files</p>
            <p>Start Debugging</p>
            <p>Toggle Terminal</p>
          </Left>
          <Right>
            <p>
              <BlankSpan>Ctrl</BlankSpan> + <BlankSpan>Shift</BlankSpan> +{" "}
              <BlankSpan>P</BlankSpan>
            </p>
            <p>
              <BlankSpan>Ctrl</BlankSpan> + <BlankSpan>P</BlankSpan>
            </p>
            <p>
              <BlankSpan>Ctrl</BlankSpan> + <BlankSpan>Shift</BlankSpan> +{" "}
              <BlankSpan>F</BlankSpan>
            </p>
            <p>
              <BlankSpan>F5</BlankSpan>
            </p>
            <p>
              <BlankSpan>Ctrl</BlankSpan> + <BlankSpan>`</BlankSpan>
            </p>
          </Right>
        </TextBox>
      </Container>
    </>
  );
};

export default Blank;

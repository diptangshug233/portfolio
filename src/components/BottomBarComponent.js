import ErrorIcon from "../icons/ErrorIcon";
import WarningIcon from "../icons/WarningIcon";
import BellIcon from "../icons/BellIcon";
import CheckIcon from "../icons/CheckIcon";
import SourceControlIcon from "../icons/SourceControlIcon";
import sync from "../icons/sync.svg";
import babel from "../icons/babel.svg";
import GoLive from "../icons/GoLive.svg";
import feedback from "../icons/feedback.svg";
import { BottomBar, Container, Section, Icon } from "../styles/BottomBar";
const BottomBarComponent = () => {
  return (
    <BottomBar>
      <Container>
        <Section>
          <a
            href="https://github.com/diptangshug233"
            target="_blank"
            rel="noreferrer noopener"
            className="section"
          >
            <Icon>
              <SourceControlIcon />
            </Icon>
            <p style={{ margin: "0 auto" }}>main</p>
          </a>
        </Section>
        <Section>
          <img src={sync} alt={sync} />
        </Section>
        <Section>
          <Icon>
            <ErrorIcon />
          </Icon>
          <p className="errorText">0</p>&nbsp;&nbsp;
          <Icon>
            <WarningIcon />
          </Icon>
          <p>0</p>
        </Section>
      </Container>
      <Container>
        <Section>
          <p>Ln 1, Col 1</p>
        </Section>
        <Section>
          <p>Spaces: 2</p>
        </Section>
        <Section>
          <p>UTF-8</p>
        </Section>
        <Section>
          <p>CRLF</p>
        </Section>
        <Section>
          <Icon>
            <img src={babel} alt={babel} />
          </Icon>
          <p>Babel JavaScript</p>
        </Section>
        <Section>
          <Icon>
            <img src={GoLive} alt={GoLive} />
          </Icon>
          <p>Go Live</p>
        </Section>
        <Section>
          <Icon>
            <CheckIcon />
          </Icon>
          <p>Prettier</p>
        </Section>
        <Section>
          <img src={feedback} alt={feedback} />
        </Section>
        <Section>
          <BellIcon />
        </Section>
      </Container>
    </BottomBar>
  );
};

export default BottomBarComponent;

import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Extras from "./Extras";
import Projects from "./Projects";
import theme from "../styles/theme";
const { colors } = theme;

const Content = styled.div`
  padding: 0 1rem;
  color: ${colors.textColor};
  font-family: "JetBrains Mono", monospace;
  flex: 1;
  height: calc(100vh - 97px);
  overflow-y: auto;
  scrollbar-width: 10px;
  scrollbar-color: ${colors.accentColor};
  ::-webkit-scrollbar {
    width: 15px;
  }
  ::-webkit-scrollbar-track {
    background: ${colors.scrollbarTrackBg};
    border-left: 1px solid #1e1f29;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colors.scrollbarThumbBg};
    border-left: 1px solid #1e1f29;
  }
`;

const ContentComponent = ({ currentTab }) => {
  return (
    <>
      <Content>
        {currentTab === "about" ? (
          <About />
        ) : currentTab === "experience" ? (
          <Experience />
        ) : currentTab === "projects" ? (
          <Projects />
        ) : currentTab === "education" ? (
          <Education />
        ) : currentTab === "extras" ? (
          <Extras />
        ) : (
          <Contact />
        )}
      </Content>
    </>
  );
};

export default ContentComponent;

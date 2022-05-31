import styled from "styled-components";
import theme from "../styles/theme";
import close from "../icons/close.svg";
const { colors } = theme;

export const TabSection = styled.div`
  padding: 0 0.75rem;
  background: ${colors.tabsBg};
  color: #ececec;
  display: flex;
  height: 40px;
  align-items: center;
  border: 1px solid ${colors.tabBorder};
  font-size: 0.9rem;
  cursor: pointer;

  p {
    margin-left: 5px;
  }
  .close {
    &:hover,
    &:focus {
      background: ${colors.bottombarHoverBg};
      border-radius: 10%;
    }
  }
`;

const Tab = ({
  icon,
  filename,
  content,
  setCurrentTab,
  openTabs,
  setOpenTabs,
  currentTab,
}) => {
  const closeTab = (e, content) => {
    e.stopPropagation();
    const tabs = [...openTabs];
    const res = tabs.filter((tab) => tab.content !== content);
    setOpenTabs(res);
    if (currentTab === content) {
      setCurrentTab(res[0].content);
    }
  };
  const path = require(`../icons/${icon}.svg`);
  return (
    <>
      <TabSection
        className={currentTab === content ? "active" : ""}
        onClick={() => setCurrentTab(content)}
      >
        <img src={path} alt={icon} height={18} width={18} />
        <p>{filename}</p>
        <img
          onClick={(e) => closeTab(e, content)}
          src={close}
          alt={close}
          height={18}
          width={18}
          className="close"
          style={{ marginLeft: "1rem" }}
        />
      </TabSection>
    </>
  );
};

export default Tab;

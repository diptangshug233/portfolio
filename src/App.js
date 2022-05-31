import { GlobalStyle } from "./styles";
import {
  BottomBarComponent,
  ExplorerComponent,
  SideBarComponent,
  TabsBarComponent,
  TitleBarComponent,
  ContentComponent,
  Blank,
} from "./components";
import { useState } from "react";
import styled from "styled-components";
import theme from "./styles/theme";
const { colors } = theme;

const Main = styled.div`
  display: flex;
  background: ${colors.mainBg};
`;

function App() {
  const [openTabs, setOpenTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState(null);

  return (
    <>
      <GlobalStyle />
      <TitleBarComponent />
      <Main>
        <SideBarComponent />
        <ExplorerComponent
          openTabs={openTabs}
          setOpenTabs={setOpenTabs}
          setCurrentTab={setCurrentTab}
        />
        <div style={{ width: "100%" }}>
          <TabsBarComponent
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
          {currentTab && openTabs.length > 0 ? (
            <ContentComponent currentTab={currentTab} />
          ) : (
            <Blank />
          )}
        </div>
      </Main>
      <BottomBarComponent />
    </>
  );
}

export default App;

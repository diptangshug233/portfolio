import { Tabs } from "../styles/TabsBar";
import Tab from "./Tab";

const TabsBarComponent = ({
  openTabs,
  setOpenTabs,
  setCurrentTab,
  currentTab,
}) => {
  return (
    <>
      <Tabs>
        {openTabs.map((tab, i) => (
          <Tab
            key={i}
            icon={tab.icon}
            filename={tab.filename}
            content={tab.content}
            openTabs={openTabs}
            setOpenTabs={setOpenTabs}
            setCurrentTab={setCurrentTab}
            currentTab={currentTab}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabsBarComponent;

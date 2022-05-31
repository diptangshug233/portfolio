import {
  Close,
  Image,
  Item,
  Items,
  Maximize,
  Minimize,
  Title,
  TitleBar,
  WindowButtons,
} from "../styles/TitleBar";
import VSCode from "../icons/VSCode.svg";

const TitleBarComponent = () => {
  return (
    <>
      <TitleBar>
        <Image src={VSCode} alt="VSCode" />
        <Items>
          <Item>File</Item>
          <Item>Edit</Item>
          <Item>Selection</Item>
          <Item>View</Item>
          <Item>Go</Item>
          <Item>Run</Item>
          <Item>Terminal</Item>
          <Item>Help</Item>
        </Items>
        <Title>Diptangshu Ghosh - Visual Studio Code</Title>
        <WindowButtons>
          <Minimize />
          <Maximize />
          <Close />
        </WindowButtons>
      </TitleBar>
    </>
  );
};

export default TitleBarComponent;

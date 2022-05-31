import {
  ActiveIconContainer,
  Icon,
  IconContainer,
  SideBar,
} from "../styles/Sidebar";
import FilesIcon from "../icons/FilesIcon";
import Search from "../icons/Search";
import GithubIcon from "../icons/GithubIcon";
import RunAndDebug from "../icons/RunAndDebug";
import Extensions from "../icons/Extensions";
import AccountIcon from "../icons/AccountIcon";
import SettingsIcon from "../icons/SettingsIcon";
import styled from "styled-components";
import theme from "../styles/theme";

const { colors } = theme;

const SearchIcon = styled(Search)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const Github = styled(GithubIcon)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const RunAndDebugIcon = styled(RunAndDebug)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const ExtensionsIcon = styled(Extensions)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const Account = styled(AccountIcon)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const Settings = styled(SettingsIcon)`
  &:hover,
  &:focus {
    fill: ${colors.offwhite};
  }
`;
const SideBarComponent = () => {
  return (
    <>
      <SideBar>
        <div className="top">
          <ActiveIconContainer>
            <Icon>
              <FilesIcon fill="#eeffff" height="27" width="27" />
            </Icon>
          </ActiveIconContainer>
          <IconContainer>
            <Icon>
              <SearchIcon fill="rgb(106, 115, 125)" height="27" width="27" />
            </Icon>
          </IconContainer>
          <a
            href="https://github.com/diptangshug233"
            target="_blank"
            rel="noreferrer noopener"
            className="section"
          >
            <IconContainer>
              <Icon>
                <Github fill="rgb(106, 115, 125)" height="27" width="27" />
              </Icon>
            </IconContainer>
          </a>
          <IconContainer>
            <Icon>
              <RunAndDebugIcon
                fill="rgb(106, 115, 125)"
                height="27"
                width="27"
              />
            </Icon>
          </IconContainer>
          <IconContainer>
            <Icon>
              <ExtensionsIcon
                fill="rgb(106, 115, 125)"
                height="27"
                width="27"
              />
            </Icon>
          </IconContainer>
        </div>
        <div className="bottom">
          <a
            href="https://github.com/diptangshug233"
            target="_blank"
            rel="noreferrer noopener"
            className="section"
          >
            <IconContainer>
              <Icon>
                <Account fill="rgb(106, 115, 125)" height="27" width="27" />
              </Icon>
            </IconContainer>
          </a>
          <IconContainer>
            <Icon>
              <Settings fill="rgb(106, 115, 125)" height="27" width="27" />
            </Icon>
          </IconContainer>
        </div>
      </SideBar>
    </>
  );
};

export default SideBarComponent;

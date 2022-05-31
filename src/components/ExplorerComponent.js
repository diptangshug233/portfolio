import { useState } from "react";
import {
  CheckBox,
  Explorer,
  File,
  Files,
  Heading,
  LabelDiv,
  Title,
} from "../styles/Explorer";
import ChevronRight from "../icons/ChevronRight";
import styled from "styled-components";
import css_icon from "../icons/css_icon.svg";
import html_icon from "../icons/html_icon.svg";
import js_icon from "../icons/js_icon.svg";
import json_icon from "../icons/json_icon.svg";
import react_icon from "../icons/react_icon.svg";
import markdown_icon from "../icons/markdown_icon.svg";
import option from "../icons/option.svg";
import collapse from "../icons/collapse.svg";
import folder from "../icons/folder.svg";
import newfile from "../icons/newfile.svg";
import refresh from "../icons/refresh.svg";

const Chevron = styled(ChevronRight)`
  transition: transform 0.2s;
`;

const ExplorerComponent = ({ openTabs, setOpenTabs, setCurrentTab }) => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  const addTab = (icon, filename, content) => {
    const tab = { icon: icon, filename: filename, content: content };
    if (openTabs.some((item) => item.content === content)) {
      setCurrentTab(content);
      return;
    }

    setOpenTabs((currentTabs) => [...currentTabs, tab]);
    setCurrentTab(content);
  };
  const handleCollapse = (e) => {
    e.stopPropagation();
    setPortfolioOpen(true);
  };
  const handleNull = (e) => {
    e.stopPropagation();
    setPortfolioOpen(false);
  };

  return (
    <>
      <Explorer>
        <Title>
          <p>EXPLORER</p>
          <img
            src={option}
            alt={option}
            height={18}
            width={18}
            className="option"
            style={{ marginRight: "0.7rem" }}
          />
        </Title>
        <div>
          <CheckBox
            type="checkbox"
            id="portfolio-checkbox"
            checked={portfolioOpen}
            onChange={() => setPortfolioOpen(!portfolioOpen)}
          />
          <Heading htmlFor="portfolio-checkbox">
            <LabelDiv>
              <Chevron
                style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
              />
              Portfolio
            </LabelDiv>
            <LabelDiv className={!portfolioOpen ? "hide" : "hidden"}>
              <img
                src={newfile}
                alt={newfile}
                height={18}
                width={18}
                className="option"
                onClick={(e) => handleNull(e)}
              />
              <img
                src={folder}
                alt={folder}
                height={18}
                width={18}
                className="option"
                onClick={(e) => handleNull(e)}
              />
              <img
                src={refresh}
                alt={refresh}
                height={18}
                width={18}
                className="option"
                onClick={(e) => handleNull(e)}
              />
              <img
                src={collapse}
                alt={collapse}
                height={18}
                width={18}
                className="option"
                onClick={(e) => handleCollapse(e)}
              />
            </LabelDiv>
          </Heading>
          <Files
            style={portfolioOpen ? { display: "block" } : { display: "none" }}
          >
            <File onClick={() => addTab("json_icon", "about.json", "about")}>
              <img src={json_icon} alt="json_icon" height={18} width={18} />{" "}
              <p>about.json</p>
            </File>
            <File
              onClick={() =>
                addTab("html_icon", "experience.html", "experience")
              }
            >
              <img src={html_icon} alt="html_icon" height={18} width={18} />{" "}
              <p>experience.html</p>
            </File>
            <File onClick={() => addTab("js_icon", "projects.js", "projects")}>
              <img src={js_icon} alt="js_icon" height={18} width={18} />{" "}
              <p>projects.js</p>
            </File>
            <File
              onClick={() => addTab("react_icon", "education.jsx", "education")}
            >
              <img src={react_icon} alt="react_icon" height={18} width={18} />{" "}
              <p>education.jsx</p>
            </File>
            <File
              onClick={() => addTab("markdown_icon", "extras.md", "extras")}
            >
              <img
                src={markdown_icon}
                alt="markdown_icon"
                height={18}
                width={18}
              />{" "}
              <p>extras.md</p>
            </File>
            <File onClick={() => addTab("css_icon", "contact.css", "contact")}>
              <img src={css_icon} alt="css_icon" height={18} width={18} />{" "}
              <p>contact.css</p>
            </File>
          </Files>
        </div>
      </Explorer>
    </>
  );
};

export default ExplorerComponent;

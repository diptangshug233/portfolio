import {
  Container,
  DeepBlue,
  Purple,
  Yellow,
  Line,
  Blue,
  Text,
  Green,
  Orange,
} from "../styles/JS";

const Projects = () => {
  return (
    <>
      <Container>
        <div>
          <Line>1</Line>&emsp;&emsp;<Purple>const</Purple>{" "}
          <DeepBlue>featuredProject</DeepBlue> <Purple>=</Purple>{" "}
          <Yellow>()</Yellow> <Purple>{`=>`}</Purple>
          <Yellow>{` {`}</Yellow>
        </div>
        <div>
          <Line>2</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>title</Text> <Purple>=</Purple>{" "}
          <Blue>"</Blue>
          <Green>Mood for Spotify</Green>
          <Blue>";</Blue>
        </div>
        <div>
          <Line>3</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>about</Text> <Purple>=</Purple>{" "}
          <Blue>"</Blue>
          <Green>Discover music that matches your MOOD</Green>
          <Blue>";</Blue>
        </div>
        <div>
          <Line>4</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>description</Text> <Purple>=</Purple>{" "}
        </div>
        <div>
          <Line>5</Line>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <Blue>"</Blue>
          <Green>
            A single-page application which allows users to visualize
            personalized Spotify data and create new playlists using custom
            filters.
          </Green>
          <Blue>";</Blue>
        </div>
        <div>
          <Line>6</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>url</Text> <Purple>=</Purple>{" "}
          <Blue>"</Blue>
          <Orange
            href="https://mood-for-spotify.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mood-for-spotify.herokuapp.com/
          </Orange>
          <Blue>";</Blue>
        </div>
        <div>
          <Line>7</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>github</Text> <Purple>=</Purple>{" "}
          <Blue>"</Blue>
          <Orange
            href="https://github.com/diptangshug233/mood-for-spotify"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/diptangshug233/mood-for-spotify
          </Orange>
          <Blue>";</Blue>
        </div>
        <div>
          <Line>8</Line>&emsp;&emsp;&emsp;&emsp;
          <Purple>const</Purple> <Text>built</Text> <Purple>= [</Purple>
          <Blue>"</Blue>
          <Green>React.js</Green>
          <Blue>"</Blue>
          <Text>,</Text> <Blue>"</Blue>
          <Green>Styled-Components</Green>
          <Blue>"</Blue>
          <Text>,</Text> <Blue>"</Blue>
          <Green>Node.js</Green>
          <Blue>"</Blue>
          <Text>,</Text> <Blue>"</Blue>
          <Green>Express</Green>
          <Blue>"</Blue>
          <Purple>]</Purple>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>9</Line>&emsp;&emsp;&emsp;&emsp;
          <Blue>
            <i>return</i>;
          </Blue>
        </div>
        <div>
          <Line>10</Line>&emsp;
          <Yellow>{`}`}</Yellow>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>11</Line>&emsp;
        </div>
        <div>
          <Line>12</Line>&emsp;
          <Purple>const</Purple> <Text>otherProjects</Text> <Purple>=</Purple>{" "}
          <Yellow>[</Yellow>
        </div>
        <div>
          <Line>13</Line>&emsp;&emsp;&emsp;
          <Purple>{`{`}</Purple>
        </div>
        <div>
          <Line>14</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>title</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>Portfolio</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>15</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>about</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>VS Code themed personal portfolio</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>16</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>link</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Orange
            href="https://github.com/diptangshug233/portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Orange>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>17</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>built</Green>
          <Blue>: </Blue>
          <DeepBlue>[</DeepBlue>
          <Green>
            <Blue>"</Blue>React.js<Blue>"</Blue>
            <Text>, </Text> <Blue>"</Blue>Styled-Components<Blue>"</Blue>
          </Green>
          <DeepBlue>]</DeepBlue>
          <Text>,</Text>{" "}
        </div>
        <div>
          <Line>18</Line>&emsp;&emsp;&emsp;
          <Purple>{`}`}</Purple>
          <Text>,</Text>
        </div>

        <div>
          <Line>19</Line>&emsp;&emsp;&emsp;
          <Purple>{`{`}</Purple>
        </div>
        <div>
          <Line>20</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>title</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>Task-Tracker</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>21</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>about</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>React introduction project</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>22</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>link</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Orange
            href="https://diptangshug233.github.io/task-tracker/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live
          </Orange>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>23</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>built</Green>
          <Blue>: </Blue>
          <DeepBlue>[</DeepBlue>
          <Green>
            <Blue>"</Blue>React.js<Blue>"</Blue>
          </Green>
          <DeepBlue>]</DeepBlue>
          <Text>,</Text>
        </div>
        <div>
          <Line>24</Line>&emsp;&emsp;&emsp;
          <Purple>{`}`}</Purple>
          <Text>,</Text>
        </div>
        <div>
          <Line>25</Line>&emsp;&emsp;&emsp;
          <Purple>{`{`}</Purple>
        </div>
        <div>
          <Line>26</Line>&emsp;&emsp;&emsp;&emsp;&emsp;
          <Green>title</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>FCC Web Design Portfolio</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>27</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>about</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>FCC Responsive Web Design Projects</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>28</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>link</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Orange
            href="https://diptangshug233.github.io/Personal-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            live
          </Orange>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>29</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>built</Green>
          <Blue>: </Blue>
          <DeepBlue>[</DeepBlue>
          <Green>
            <Blue>"</Blue>HTML<Blue>"</Blue>
            <Text>, </Text> <Blue>"</Blue>CSS<Blue>"</Blue>
          </Green>
          <DeepBlue>]</DeepBlue>
          <Text>,</Text>
        </div>
        <div>
          <Line>30</Line>&emsp;&emsp;&emsp;
          <Purple>{`}`}</Purple>
          <Text>,</Text>
        </div>

        <div>
          <Line>31</Line>&emsp;&emsp;&emsp;
          <Purple>{`{`}</Purple>
        </div>
        <div>
          <Line>32</Line>&emsp;&emsp;&emsp;&emsp;&emsp;
          <Green>title</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>Business Case Study</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>33</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>about</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Green>Data visualization case study</Green>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>34</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>link</Green>
          <Blue>: </Blue>
          <Blue>"</Blue>
          <Orange
            href="https://github.com/diptangshug233/PowerBI_SalesInsights"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Orange>
          <Blue>"</Blue>
          <Text>, </Text>
        </div>
        <div>
          <Line>35</Line>&emsp;&emsp;&emsp;&emsp;&emsp;<Green>built</Green>
          <Blue>: </Blue>
          <DeepBlue>[</DeepBlue>
          <Green>
            <Blue>"</Blue>MySQL<Blue>"</Blue>
            <Text>, </Text> <Blue>"</Blue>Power Bi<Blue>"</Blue>
          </Green>
          <DeepBlue>]</DeepBlue>
          <Text>,</Text>
        </div>
        <div>
          <Line>36</Line>&emsp;&emsp;&emsp;
          <Purple>{`}`}</Purple>
          <Text>,</Text>
        </div>

        <div>
          <Line>37</Line>&emsp;
          <Yellow>]</Yellow>
          <Blue>;</Blue>
        </div>
      </Container>
    </>
  );
};

export default Projects;

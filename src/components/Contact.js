import {
  Blue,
  Class,
  Line,
  Prop,
  Red,
  Val,
  Yellow,
  Container,
  Purple,
} from "../styles/CSS";

const Contact = () => {
  return (
    <>
      <Container>
        <div>
          <Line>1</Line>&emsp;
          <Blue>.</Blue>
          <Class>socials</Class>
          {` `}
          <Yellow>{`{`}</Yellow>
        </div>
        <div>
          <Line>2</Line>&emsp;&emsp;&emsp;<Prop>email</Prop>
          <Blue>:</Blue>
          {` `}
          <Val
            href="mailto:dippghosh7@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Red>dippghosh7@gmail.com</Red>
          </Val>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>3</Line>&emsp;&emsp;&emsp;<Prop>phone</Prop>
          <Blue>:</Blue>
          {` `}
          <Val
            href="tel:+919330894598"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Red>
              <Purple>(</Purple>+91<Purple>)</Purple>9330894598
            </Red>
          </Val>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>4</Line>&emsp;&emsp;&emsp;<Prop>linkedin</Prop>
          <Blue>:</Blue>
          {` `}
          <Val
            href="https://www.linkedin.com/in/diptangshu-ghosh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Red>diptangshu-ghosh</Red>
          </Val>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>5</Line>&emsp;&emsp;&emsp;<Prop>github</Prop>
          <Blue>:</Blue>
          {` `}
          <Val
            href="https://github.com/diptangshug233"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Red>diptangshug233</Red>
          </Val>
          <Blue>;</Blue>
        </div>
        <div>
          <Line>6</Line>&emsp;
          <Yellow>{`}`}</Yellow>
        </div>
      </Container>
    </>
  );
};

export default Contact;

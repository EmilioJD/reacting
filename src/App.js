import "./App.css";
import React from "react";
import HTMLFlipBook from "react-pageflip";
import pic1 from "./images/indigo-genesis-final.png";
import pic2 from "./images/indigo-genesis-final2.png";
import pic3 from "./images/indigo-genesis-final3.png";

const beige = "#f2e9e4";
const darkbeige = "#c9ada7";
const brown = "#9a8c98";
const blue = "#4a4e69";
const navy = "#22223b";

const ColoredLine = ({ color, height = 5, width = "60%" }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: height,
      width: width,
    }}
  />
);

const SquareBox = ({ color, height = "40%", width = "60%", content }) => (
  <div
    style={{
      backgroundColor: color,
      marginTop: "30px",
      height: height,
      width: width,
    }}
  >
    <p>{content}</p>
  </div>
);

// this component implements a menu with a content display area
const MenuWithContent = ({ nothing }) => (
  <div className="menu-with-content">
    <div className="menu">
      <p>Thing</p>
      <p>Thing</p>
      <p>Thing</p>
      <p>Thing</p>
    </div>
    <div className="content">
      <h1>Thing</h1>
    </div>
  </div>
);

function App() {
  //FadeInSection from selbekk.io
  function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
      let options = {
        root: document.querySelector("#scrollArea"),
        rootMargin: "0px",
        threshold: 0.1,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      }, options);

      observer.observe(domRef.current);
      return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <div
        className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
  }
  return (
    <>
      <FadeInSection>
        <div className="body">
          <h1>welcome to "whyemil.io"</h1>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="body">
          <h1>this is my portfolio</h1>
        </div>
      </FadeInSection>

      {/* <FadeInSection>
        <div className="body">
          <MenuWithContent></MenuWithContent>
        </div>
      </FadeInSection> */}

      <FadeInSection>
        <div className="body">
          <h1>nothing is here yet i guess..</h1>
        </div>
      </FadeInSection>

      {/* <FadeInSection> */}
        {/* <HTMLFlipBook width={900} height={1200}>
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic1}/>
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic1}/>
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic1}/>
          <img src={pic1}/>
          <img src={pic2}/>
          <img src={pic3}/>
          <img src={pic1}/>
        </HTMLFlipBook> */}
      {/* </FadeInSection> */}
    </>
  );
}

export default App;

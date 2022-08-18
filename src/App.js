import "./App.css";
import React from "react";

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
          <h1>welcome to "why emilio"</h1>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="body">
          <h1>this is my website</h1>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className="body">
          <h1>nothing is here yet i guess..</h1>
        </div>
      </FadeInSection>

      {/* <div className="body">
        <h1>this is emil.io</h1>
      </div>
      <div className="body">
        <h1>welcome to my website</h1>
      </div> */}
    </>
  );
}

export default App;
